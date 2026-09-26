/* ============================================================
   Footprints — 世界足迹地图（脉冲雷达标记 S3）
   触发方式：顶部导航 "Footprints"(与 CV 并列) 或正文顶部左右 tab。
   点击在正文区原地切换视图，不跳页；头像列(sidebar)始终保留。
   依赖：jsvectormap（CDN）+ world map data。
   ============================================================ */
(function () {
  "use strict";

  var LOC = [
    { name: "北京 Beijing",     coords: [39.90, 116.41] },
    { name: "杭州 Hangzhou",    coords: [30.27, 120.15] },
    { name: "上海 Shanghai",    coords: [31.23, 121.47] },
    { name: "深圳 Shenzhen",    coords: [22.54, 114.06] },
    { name: "长沙 Changsha",    coords: [28.23, 112.94] },
    { name: "武汉 Wuhan",       coords: [30.59, 114.31] },
    { name: "昆明 Kunming",     coords: [25.04, 102.71] },
    { name: "东京 Tokyo",       coords: [35.68, 139.69] },
    { name: "首尔 Seoul",       coords: [37.57, 126.98] },
    { name: "曼谷 Bangkok",     coords: [13.76, 100.50] },
    { name: "新加坡 Singapore", coords: [1.35, 103.82] },
    { name: "Lancaster",       coords: [54.05, -2.80] },
    { name: "布达佩斯 Budapest", coords: [47.50, 19.04] },
    { name: "乌鲁木齐 Ürümqi",   coords: [43.83, 87.62] },
    { name: "呼和浩特 Hohhot",   coords: [40.84, 111.75] }
  ];

  function cssv(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  var mapEl = null;
  var mapInst = null;

  function buildMap() {
    mapEl = document.getElementById("fp-map");
    if (!mapEl) { return; }
    if (typeof window.jsVectorMap !== "function") {
      var fb = document.getElementById("fp-fallback");
      if (fb) { fb.classList.add("show"); }
      return;
    }
    if (mapInst) { try { mapInst.destroy(); } catch (e) {} mapInst = null; }
    var olds = mapEl.querySelectorAll(".jvm-container");
    for (var i = 0; i < olds.length; i++) { olds[i].remove(); }

    try {
      mapInst = new jsVectorMap({
        selector: mapEl,
        map: "world",
        zoomOnScroll: false,
        zoomButtons: false,
        backgroundColor: "transparent",
        showTooltip: true,
        regionStyle: {
          initial: { fill: cssv("--fp-land"), stroke: cssv("--fp-stroke"), strokeWidth: 0.4 },
          hover: { fill: cssv("--fp-land") }
        },
        markers: LOC,
        markerStyle: {
          initial: { fill: cssv("--fp-pin"), r: 3 },
          hover: { fill: cssv("--fp-pin") }
        }
      });
    } catch (err) {
      var f = document.getElementById("fp-fallback");
      if (f) { f.classList.add("show"); }
      return;
    }
    requestAnimationFrame(function () { requestAnimationFrame(injectRipples); });
  }

  /* 在每个标记周围注入两圈动画涟漪（SVG 坐标系内，随缩放稳定） */
  function injectRipples() {
    if (!mapEl) { return; }
    var svg = mapEl.querySelector(".jvm-container svg");
    if (!svg) { return; }
    var old = svg.querySelectorAll(".fp-ripple");
    for (var i = 0; i < old.length; i++) { old[i].remove(); }
    var markers = svg.querySelectorAll(".jvm-marker");
    var NS = "http://www.w3.org/2000/svg";
    for (var j = 0; j < markers.length; j++) {
      var m = markers[j];
      var cx = m.getAttribute("cx");
      var cy = m.getAttribute("cy");
      if (cx === null && m.querySelector) {
        var c = m.querySelector("circle");
        if (c) { cx = c.getAttribute("cx"); cy = c.getAttribute("cy"); }
      }
      if (cx === null) { continue; }
      for (var n = 0; n < 2; n++) {
        var ring = document.createElementNS(NS, "circle");
        ring.setAttribute("cx", cx);
        ring.setAttribute("cy", cy);
        ring.setAttribute("r", 3);
        ring.setAttribute("class", n === 1 ? "fp-ripple d2" : "fp-ripple");
        m.parentNode.insertBefore(ring, m);
      }
    }
  }

  function show() {
    document.body.classList.add("fp-on");
    window.scrollTo(0, 0);
    requestAnimationFrame(buildMap);
  }
  function hide() {
    document.body.classList.remove("fp-on");
  }
  function sync() {
    if (location.hash === "#footprints") { show(); } else { hide(); }
  }

  function goFootprints(e) {
    if (e) { e.preventDefault(); }
    if (location.hash !== "#footprints") { history.pushState(null, "", "#footprints"); }
    show();
  }
  function goAbout() {
    history.pushState("", document.title, location.pathname + location.search);
    hide();
  }

  function wire() {
    /* 顶部导航 "Footprints"(与 CV 并列) */
    var links = document.querySelectorAll('a[href*="#footprints"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", goFootprints);
    }

    /* 地图面板内的 "← Back" 返回关于我 */
    var back = document.getElementById("fp-back");
    if (back) {
      back.addEventListener("click", function (e) { e.preventDefault(); goAbout(); });
    }

    window.addEventListener("hashchange", sync);

    /* 主题切换（html[data-theme]）时，若正在看地图则重建以换配色 */
    if (window.MutationObserver) {
      var mo = new MutationObserver(function () {
        if (document.body.classList.contains("fp-on")) { buildMap(); }
      });
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }

    var t;
    window.addEventListener("resize", function () {
      if (!document.body.classList.contains("fp-on")) { return; }
      clearTimeout(t);
      t = setTimeout(buildMap, 200);
    });

    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
