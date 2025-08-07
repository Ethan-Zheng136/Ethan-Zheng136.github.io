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

<h1 class="main-heading">Hi there <img src="/images/Hi.gif" class="hi-gif" alt="Hi"> Welcome to my Homepage!</h1>

I am an undergraduate (2022-2026) at **Huazhong University of Science and Technology**, *focusing on Autonomous Driving and Computer Vision*. I work at [AIR@Tsinghua](https://air.tsinghua.edu.cn/en/) with [Prof. Hao Zhao](https://sites.google.com/view/fromandto) and [Prof. Kaicheng Yu](https://www.yukaicheng.cn/).


<h2 class="news">News</h2>

<div class="news-list">
    <ul>
        <li><em>Unleash the potential of uncertainty:</em> <strong>Delving into Mapping Uncertainty for Mapless Trajectory Prediction</strong> <em>is accepted in</em> <strong>IROS 2025</strong> 🔥</li>
        <li><em>Our work on lane topology:</em> <strong>Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction</strong> <em>is accepted in</em> <strong>ICRA 2025 (Oral Presentation)</strong> 🔥</li>
        <li><em>Our brain-computer interface project:</em> <strong>Brain-Controlled Mechanical Arm</strong> <em>was selected as</em> <strong>National Innovation Program (National-level)</strong> 🏆</li>
    </ul>
</div>

## Experience

<div class="experience-container">
    <div class="experience-card">
        <img src="/images/westlake-logo.png" alt="Westlake University" class="experience-logo">
        <div class="experience-info">
            <strong>Westlake University</strong>
            <div class="date">Jun 2025 – Present</div>
            <div class="role">Research Assistant at <a href="https://github.com/westlake-autolab"><em>AutoLab</em></a></div>
        </div>
    </div>

    <div class="experience-card">
        <img src="/images/tsinghua-logo.png" alt="Tsinghua University" class="experience-logo">
        <div class="experience-info">
            <strong>Tsinghua University</strong>
            <div class="date">Jun 2024 – Present</div>
            <div class="role">Research Assistant at <a href="https://air.tsinghua.edu.cn/en/"><em>AIR</em></a></div>
        </div>
    </div>
    
    <div class="experience-card">
        <img src="/images/hust-logo.png" alt="HUST" class="experience-logo">
        <div class="experience-info">
            <strong>Huazhong University of Science and Technology</strong>
            <div class="date">Sep 2022 – Jul 2026</div>
            <div class="role">Research Assistant at <a href="https://xwcv.github.io/"><em>XWCV Lab</em></a></div>
        </div>
    </div>
</div>

## Publications

<div class="publication-card">
    <img src="/images/publication/uncertainty/teaser1.png" alt="Mapping Uncertainty">
    <div class="publication-content">
        <div class="publication-title">Delving into Mapping Uncertainty for Mapless Trajectory Prediction</div>
        <div class="publication-description">Propose lightweight Proprioceptive Scenario Gating module and Covariance-Based Map Uncertainty model, achieving up to 23.6% performance improvement over prior SOTA methods.</div>
        <div class="publication-venue">IROS 2025</div>
        <div class="publication-links">
            <a href="https://arxiv.org/abs/2507.18498">[arxiv]</a>
            <a href="https://ethan-zheng136.github.io/Dev-Unc/">[website]</a>
            <a href="https://github.com/Ethan-Zheng136/Map-Uncertainty-for-Trajectory-Prediction">[code]</a>
        </div>
    </div>
</div>

<div class="publication-card">
    <img src="/images/publication/chameleon/overview.png" alt="Chameleon">
    <div class="publication-content">
        <div class="publication-title">Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction</div>
        <div class="publication-authors">Coauthor1*, Coauthor2*, <strong>Guantian Zheng</strong>, Senior Author†</div>
        <div class="publication-description">Propose neuro-symbolic algorithm combining symbolic reasoning with Chain-of-Thought VLMs, reducing inference time from >200s to 0.1-8s per frame with 5% accuracy improvement.</div>
        <div class="publication-venue">ICRA 2025 (Oral Presentation)</div>
        <div class="publication-links">
            <a href="https://arxiv.org/abs/2503.07485">[arxiv]</a>
            <a href="https://github.com/XR-Lee/neural-symbolic">[code]</a>
        </div>
    </div>
</div>

## Honors & Awards

<div class="awards-list">
    <ul>
        <li><strong>Academic Excellence Scholarship</strong> (2025, 2023)</li>
        <li><strong>Self-Reliance Scholarship</strong> (2024)</li>
        <li><strong>National Math Competition - 2nd Prize</strong> (2024)</li>
    </ul>
</div>

---

*I'm actively seeking research opportunities in Autonomous Driving and Computer Vision for graduate studies. Feel free to reach out if you'd like to collaborate.*