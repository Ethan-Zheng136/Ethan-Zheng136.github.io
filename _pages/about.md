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
        transform: translateY(-5px);
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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    .experience-card {
        box-sizing: border-box;
    }
    .publication-card {
        display: flex;
        align-items: center;
        padding: 3px;
        border: 1.5px solid #ddd;
        border-radius: 8px;
        background: #fff;
        box-sizing: border-box;

        /* 关键：确保这个下外边距存在，它负责卡片之间的垂直距离 */
        margin-bottom: 20px; 
        
        /* 将过渡效果放在基础卡片上，这样所有卡片（包括非精选的）都能有平滑效果 */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* 当鼠标悬浮在任意 publication-card 上时的效果 */
    .publication-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    /* 精选卡片（featured）的特殊样式 */
    .publication-card.featured {
        border-color: #f5bba7;       /* 更浅的哈密瓜色边框 */
        background: #fef5f1;         /* 非常浅的哈密瓜色背景 */
        box-shadow: 0 4px 8px rgba(242, 166, 120, 0.2); /* 更柔和的初始阴影 */
        z-index: 10;
    }

    /* 鼠标悬浮在精选卡片上时的效果 */
    .publication-card.featured:hover {
        transform: translateY(-5px); /* 向上移动效果保持不变 */
        /* 阴影使用更明显的哈密瓜色调 */
        box-shadow: 0 8px 16px rgba(242, 166, 120, 0.4); 
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

I am an undergraduate (2022-2026) at **Huazhong University of Science and Technology**, *passionate about Autonomous Driving and Computer Vision*. 
I work at [AIR@Tsinghua](https://air.tsinghua.edu.cn/en/) with [Prof. Hao Zhao](https://sites.google.com/view/fromandto) and [Autolab@WLU](https://github.com/westlake-autolab) with [Prof. Kaicheng Yu](https://www.yukaicheng.cn/).
Currently I conduct the WM research at [Neolix](https://neolix.net/).


<!-- <h2 class="news">News</h2> -->

News
---------------

- *Unleash the potential of uncertainty: [Delving into Uncertainty](https://github.com/Ethan-Zheng136/Map-Uncertainty-for-Trajectory-Prediction) is accepted in IROS 2025🔥*
- *Our work on lane topology: [Chameleon](https://github.com/XR-Lee/neural-symbolic) is accepted in ICRA 2025 (Oral Presentation)🔥*
- *Our brain-computer interface project: [Brain-Controlled Robotic Arm]() was selected as National Innovation Program (National-level)🏆*


Experience
---------------

<div class="experience-container">

    <div class="experience-card">
        <img src="/images/neolix.png" alt="Neolix" class="experience-logo">
        <div class="experience-info">
            <strong>Neolix</strong>
            <div class="date">Feb 2026 – Present</div>
            <div class="role">Research Intern at <a href="https://neolix.net/"><em>Neolix</em></a></div>
        </div>
    </div>

    <div class="experience-card">
        <img src="/images/westlake-logo.png" alt="Westlake University" class="experience-logo">
        <div class="experience-info">
            <strong>Westlake University</strong>
            <div class="date">Jun 2025 – Jan 2026</div>
            <div class="role">Research Assistant at <a href="https://github.com/westlake-autolab"><em>AutoLab</em></a></div>
        </div>
    </div>

    <div class="experience-card">
        <img src="/images/tsinghua-logo.png" alt="Tsinghua University" class="experience-logo">
        <div class="experience-info">
            <strong>Tsinghua University</strong>
            <div class="date">Jun 2024 – Nov 2025</div>
            <div class="role">Research Assistant at <a href="https://air.tsinghua.edu.cn/en/"><em>AIR</em></a></div>
        </div>
    </div>
    
    <div class="experience-card">
        <img src="/images/hust-logo.png" alt="HUST" class="experience-logo">
        <div class="experience-info">
            <strong>Huazhong Univ of Sci and Tech</strong>
            <div class="date">Sep 2022 – Jul 2026</div>
            <div class="role">Research Assistant at <a href="https://xwcv.github.io/"><em>XWCV</em></a></div>
        </div>
    </div>
</div>

Selected Projects
---------------

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
    <b><i style="color:#83a1c7;">ICRA 2026 &nbsp;</i></b>
    <a href="https://ethan-zheng136.github.io/"><em>[arXiv]</em></a>
    <a href="https://ethan-zheng136.github.io/"><em>[project page]</em></a>
    <a href="https://github.com/Ethan-Zheng136/UMPE"><em>[code]</em></a>
    </div>
</div>

<div class="publication-card featured">
<div style="display: flex; align-items: center;">
    <img src="images/publication/DriveCTR/DriveCTR.png" alt="RuleCraft" width="200" height="100" style="margin-right: 20px;">
    <div>
        <strong>TrafficGenBench: A Generative Benchmark for Probing the Reasoning Limits of AI Agents in Complex Traffic Scenarios</strong><br>
       <i style="font-size: 13px;">
    <a href="https://estrellama.github.io" target="_blank">Enhui Ma</a>, 
    <a target="_blank">Jiahuan Zhang</a>,
    <a target="_blank">Tao Tang</a>,
    <a target="_blank">Yuhang Lu</a>,
    <a href="https://ethan-zheng136.github.io" target="_blank"><strong>Guantian Zheng</strong></a>, 
    <a href="https://www.yukaicheng.cn/" target="_blank">Kaicheng Yu</a>&dagger;
    </i><br>
    <br>
    <b><i style="color:#83a1c7;">CVPR 2026 &nbsp;</i></b>
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
        <b><i style="color:#83a1c7;">IROS 2025 (Oral Presentation) &nbsp;</i></b>
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
        <b><i style="color:#83a1c7;">ICRA 2025 (Oral Presentation) &nbsp;</i></b>
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
    <a href="https://estrellama.github.io" target="_blank">Boran Zhang</a>;
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
        <li><strong>Academic Excellence Scholarship</strong> (2025)</li>
        <li><strong>Self-Motivation and Diligence Scholarship</strong> (2024)</li>
        <li><strong>Academic Excellence Scholarship</strong> (2023)</li>
        <li><strong>National Math Competition - 2nd Prize</strong> (2022)</li>
    </ul>
</div>

---

*I'm actively seeking research opportunities in Autonomous Driving and Computer Vision for graduate studies. Feel free to reach out if you'd like to collaborate.*