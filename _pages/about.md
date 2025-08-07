---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    /* 主标题 - 完全模仿参考网站 */
    .main-heading {
        font-family: 'Permanent Marker', cursive;
        text-align: left;
        color: #ca6f6f;
        font-size: 1.8rem;
        font-weight: normal;
        margin: 1rem 0 2rem 0;
        line-height: 1.3;
    }
    
    .hi-gif {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin: 0 3px;
    }
    
    /* 全局字体 - 模仿参考网站 */
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 15px;
        line-height: 1.6;
        color: #333;
    }
    
    /* 段落样式 */
    p {
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1rem;
        color: #333;
    }
    
    /* 链接样式 - 完全模仿参考网站 */
    a {
        color: #ca6f6f;
        text-decoration: none;
        font-weight: normal;
    }
    
    a:hover {
        color: #b85f5f;
        text-decoration: underline;
    }
    
    /* 标题样式 - 模仿参考网站 */
    h2 {
        color: #ca6f6f;
        font-family: 'Inter', sans-serif;
        font-size: 1.4rem;
        font-weight: 600;
        margin: 2rem 0 1rem 0;
        border-bottom: none;
        padding-bottom: 0;
        display: flex;
        align-items: center;
    }
    
    h2::before {
        content: "🎯";
        margin-right: 8px;
        font-size: 1.2rem;
    }
    
    h2.news::before {
        content: "";
    }
    
    /* Research Interests - 完全模仿参考网站的卡片风格 */
    .research-interests {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        margin: 1.5rem 0 2rem 0;
    }
    
    .interest-card {
        background: white;
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 30px 25px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        transition: none; /* 移除悬浮效果，模仿参考网站 */
    }
    
    .interest-icon {
        font-size: 3rem;
        margin-bottom: 20px;
        display: block;
    }
    
    .interest-card h3 {
        color: #ca6f6f;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 15px;
        line-height: 1.3;
    }
    
    .interest-card p {
        color: #666;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
        font-style: italic;
    }
    
    /* News样式 - 完全模仿参考网站 */
    .news-list {
        margin: 1.5rem 0;
    }
    
    .news-list ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .news-list li {
        margin-bottom: 12px;
        font-size: 15px;
        line-height: 1.6;
        padding-left: 0;
    }
    
    .news-list li::before {
        content: "• ";
        color: #ca6f6f;
        font-weight: bold;
        margin-right: 5px;
    }
    
    .news-list em {
        color: #666;
        font-style: italic;
        font-weight: normal;
    }
    
    .news-list strong {
        color: #333;
        font-weight: 600;
    }
    
    .fire-emoji {
        margin-left: 5px;
    }
    
    /* Experience卡片 - 模仿参考网站 */
    .experience-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
        margin: 1.5rem 0;
    }
    
    .experience-card {
        display: flex;
        align-items: center;
        background: white;
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        transition: none; /* 移除悬浮效果 */
    }
    
    .experience-logo {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 8px;
        object-fit: contain;
        flex-shrink: 0;
    }
    
    .experience-info {
        flex: 1;
    }
    
    .experience-info strong {
        font-size: 16px;
        color: #333;
        font-weight: 600;
        display: block;
        margin-bottom: 5px;
    }
    
    .experience-info .date {
        color: #666;
        font-size: 14px;
        margin-bottom: 3px;
    }
    
    .experience-info .role {
        color: #666;
        font-size: 14px;
        line-height: 1.4;
    }
    
    /* Publication卡片 - 完全模仿参考网站 */
    .publication-card {
        display: flex;
        align-items: flex-start;
        padding: 20px;
        border: 2px solid #f5bba7;
        border-radius: 12px;
        background: #fef5f1;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(242, 166, 120, 0.1);
        position: relative;
    }
    
    .publication-card img {
        width: 150px;
        height: 100px;
        margin-right: 20px;
        border-radius: 8px;
        object-fit: cover;
        flex-shrink: 0;
    }
    
    .publication-content {
        flex: 1;
        min-width: 0;
    }
    
    .publication-title {
        font-size: 16px;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
        line-height: 1.3;
    }
    
    .publication-authors {
        font-size: 13px;
        color: #ca6f6f;
        margin-bottom: 8px;
        line-height: 1.4;
        font-style: italic;
    }
    
    .publication-description {
        font-size: 14px;
        color: #555;
        margin-bottom: 10px;
        line-height: 1.5;
        font-style: italic;
    }
    
    .publication-venue {
        font-size: 14px;
        color: #83a1c7;
        font-weight: 600;
        margin-bottom: 8px;
    }
    
    .publication-links {
        font-size: 13px;
    }
    
    .publication-links a {
        color: #ca6f6f;
        margin-right: 8px;
        text-decoration: none;
        border: 1px solid #ca6f6f;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 12px;
    }
    
    .publication-links a:hover {
        background: #ca6f6f;
        color: white;
    }
    
    /* Awards - 简洁列表样式 */
    .awards-list ul {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
    }
    
    .awards-list li {
        margin-bottom: 8px;
        font-size: 15px;
        padding-left: 0;
    }
    
    .awards-list li::before {
        content: "• ";
        color: #ca6f6f;
        font-weight: bold;
        margin-right: 5px;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        .main-heading {
            font-size: 1.5rem;
            text-align: center;
        }
        
        .research-interests {
            grid-template-columns: 1fr;
        }
        
        .experience-container {
            grid-template-columns: 1fr;
        }
        
        .publication-card {
            flex-direction: column;
        }
        
        .publication-card img {
            width: 100%;
            max-width: 250px;
            margin-right: 0;
            margin-bottom: 15px;
            align-self: center;
        }
        
        .experience-card {
            flex-direction: column;
            text-align: center;
        }
        
        .experience-logo {
            margin-right: 0;
            margin-bottom: 15px;
        }
    }
</style>

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