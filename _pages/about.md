---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<style>
    .experience-card {
        display: flex;
        align-items: center;
        background: #f9f9f9;
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 0px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .experience-card:hover {
       
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    .experience-logo {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 8px;
        object-fit: contain;
    }
    .experience-info {
        font-family: "Segoe UI", sans-serif;
    }
    .experience-info strong {
        font-size: 1.1em;
    }
    .experience-info a {
        text-decoration: none;
        color: #ca6f6f;
    }
    .experience-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 桌面端每行 3 个 */
        gap: 14px;
    }
    .experience-card {
        box-sizing: border-box;
        padding: 12px; /* 覆盖上方 16px：三列布局下更紧凑 */
    }
    /* 三列布局下适度缩小 logo 与字体，保证机构名尽量单行 */
    .experience-container .experience-logo {
        width: 44px;
        height: 44px;
        margin-right: 12px;
    }
    .experience-container .experience-info {
        font-size: 12.5px;
        line-height: 1.35;
    }
    .experience-container .experience-info strong {
        font-size: 1.0em;
    }
    /* 回退机制：窄屏自动降列，避免三列被挤爆 */
    @media (max-width: 900px) {
        .experience-container {
            grid-template-columns: repeat(2, 1fr); /* 平板：2 列 */
        }
    }
    @media (max-width: 600px) {
        .experience-container {
            grid-template-columns: 1fr; /* 手机：1 列堆叠 */
        }
    }
    .publication-card {
        display: flex;
        align-items: center;
        padding: 3px;
        border: 1.5px solid #ddd;
        border-radius: 8px;
        background: #fff;
        box-sizing: border-box;
        margin-bottom: 20px; 
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        color: #5f6368; /* 正文整体更浅 */
    }
    .publication-card > div > strong,
    .publication-card > div > div > strong {
        color: #202124;
    }
    .publication-card i {
        color: #6b7280;
    }
    .publication-card:hover {
       
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .publication-card.featured {
        border-color: #f5bba7;       /* 更浅的哈密瓜色边框 */
        background: #fef5f1;         /* 非常浅的哈密瓜色背景 */
        box-shadow: 0 4px 8px rgba(242, 166, 120, 0.2); /* 更柔和的初始阴影 */
        z-index: 10;
    }

    .publication-card.featured:hover {
        box-shadow: 0 8px 16px rgba(242, 166, 120, 0.4); 
    }
    
    .publication-card.non-featured {
        display: flex; /* 默认隐藏非精选出版物 */
    }
    
    .pub-button-container {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        flex-wrap: wrap;
    }
    
    .pub-button {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .pub-button:hover {
        background-color: #e0e0e0;
    }
    
    .pub-button.active {
        background-color: #ca6f6f;
        color: white;
        border-color: #ca6f6f;
    }

    /* Projects cards: keep styles independent from publications */
    .project-card {
        display: flex;
        align-items: center;
        padding: 3px;
        border: 1.5px solid #ddd;
        border-radius: 8px;
        background: #fff;
        box-sizing: border-box;
        margin-bottom: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        color: #5f6368;
    }

    .project-card > div > strong,
    .project-card > div > div > strong {
        color: #202124;
    }

    .project-card i {
        color: #6b7280;
    }

    .project-card:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

</style>
<html> 
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
        body {
            background-color:	 #FFFFFF;
            font-family: 'Arial Rounded MT Bold', 'Verdana', sans-serif;
            font-size: 15px;
        }
        .main-heading {
            font-family: 'Permanent Marker', cursive;
            text-align: center;
            color: #ca6f6f;
        }
        div.markdown-body a,a {
            text-decoration: none !important;
            color: #ca6f6f;
            transition: all 0.3s ease; /* 平滑过渡效果 */
        }
        div.markdown-body a:hover, a:hover {
            color: #c71585;            /* 悬浮时变深一点的颜色 */
            text-decoration: underline; /* 加上悬浮时的下划线 */
        }
    </style>
</head>
<body>
<h1 class="main-heading">Hi there <img src="images/Hi.gif" width="40px"> Welcome to my Homepage!</h1>
</body>
</html>

<!-- ========================= PARTICLES BACKGROUND START =========================
     背景粒子网络特效。想还原：整段删除本注释到 END 之间的内容即可，
     或运行： git checkout -- _pages/about.md
     参数在下方脚本 CFG 里可调：color 颜色 / density 越大越疏 / maxDist 连线距离 / speed 速度
============================================================================= -->
<style>
    html { background: #FFFFFF; }                 /* 基础白底放到 html 上 */
    body { background: transparent !important; }  /* 覆盖上方 body 白底，否则会盖住画布 */
    .page__inner-wrap { background: #FFFFFF; }   /* 白底只贴住文字容器；.page 的右侧大留白让给粒子，右边界更靠近文字。想让粒子离文字更远就把白底改回 .page */
    /* 收窄正文列右侧的空白侧栏(主题默认留 16.95%)，让正文向右延伸、整体更居中；仅桌面双栏布局生效，窄屏自动回退默认单栏 */
    @media screen and (min-width: 925px) {
        .page { padding-right: 10%; }
    }
    #bg-particles {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: -1;            /* 置于所有内容之后 */
        pointer-events: none;   /* 不拦截点击/选中 */
        display: block;
    }
</style>
<canvas id="bg-particles"></canvas>
<script>
(function () {
    var canvas = document.getElementById('bg-particles');
    if (!canvas || !canvas.getContext) { return; } /* 优雅降级：不支持 canvas 则不显示 */
    var ctx = canvas.getContext('2d');

    /* ===== 可调参数（本主题会压缩 HTML 并删换行，脚本内只能用块注释，切勿用行注释）===== */
    var CFG = {
        color: '130,140,150',   /* 点/线颜色 (RGB)，极淡灰蓝 */
        density: 8500,          /* 每多少 px² 一个点（越大越疏） */
        maxCount: 130,          /* 点数量上限 */
        maxDist: 130,           /* 邻近点连线阈值(px) */
        speed: 0.28,            /* 漂移速度 */
        dotRadius: 1.7,         /* 点半径 */
        lineWidth: 1,           /* 线宽 */
        mouseDist: 170          /* 鼠标连线半径 */
    };

    var w, h, dpr, particles = [];
    var mouse = { x: null, y: null };

    function resize() {
        dpr = window.devicePixelRatio || 1;
        w = canvas.clientWidth; h = canvas.clientHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var count = Math.min(CFG.maxCount, Math.floor((w * h) / CFG.density));
        particles = [];
        for (var i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w, y: Math.random() * h,
                vx: (Math.random() - 0.5) * CFG.speed,
                vy: (Math.random() - 0.5) * CFG.speed
            });
        }
    }

    function step() {
        ctx.clearRect(0, 0, w, h);
        var i, j, a, b, dx, dy, d, alpha;
        for (i = 0; i < particles.length; i++) {
            a = particles[i];
            a.x += a.vx; a.y += a.vy;
            if (a.x < 0 || a.x > w) { a.vx *= -1; }
            if (a.y < 0 || a.y > h) { a.vy *= -1; }
        }
        for (i = 0; i < particles.length; i++) {
            a = particles[i];
            for (j = i + 1; j < particles.length; j++) {
                b = particles[j];
                dx = a.x - b.x; dy = a.y - b.y; d = Math.sqrt(dx * dx + dy * dy);
                if (d < CFG.maxDist) {
                    alpha = (1 - d / CFG.maxDist) * 0.35;
                    ctx.strokeStyle = 'rgba(' + CFG.color + ',' + alpha + ')';
                    ctx.lineWidth = CFG.lineWidth;
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                }
            }
            if (mouse.x !== null) {
                dx = a.x - mouse.x; dy = a.y - mouse.y; d = Math.sqrt(dx * dx + dy * dy);
                if (d < CFG.mouseDist) {
                    alpha = (1 - d / CFG.mouseDist) * 0.5;
                    ctx.strokeStyle = 'rgba(' + CFG.color + ',' + alpha + ')';
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
                }
            }
        }
        ctx.fillStyle = 'rgba(' + CFG.color + ',0.55)';
        for (i = 0; i < particles.length; i++) {
            a = particles[i];
            ctx.beginPath(); ctx.arc(a.x, a.y, CFG.dotRadius, 0, Math.PI * 2); ctx.fill();
        }
    }

    function loop() { step(); window.requestAnimationFrame(loop); }

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseout', function () { mouse.x = mouse.y = null; });

    resize();
    if (reduce) { step(); } else { loop(); } /* 尊重"减弱动态"偏好：只画静态一帧 */
})();
</script>
<!-- ========================= PARTICLES BACKGROUND END ========================= -->

<!-- ========================= SITE STATS (VIEWS + LIKES) START =========================
     访问量 Views(侧栏头像下方) + 点赞 Like(页脚版权行下方)。仅主页生效。
     还原：整段删除本注释到 END 之间的内容即可。
     计数存储：Firebase Firestore。未填配置(FB=null)时=本地演示模式(localStorage)，方便本地预览。
     初始种子：likes=281 / views=3473（正式上线在 Firestore 建 stats/home 文档写入，非页面硬编码）。
     ⚠ 本主题压缩 HTML 会删换行，脚本内只能用块注释，禁止使用行注释。
============================================================================= -->
<style>
  #site-views{margin:14px 0 6px;display:inline-flex;align-items:center;gap:7px;color:#9098a1;font-size:13px;letter-spacing:.2px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;}
  #site-views .eye-ic{color:#b6bcc4;flex:none;}
  #site-views b{color:#6a7078;font-weight:700;font-variant-numeric:tabular-nums;}
  #site-like-wrap{margin-top:16px;display:flex;justify-content:center;}
  #site-like{display:inline-flex;align-items:center;gap:8px;cursor:pointer;border:1px solid #e3b3b3;background:#fff;color:#c0564f;border-radius:22px;padding:9px 22px;font:600 14px/1 -apple-system,Segoe UI,Roboto,sans-serif;transition:background .15s,color .15s,border-color .15s;}
  #site-like:hover{background:#fdeeee;}
  #site-like.liked{background:#c0564f;color:#fff;border-color:#c0564f;cursor:default;}
  #site-like .heart{font-size:15px;line-height:1;}
  #site-like.pulse .heart{animation:sl-pop .4s;}
  @keyframes sl-pop{0%{transform:scale(1)}40%{transform:scale(1.5)}100%{transform:scale(1)}}
  #site-like b{font-variant-numeric:tabular-nums;}
</style>
<script>
(function () {
    /* ===== 配置区 ===== */
    var SEED_VIEWS = 3473;   /* 浏览量起步值（云端无数据时的兜底显示） */
    var SEED_LIKES = 281;    /* 点赞起步值 */
    var FB = {
        apiKey: "AIzaSyC9SXp_sJxcqe0p79l2ppsvVlI7j_-ubhg",
        authDomain: "homepage-likes.firebaseapp.com",
        projectId: "homepage-likes",
        storageBucket: "homepage-likes.firebasestorage.app",
        messagingSenderId: "440428448632",
        appId: "1:440428448632:web:341b659c7541b6dcb0168d"
    };  /* 填入 Firebase config 对象即切换为云端实时模式；null=本地演示模式 */

    function fmt(n) { return (n == null ? 0 : n).toLocaleString('en-US'); }
    function setViews(n) { var e = document.getElementById('views-num'); if (e) { e.textContent = fmt(n); } }
    function setLikes(n) { var e = document.getElementById('like-num'); if (e) { e.textContent = fmt(n); } }
    function alreadyLiked() { try { return localStorage.getItem('site_liked') === '1'; } catch (e) { return false; } }
    function markLiked() {
        try { localStorage.setItem('site_liked', '1'); } catch (e) {}
        var b = document.getElementById('site-like');
        if (b) { b.classList.add('liked', 'pulse'); setTimeout(function () { b.classList.remove('pulse'); }, 400); }
    }

    var onLikeClick = function () {}; /* 由具体模式赋值 */

    /* ===== 注入 Views 到侧栏（头像/bio 下方）===== */
    function injectViews() {
        var host = document.querySelector('.author__content');
        if (!host || document.getElementById('site-views')) { return; }
        var el = document.createElement('span');
        el.id = 'site-views';
        el.innerHTML = '<svg class="eye-ic" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg><span>Views</span><b id="views-num">' + fmt(SEED_VIEWS) + '</b>';
        var bio = host.querySelector('.author__bio');
        if (bio) { bio.insertAdjacentElement('afterend', el); } else { host.appendChild(el); }
    }

    /* ===== 注入 Like 到页脚 ===== */
    function injectLike() {
        var host = document.querySelector('.page__footer-copyright');
        if (!host || document.getElementById('site-like-wrap')) { return; }
        var wrap = document.createElement('div');
        wrap.id = 'site-like-wrap';
        wrap.innerHTML = '<button id="site-like" type="button"><span class="heart">&#9829;</span><span>Like</span><b id="like-num">' + fmt(SEED_LIKES) + '</b></button>';
        host.appendChild(wrap);
        if (alreadyLiked()) { wrap.querySelector('#site-like').classList.add('liked'); }
        wrap.querySelector('#site-like').addEventListener('click', function () { onLikeClick(); });
    }

    /* ===== 本地演示模式（无 Firebase 时）===== */
    function runDemo() {
        var v = NaN, l = NaN;
        try { v = parseInt(localStorage.getItem('demo_views'), 10); } catch (e) {}
        if (isNaN(v)) { v = SEED_VIEWS; }
        v = v + 1;
        try { localStorage.setItem('demo_views', v); } catch (e) {}
        setViews(v);
        try { l = parseInt(localStorage.getItem('demo_likes'), 10); } catch (e) {}
        if (isNaN(l)) { l = SEED_LIKES; }
        setLikes(l);
        onLikeClick = function () {
            if (alreadyLiked()) { return; }
            l = l + 1;
            try { localStorage.setItem('demo_likes', l); } catch (e) {}
            setLikes(l);
            markLiked();
        };
    }

    /* ===== Firebase 云端模式 ===== */
    function loadScript(src, cb) {
        var s = document.createElement('script');
        s.src = src; s.onload = function () { cb(null); };
        s.onerror = function () { cb(new Error('load fail')); };
        document.head.appendChild(s);
    }
    function runFirebase() {
        var base = 'https://www.gstatic.com/firebasejs/10.12.2/';
        loadScript(base + 'firebase-app-compat.js', function (e1) {
            if (e1) { return; } /* 加载失败：保持种子静态显示，页面不报错 */
            loadScript(base + 'firebase-firestore-compat.js', function (e2) {
                if (e2) { return; }
                try {
                    firebase.initializeApp(FB);
                    var db = firebase.firestore();
                    var ref = db.collection('stats').doc('home');
                    var inc = firebase.firestore.FieldValue.increment(1);
                    /* 每次加载 views+1（总访问次数 PV），再读回显示 */
                    ref.set({ views: inc }, { merge: true }).then(function () { return ref.get(); }).then(function (d) {
                        var data = (d && d.exists) ? d.data() : {};
                        setViews(typeof data.views === 'number' ? data.views : SEED_VIEWS);
                        setLikes(typeof data.likes === 'number' ? data.likes : SEED_LIKES);
                    }).catch(function () {});
                    onLikeClick = function () {
                        if (alreadyLiked()) { return; }
                        markLiked();
                        var ce = document.getElementById('like-num');
                        var cur = ce ? parseInt(ce.textContent.replace(/,/g, ''), 10) : SEED_LIKES;
                        setLikes(isNaN(cur) ? SEED_LIKES + 1 : cur + 1); /* 乐观更新 */
                        ref.set({ likes: firebase.firestore.FieldValue.increment(1) }, { merge: true })
                           .then(function () { return ref.get(); })
                           .then(function (d) { if (d && d.exists && typeof d.data().likes === 'number') { setLikes(d.data().likes); } })
                           .catch(function () {});
                    };
                } catch (err) { /* 初始化异常：保持种子显示 */ }
            });
        });
    }

    function boot() {
        injectViews();
        injectLike();
        if (FB) { runFirebase(); } else { runDemo(); }
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', boot); } else { boot(); }
})();
</script>
<!-- ========================= SITE STATS END ========================= -->

<!-- ========================= FOOTPRINTS MAP START =========================
     世界足迹地图。与顶部导航 "Footprints" 联动，点击在正文区原地切换(不跳页)，
     头像列(sidebar)始终保留。逻辑在 assets/js/footprints.js（外部文件，避开压缩坑）。
     还原：删除本注释到 END 之间的内容 + navigation.yml 的 Footprints 项 + footprints.js。
============================================================================= -->
<style>
  :root{
    --fp-map-bg:#dbe3f0; --fp-land:#b3c2de; --fp-stroke:#ffffff; --fp-pin:#c0564f;
  }
  html[data-theme="dark"]{
    --fp-map-bg:#0b1020; --fp-land:#26324c; --fp-stroke:#0b1020; --fp-pin:#ff7a6b;
  }
  /* 面板默认隐藏；只有 body.fp-on 时显示，同时隐藏正文其它块 */
  #fp-panel{display:none;}
  body.fp-on #fp-panel{display:block;}
  body.fp-on .page__content > *:not(#fp-panel){display:none !important;}

  /* 顶部导航 Footprints 略放大(不影响相邻 CV) */
  #site-nav a[href*="#footprints"]{font-size:1.2em;}

  #fp-panel .fp-head{display:flex; align-items:flex-end; justify-content:space-between; gap:16px; flex-wrap:wrap; margin:6px 0 16px;}
  #fp-panel .fp-title{font-size:1.9em; font-weight:700; line-height:1.1; margin:0;}
  #fp-panel .fp-sub{color:#8b827a; font-size:14px; margin:6px 0 0;}
  html[data-theme="dark"] #fp-panel .fp-sub{color:#a99f94;}
  #fp-back{flex:none; display:inline-flex; align-items:center; gap:6px; cursor:pointer;
    border:1px solid #e3b3b3; background:#fff; color:#c0564f; border-radius:20px;
    padding:7px 16px; font:600 13px/1 -apple-system,Segoe UI,Roboto,sans-serif; transition:background .15s,color .15s;}
  #fp-back:hover{background:#c0564f; color:#fff; border-color:#c0564f;}
  html[data-theme="dark"] #fp-back{background:transparent; border-color:#5a4a44; color:#e07a6f;}
  html[data-theme="dark"] #fp-back:hover{background:#e07a6f; color:#16130f;}

  #fp-frame{position:relative; border:1px solid #d7cfc5; border-radius:16px; overflow:hidden;
    background:var(--fp-map-bg); transform:translateY(-4px);
    box-shadow:0 22px 48px -12px rgba(43,38,33,.28), 0 8px 18px rgba(43,38,33,.12);
    transition:transform .25s ease, box-shadow .25s ease;}
  #fp-frame:hover{transform:translateY(-8px);
    box-shadow:0 30px 60px -12px rgba(43,38,33,.34), 0 10px 22px rgba(43,38,33,.14);}
  html[data-theme="dark"] #fp-frame{border-color:#3a3229;
    box-shadow:0 24px 56px -12px rgba(0,0,0,.66), 0 8px 20px rgba(0,0,0,.5);}
  html[data-theme="dark"] #fp-frame:hover{
    box-shadow:0 32px 68px -12px rgba(0,0,0,.72), 0 10px 24px rgba(0,0,0,.55);}
  #fp-map{position:relative; width:100%; aspect-ratio:2 / 1;}
  #fp-map .jvm-container{width:100%; height:100%;}
  #fp-panel .jvm-container{position:relative; overflow:hidden; touch-action:none; background:transparent;}
  #fp-panel .jvm-tooltip{position:absolute; display:none; border-radius:7px; padding:5px 9px; z-index:9;
    background:#211d18; color:#fff; font:500 12px -apple-system,Segoe UI,sans-serif; white-space:nowrap;
    box-shadow:0 6px 20px rgba(0,0,0,.35); pointer-events:none;}
  #fp-panel .jvm-tooltip.jvm-show{display:block;}
  #fp-panel .jvm-zoom-btn{display:none;}
  #fp-vignette{position:absolute; inset:0; pointer-events:none; opacity:0; z-index:2;
    background:radial-gradient(120% 90% at 50% 45%, transparent 58%, rgba(6,10,20,.5) 100%);}
  html[data-theme="dark"] #fp-vignette{opacity:1;}
  #fp-fallback{position:absolute; inset:0; display:none; align-items:center; justify-content:center;
    color:#8b827a; font-size:14px; text-align:center; padding:24px; z-index:6;}
  #fp-fallback.show{display:flex;}

  /* 脉冲雷达标记：标记发光 + 两圈向外扩散的涟漪 */
  #fp-map .jvm-marker{filter:drop-shadow(0 0 5px var(--fp-pin));}
  #fp-map .fp-ripple{fill:none; stroke:var(--fp-pin); transform-box:fill-box; transform-origin:center;
    animation:fp-ripple 2.4s ease-out infinite;}
  #fp-map .fp-ripple.d2{animation-delay:1.2s;}
  @keyframes fp-ripple{0%{transform:scale(.6); opacity:.8;} 100%{transform:scale(2.1); opacity:0;}}
  @media (prefers-reduced-motion: reduce){ #fp-map .fp-ripple{animation:none; opacity:0;} }

  #fp-legend{display:flex; flex-wrap:wrap; gap:7px; margin-top:16px;}
  #fp-legend .fp-chip{display:inline-flex; align-items:center; gap:6px; padding:4px 11px; border-radius:20px;
    background:#faf8f6; border:1px solid #e7e1da; font-size:12.5px; color:#2b2621;}
  html[data-theme="dark"] #fp-legend .fp-chip{background:#1a1712; border-color:#332d25; color:#f0ebe3;}
  #fp-legend .fp-chip i{font-style:normal; color:var(--fp-pin);}
</style>
<div id="fp-panel" markdown="0">
  <div class="fp-head">
    <div>
      <p class="fp-title">Footprints</p>
      <p class="fp-sub">Every marker a place I've studied in, wandered through, or called home.</p>
    </div>
    <a id="fp-back" role="button">← Back</a>
  </div>
  <div id="fp-frame">
    <div id="fp-map"></div>
    <div id="fp-vignette"></div>
    <div id="fp-fallback">地图加载失败 —— 请检查网络或稍后刷新。</div>
  </div>
</div>
<!-- ========================= FOOTPRINTS MAP END ========================= -->


I am a PhD student at [AutoMan@NTU](https://lvchen.wixsite.com/automan), advised by [Prof. Chen Lyu](https://lvchen.wixsite.com/automan), passionate about *Embodied AI, Autonomous Driving and Computer Vision*.

Previously I worked at [LightWheel](), [Neolix]((https://neolix.net/)), [AIR@THU](https://air.tsinghua.edu.cn/en/) with [Prof. Hao Zhao](https://sites.google.com/view/fromandto) and [Autolab@WLU](https://github.com/westlake-autolab) with [Prof. Kaicheng Yu](https://www.yukaicheng.cn/).  

I got my B.Eng. degree from [Huazhong University of Science and Technology]() (2022.9 - 2026.6).

<!-- <h2 class="news">News</h2> -->

News
---------------
- *Internship completed at [Neolix]()*
- *[Hyper²]() is accepted in BMVC 2026🔥*
- *[DriveCombo]() is accepted in CVPR 2026🔥*
- *[UMPE](https://github.com/Ethan-Zheng136/UMPE) is accepted in ICRA 2026 (Oral Presentation)🔥*
- *[Delving into Uncertainty](https://github.com/Ethan-Zheng136/Map-Uncertainty-for-Trajectory-Prediction) is accepted in IROS 2025 (Oral Presentation)🔥*
- *[Chameleon](https://github.com/XR-Lee/neural-symbolic) is accepted in ICRA 2025 (Oral Presentation)🔥*
- *[Brain-Controlled Robotic Arm]() was selected as National Innovation Program (National-level)🏆*


Experience
---------------

<div class="experience-container">
    <div class="experience-card">
        <img src="/images/logo/ntu-logo1.png" alt="Nanyang Technological University" class="experience-logo">
        <div class="experience-info">
            <strong>Nanyang Technological University</strong>
            <div class="date">Aug 2026 – </div>
            <div class="role">Ph.D at <a href="https://lvchen.wixsite.com/automan"><em>AutoMan@NTU</em></a></div>
        </div>
    </div>
    <div class="experience-card">
        <img src="/images/logo/neolix-logo.png" alt="Neolix" class="experience-logo">
        <div class="experience-info">
            <strong>Neolix</strong>
            <div class="date">Feb 2026 – Present</div>
            <div class="role">Research Intern at <a href="https://neolix.net/"><em>Neolix-AD</em></a></div>
        </div>
    </div>
    <div class="experience-card">
        <img src="/images/logo/westlake-logo.png" alt="Westlake University" class="experience-logo">
        <div class="experience-info">
            <strong>Westlake University</strong>
            <div class="date">Jun 2025 – Jan 2026</div>
            <div class="role">Research Assistant at <a href="https://github.com/westlake-autolab"><em>AutoLab</em></a></div>
        </div>
    </div>
    <div class="experience-card">
        <img src="/images/logo/tsinghua-logo.png" alt="Tsinghua University" class="experience-logo">
        <div class="experience-info">
            <strong>Tsinghua University</strong>
            <div class="date">Jun 2024 – Nov 2025</div>
            <div class="role">Research Assistant at <a href="https://air.tsinghua.edu.cn/en/"><em>AIR</em></a></div>
        </div>
    </div>
    <div class="experience-card">
        <img src="/images/logo/lightwheel-logo1.png" alt="LightWheel" class="experience-logo">
        <div class="experience-info">
            <strong>LightWheel</strong>
            <div class="date">Jun 2024 – Jun 2025</div>
            <div class="role">Research Intern at <a href="https://lightwheel.ai/"><em>LightWheel</em></a></div>
        </div>
    </div>
    <div class="experience-card">
        <img src="/images/logo/hust-logo.png" alt="HUST" class="experience-logo">
        <div class="experience-info">
            <strong>Huazhong Univ of Sci and Tech</strong>
            <div class="date">Sep 2022 – Jun 2026</div>
            <div class="role">Research Assistant at <a href="https://xwcv.github.io/"><em>XWCV</em></a></div>
        </div>
    </div>
</div>

<script src="assets/js/show_publications.js"></script>

Projects
---------------
<div class="pub-button-container">
  <button class="pub-button active" onclick="showPublications('all')">All Publications</button>
  <button class="pub-button" onclick="showPublications('featured')">Selected Only</button>
</div>

<div class="publication-card">
<div style="display: flex; align-items: center;">
    <img src="images/publication/YOUDrive/youdrive_pipeline.png" alt="YouDrive" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>YOUDrive: Driving Style as a Steerable Axis for Personalized End-to-End Driving</strong><br>
       <i style="font-size: 13px;">
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>,
    <a href="#" target="_blank"><strong>Jiashu Li</strong></a>,
    <a href="#" target="_blank"><strong>Jiaxing Chen</strong></a>,
    <a href="#" target="_blank"><strong>Tianyu Gao</strong></a>,
    <a href="#" target="_blank"><strong>Lidong Yu</strong></a>&dagger;
    </i><br>
    YOUDrive treats driving style as a continuous, composable axis on a VLA backbone: a flow-matching decoder commits to feasible trajectories instead of averaging, and each persona is a low-rank task vector scaled by one coefficient. The Style Alignment Score (SAS) reports style independently of safety; on NAVSIM, a single coefficient traces a controllable style path while keeping PDMS above 0.90 (up to 0.954).<br> 
    <b><i style="color:#83a1c7;">CVPR 2027 submission &nbsp;</i></b>
    <a href="https://ethan-zheng136.github.io/" target="_blank"><em>[arxiv]</em></a>
    <a href="https://ethan-zheng136.github.io/" target="_blank"><em>[code]</em></a>
    <a href="https://ethan-zheng136.github.io/" target="_blank"><em>[dataset]</em></a>
    </div>
</div>    
</div>

<div class="publication-card">
<div style="display: flex; align-items: center;">
    <img src="images/publication/ATLAS/overview.png" alt="ATLAS" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>ATLAS: Large-Scale Multimodal Autonomous-Driving Backbone Pre-training</strong><br>
       <i style="font-size: 13px;">
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>,
    <a href="#" target="_blank"><strong>Lidong Yu</strong></a>&dagger;
    </i><br>
    ATLAS is a ~7.5B parameter multimodal visual backbone for autonomous driving, pretrained under a multi-teacher distillation framework combining DINOv2/VGGT (geometry & semantics), Cosmos Tokenizer (visual-generation supervision), and a 7B VLM (semantic alignment). I owned the Video Head / Render Decoder, realizing visual-token distillation via the Cosmos CI Tokenizer and systematically analyzing token-space alignment. <br>
    </div>
</div>    
</div>

<div class="publication-card">
    <img src="images/publication/StyleShield/styleshield.png" alt="StyleShield" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>StyleShield: Exposing the Fragility of AIGC Detectors through Continuous Controllable Style Transfer</strong><br>
        <i style="font-size: 13px;">
        <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>&dagger;
        </i><br>
        StyleShield, the first flow matching framework for conditional text style transfer in continuous token embedding space. A single parameter γ provides smooth, continuous control over the evasion--preservation trade-off, fundamentally inaccessible to discrete-token methods. <br>
        <b><i style="color:#83a1c7;">NAACL 2027 submission &nbsp;</i></b>
        <a href="https://arxiv.org/abs/2605.00924" target="_blank"><em>[arxiv]</em></a>
        <a href="https://github.com/Ethan-Zheng136/StyleShield"><em>[code]</em></a>
        <a href="https://github.com/Ethan-Zheng136/StyleShield"><em>[dataset]</em></a>
    </div>
</div>

<div class="publication-card featured">
    <img src="images/publication/hyper/overview.png" alt="Hyper" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Hyper<sup>2</sup>: Unleashing Hyperbolic Geometry's Full Potential through Dual-Space Consistency</strong><br>
        <i style="font-size: 13px;">
        <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>&dagger;,
        <a href="#" target="_blank"><strong>Haiyang Xu</strong></a>,
        <a href="#" target="_blank"><strong>Tianyu Gao</strong></a>
        </i><br>
        Hyper<sup>2</sup> identifies cross-geometry mismatch as the bottleneck of hyperbolic point cloud completion and resolves it via dual-space consistency, achieving 22.9% CD reduction with only 1.6% FLOPs overhead.<br>
        <b><i style="color:#83a1c7;">BMVC 2026 &nbsp;</i></b>
        <a href="https://ethan-zheng136.github.io/" target="_blank"><em>[arxiv]</em></a>
        <a href="https://ethan-zheng136.github.io/"><em>[code]</em></a>
        <a href="https://ethan-zheng136.github.io/"><em>[dataset]</em></a>
    </div>
</div>

<div class="publication-card featured">
    <img src="images/publication/umpe/pipeline.png" alt="UMPE" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Unified Map Prior Encoder for Mapping and Planning</strong><br>
       <i style="font-size: 13px;">
    <a target="_blank">Zongzheng Zhang</a><sup>*</sup>, 
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a><sup>*</sup>, 
    <a target="_blank">Sizhe Zou</a><sup>*</sup>, 
    <a target="_blank">Zhenxin Zhu</a>,
    <a target="_blank">Guoxuan Chi</a>,
    <a target="_blank">Anqing Jiang</a>,
    <a href="https://sites.google.com/view/fromandto" target="_blank">Hao Zhao</a>&dagger;
    </i><br>
    UMPE addresses the underutilization of heterogeneous map priors in autonomous driving through a unified dual-branch encoder that integrates HD/SD vector maps, satellite imagery, and rasterized SD maps with BEV features. <br>
    <b><i style="color:#83a1c7;">ICRA 2026 (Oral) &nbsp;</i></b>
    <a href="https://arxiv.org/abs/2605.02762"><em>[arXiv]</em></a>
    <a href="https://ethan-zheng136.github.io/"><em>[project page]</em></a>
    <a href="https://github.com/Ethan-Zheng136/UMPE"><em>[code]</em></a>
    </div>
</div>

<div class="publication-card featured">
<div style="display: flex; align-items: center;">
    <img src="images/publication/DriveCTR/DriveCTR.png" alt="RuleCraft" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>DriveCombo: Benchmarking Compositional Traffic Rule Reasoning in Autonomous Driving</strong><br>
       <i style="font-size: 13px;">
    <a href="https://estrellama.github.io" target="_blank">Enhui Ma</a><sup>*</sup>, 
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a><sup>*</sup>, 
    <a target="_blank">Jiahuan Zhang</a><sup>*</sup>,
    <a target="_blank">Tao Tang</a>,
    <a target="_blank">Yuhang Lu</a>,
    <a href="https://www.yukaicheng.cn/" target="_blank">Kaicheng Yu</a>&dagger;
    </i><br>
    DriveCombo is a novel benchmark designed to evaluate and enhance the complex traffic rule reasoning capabilities of multimodal large language models in autonomous driving.
    <br>
    <b><i style="color:#83a1c7;">CVPR 2026 &nbsp;</i></b>
    <a href="https://arxiv.org/abs/2603.01637"><em>[arXiv]</em></a>
    <a href="https://ethan-zheng136.github.io"><em>[project page]</em></a>
    <a href="https://ethan-zheng136.github.io"><em>[code]</em></a>
    </div>
</div>    
</div>

<div class="publication-card">
    <img src="images/publication/OpenlaneV3/craft.png" alt="OpenlaneV3" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Openlane-V3</strong><br>
       <i style="font-size: 13px;">
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>, 
    <a target="_blank">Zongzheng Zhang</a>, 
    <a target="_blank">Jijun Wang</a>,
    <a href="https://sites.google.com/view/fromandto" target="_blank">Hao Zhao</a>&dagger;
    </i><br>
    OpenLane-V3 is an extended version of the OpenLaneV2 benchmark, integrating additional modalities including 3D traffic light and traffic sign annotations with semantic and positional information.  <br>
    <!-- <b><i style="color:#83a1c7;">CVPR 2026 (Plan to Submit) &nbsp;</i></b> -->
    </div>
</div>


<div class="publication-card featured">
 <div style="display: flex; align-items: center;">
    <img src="images/publication/uncertainty/overview.png" alt="Uncertainty" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Delving into Mapping Uncertainty for Mapless Trajectory Prediction</strong><br>
        <i style="font-size: 13px;">
            <a target="_blank">Zongzheng Zhang</a><sup>*</sup>, 
            <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a><sup>*</sup>, 
            <a target="_blank">Xuchong Qiu</a><sup>*</sup>, 
            <a target="_blank">Boran Zhang</a>, 
            <a href="https://www.gilitschenski.org/igor" target="_blank">Igor Gilitschenski</a>,
            <a target="_blank">Xunjiang Gu</a>, 
            <a href="https://hangzhaomit.github.io" target="_blank">Hang Zhao</a>&dagger;, 
            <a href="https://sites.google.com/view/fromandto" target="_blank">Hao Zhao</a>&dagger;
        </i><br>
        Propose lightweight Proprioceptive Scenario Gating module and Covariance-Based Map Uncertainty model, achieving up to 23.6% performance improvement over prior SOTA methods.<br>
        <b><i style="color:#83a1c7;">IROS 2025 (Oral) &nbsp;</i></b>
        <a href="https://www.arxiv.org/abs/2507.18498"><em>[arXiv]</em></a>
        <a href="https://ethan-zheng136.github.io/Dev-Unc"><em>[project page]</em></a>
        <a href="https://github.com/Ethan-Zheng136/Map-Uncertainty-for-Trajectory-Prediction"><em>[code]</em></a>
    </div>
</div>
</div>

<div class="publication-card featured">
 <div style="display: flex; align-items: center;">
    <img src="images/publication/chameleon/overview.png" alt="Chameleon" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction</strong><br>
        <i style="font-size: 13px;">
            <a target="_blank">Zongzheng Zhang</a>, 
            <a target="_blank">Xinrun Li</a>, 
            <a target="_blank">Sizhe Zou</a>, 
            <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>, 
            <a target="_blank">Guoxuan Chi</a>, 
            <a target="_blank">Siqi Li</a>, 
            <a href="https://hangzhaomit.github.io" target="_blank">Hang Zhao</a>&dagger;, 
            <a href="https://sites.google.com/view/fromandto" target="_blank">Hao Zhao</a>&dagger; 
        </i><br>
        Propose neuro-symbolic algorithm combining symbolic reasoning with Chain-of-Thought VLMs, reducing inference time from >200s to 0.1-8s per frame with 5% accuracy improvement.<br>
        <b><i style="color:#83a1c7;">ICRA 2025 (Oral) &nbsp;</i></b>
        <a href="https://arxiv.org/abs/2503.07485"><em>[arXiv]</em></a>
        <!-- <a href="https://ethan-zheng136.github.io/Dev-Unc"><em>[project page]</em></a> -->
        <a href="https://github.com/XR-Lee/neural-symbolic"><em>[code]</em></a>
    </div>
</div>
</div>

<div class="publication-card">
    <img src="images/publication/PointHypE/svdformer.jpg" alt="PointHypE" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Enhanced Point Cloud Reconstruction with PTv3 and Dual Hyper in SVDFormer</strong><br>
       <i style="font-size: 13px;">
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>, 
    <a href="https://estrellama.github.io" target="_blank">Boran Zhang</a>
    <!-- <a href="https://www.yukaicheng.cn/" target="_blank">Haiyang Xu</a>, -->
    </i><br>
    Proposed a HyperChamfer Embedding with a dual-hypernetwork architecture to inject global geometric structure into refinement, and integrated PTv3 backbone for efficient acceleration. <br>
    <!-- <b><i style="color:#83a1c7;">ICRA 2026 (Plan to Submit) &nbsp;</i></b>
      <a href="https://arxiv.org/abs/2410.20097"><em>[arxiv]</em></a> -->
    </div>
</div>

<div class="publication-card">
    <img src="images/publication/brain/bci.png" alt="Brain" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>Brain-Controlled Robotic Arm</strong><br>
       <i style="font-size: 13px;">
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>, 
    <a target="_blank">Jincheng Yang</a>,
    <a href="https://ieeexplore.ieee.org/author/37086347850" target="_blank">Dawei Ye</a>&dagger;
    </i><br>
    Achieved real-time recognition and control of a single hand with five degrees of freedom, with future plans to enable assisting paralyzed individuals in daily tasks such as eating, gripping, and writing. <br>
    </div>
</div>

Honors & Awards
---------------

<div class="awards-list">
    <ul>
        <li><strong>Outstanding Graduate of HUST</strong> (2026)</li>
        <li><strong>Academic Excellence Scholarship</strong> (2025)</li>
        <li><strong>Self-Motivation and Diligence Scholarship</strong> (2024)</li>
        <li><strong>Academic Excellence Scholarship</strong> (2023)</li>
    </ul>
</div>

---

<!-- Footprints 地图依赖：jsvectormap + world data + 联动脚本。放正文末尾统一加载。 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap@1.6.0/dist/jsvectormap.min.css">
<script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.6.0/dist/jsvectormap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.6.0/dist/maps/world.js"></script>
<script src="{{ base_path }}/assets/js/footprints.js"></script>
