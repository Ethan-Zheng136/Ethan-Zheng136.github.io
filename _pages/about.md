---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    /* 主标题样式 */
    .main-heading {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        text-align: center;
        color: #ca6f6f;
        font-size: 1.8rem;
        font-weight: 600;
        margin: 1.5rem 0;
    }
    
    .hi-gif {
        width: 35px;
        height: 35px;
        vertical-align: middle;
        margin: 0 5px;
    }
    
    /* Research Interests */
    .research-interests {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 2rem 0;
    }
    
    .interest-card {
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 25px;
        text-align: center;
    }
    
    .interest-icon {
        font-size: 2.5rem;
        margin-bottom: 15px;
        display: block;
    }
    
    .interest-card h3 {
        color: #333;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
    
    .interest-card p {
        color: #666;
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
    }
    
    /* Experience Cards */
    .experience-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
        margin: 2rem 0;
    }
    
    .experience-card {
        display: flex;
        align-items: center;
        background: #f9f9f9;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        transition: transform 0.3s, box-shadow 0.3s;
        border: 2px solid transparent;
    }
    
    .experience-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        border-color: #ca6f6f;
    }
    
    .experience-logo {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 8px;
        object-fit: contain;
    }
    
    .experience-info strong {
        font-size: 1.1em;
        color: #333;
    }
    
    /* Publication Cards */
    .publication-card {
        display: flex;
        align-items: center;
        padding: 20px;
        border: 2px solid #ddd;
        border-radius: 12px;
        background: #fff;
        margin-bottom: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    
    .publication-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    
    .publication-card.featured {
        border-color: #f5bba7;
        background: linear-gradient(135deg, #fef5f1 0%, #fff 100%);
        box-shadow: 0 4px 12px rgba(242, 166, 120, 0.2);
        position: relative;
    }
    
    .publication-card.featured::before {
        content: "⭐ Featured";
        position: absolute;
        top: -8px;
        right: 20px;
        background: #ca6f6f;
        color: white;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .publication-card.featured:hover {
        box-shadow: 0 8px 20px rgba(242, 166, 120, 0.4);
    }
    
    .publication-card strong {
        font-size: 1.1rem;
        color: #333;
        display: block;
        margin-bottom: 8px;
    }
    
    .authors {
        font-size: 13px;
        color: #666;
        margin-bottom: 8px;
        line-height: 1.4;
    }
    
    .description {
        color: #555;
        margin-bottom: 10px;
        line-height: 1.5;
    }
    
    .conference {
        font-weight: bold;
        color: #83a1c7;
        margin-right: 10px;
    }
    
    .links a {
        margin-right: 10px;
        font-size: 0.9rem;
        color: #ca6f6f;
        padding: 2px 8px;
        border: 1px solid #ca6f6f;
        border-radius: 4px;
        transition: all 0.3s ease;
        text-decoration: none;
    }
    
    .links a:hover {
        background: #ca6f6f;
        color: white;
    }
    
    /* Status Badges */
    .status-badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: bold;
        margin-left: 8px;
    }
    
    .status-accepted {
        background: #d4edda;
        color: #155724;
    }
    
    .status-oral {
        background: #f8d7da;
        color: #721c24;
    }
    
    .status-under-review {
        background: #fff3cd;
        color: #856404;
    }
    
    /* Awards Grid */
    .awards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 2rem 0;
    }
    
    .award-item {
        background: #f9f9f9;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        transition: transform 0.3s ease;
        border: 2px solid transparent;
    }
    
    .award-item:hover {
        transform: translateY(-3px);
        border-color: #ca6f6f;
    }
    
    .award-icon {
        font-size: 2rem;
        margin-bottom: 8px;
    }
    
    /* News样式调整 */
    h2 + ul li {
        margin-bottom: 12px;
        line-height: 1.6;
    }
    
    h2 + ul li strong {
        color: #333;
    }
    
    h2 + ul li em {
        color: #ca6f6f;
        font-style: italic;
    }
    
    /* 整体字体调整 */
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #333;
    }
    
    /* 标题样式 */
    h2 {
        color: #ca6f6f;
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        border-bottom: 2px solid #ca6f6f;
        padding-bottom: 8px;
        margin: 2.5rem 0 1.5rem 0;
    }
    
    h3 {
        color: #333;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
    }
    
    /* 链接样式 */
    a {
        color: #ca6f6f;
        text-decoration: none;
        transition: color 0.2s ease;
    }
    
    a:hover {
        color: #b85f5f;
        text-decoration: underline;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        .main-heading {
            font-size: 1.5rem;
        }
        
        .publication-card {
            flex-direction: column;
            text-align: center;
        }
        
        .publication-card img {
            width: 100%;
            max-width: 300px;
            margin-right: 0 !important;
            margin-bottom: 15px;
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

I'm an undergraduate (2022-2026) at **Huazhong University of Science and Technology**, passionate about **Autonomous Driving** and **Computer Vision**. I work at [AIR@Tsinghua](https://air.tsinghua.edu.cn/en/) with [Prof. Hao Zhao](https://sites.google.com/view/fromandto).

## 🎯 Research Interests

<div class="research-interests">
    <div class="interest-card">
        <span class="interest-icon">🤖</span>
        <h3>Computer Vision & 3D Reconstruction</h3>
        <p>Developing advanced algorithms for 3D scene understanding, point cloud completion, and visual perception systems for autonomous vehicles.</p>
    </div>
    
    <div class="interest-card">
        <span class="interest-icon">🚗</span>
        <h3>Autonomous Driving & Trajectory Prediction</h3>
        <p>Creating robust mapless trajectory prediction systems and addressing uncertainty in online HD map construction for safer autonomous navigation.</p>
    </div>
</div>

## News

- *Our work* **Delving into Mapping Uncertainty for Mapless Trajectory Prediction** *is accepted in* **IROS 2025** 🔥
- *Our work* **Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction** *is accepted in* **ICRA 2025 (Oral Presentation)** 🔥  
- *Our brain-computer interface project* **Brain-Controlled Mechanical Arm** *was selected as* **National Innovation Program (National-level)** 🏆

## 🎓 Experience

<div class="experience-container">
    <div class="experience-card">
        <img src="/images/westlake-logo.png" alt="Westlake University logo" class="experience-logo">
        <div class="experience-info">
            <strong>Westlake University - AutoLab</strong><br>
            Jun 2025 - Present<br>
            Research Assistant with <a href="https://www.yukaicheng.cn/"><em>Prof. Kaicheng Yu</em></a>
        </div>
    </div>

    <div class="experience-card">
        <img src="/images/tsinghua-logo.png" alt="Tsinghua University logo" class="experience-logo">
        <div class="experience-info">
            <strong>Tsinghua University - AIR</strong><br>
            Jun 2024 - Dec 2024<br>
            Research Assistant at <a href="https://air.tsinghua.edu.cn/en/"><em>AI Industry Research Institute</em></a>
        </div>
    </div>

    <div class="experience-card">
        <img src="/images/hust-logo.png" alt="HUST logo" class="experience-logo">
        <div class="experience-info">
            <strong>Huazhong University of Science and Technology</strong><br>
            Sep 2022 - Jul 2026<br>
            B.S. in Integrated Circuit Design, RA with <a href="https://xwcv.github.io/"><em>Prof. Xinggang Wang</em></a>
        </div>
    </div>
</div>

## 📚 Publications

<div class="publication-card featured">
    <div style="display: flex; align-items: center; width: 100%;">
        <img src="/images/publication/uncertainty/teaser1.png" alt="Uncertainty" style="width: 200px; height: 120px; margin-right: 20px;">
        <div class="content">
            <strong>Delving into Mapping Uncertainty for Mapless Trajectory Prediction</strong><br>
            <div class="authors">
                Zongzheng Zhang, Xuchong Qiu, Boran Zhang, <strong>Guantian Zheng</strong>, et al.
            </div>
            <div class="description">
                Investigated HD map uncertainty effects on trajectory prediction, proposing Proprioceptive Scenario Gating and achieving 23.6% performance improvement.
            </div>
            <span class="conference">IROS 2025</span>
            <span class="status-badge status-accepted">✓ Accepted</span><br>
            <div class="links">
                <a href="https://arxiv.org/abs/2507.18498">[Paper]</a>
                <a href="https://github.com/Ethan-Zheng136/Map-Uncertainty-for-Trajectory-Prediction">[Code]</a>
                <a href="https://ethan-zheng136.github.io/Dev-Unc/">[Website]</a>
            </div>
        </div>
    </div>
</div>

<div class="publication-card featured">
    <div style="display: flex; align-items: center; width: 100%;">
        <img src="/images/publication/chameleon/overview.png" alt="Chameleon" style="width: 200px; height: 120px; margin-right: 20px;">
        <div class="content">
            <strong>Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction</strong><br>
            <div class="authors">
                Coauthor1, Coauthor2, <strong>Guantian Zheng</strong>, Senior Author
            </div>
            <div class="description">
                Developed neuro-symbolic algorithm combining symbolic reasoning with Chain-of-Thought VLMs, reducing inference time from >200s to 0.1-8s per frame.
            </div>
            <span class="conference">ICRA 2025</span>
            <span class="status-badge status-oral">🎤 Oral</span><br>
            <div class="links">
                <a href="https://arxiv.org/abs/2503.07485">[Paper]</a>
                <a href="https://github.com/XR-Lee/neural-symbolic">[Code]</a>
            </div>
        </div>
    </div>
</div>

<div class="publication-card">
    <div style="display: flex; align-items: center; width: 100%;">
        <img src="/images/pointhype-placeholder.png" alt="PointHypE" style="width: 200px; height: 120px; margin-right: 20px;">
        <div class="content">
            <strong>PointHypE: Point Cloud Completion via Hyperbolic Embedding Learning</strong><br>
            <div class="authors">
                <strong>Guantian Zheng</strong>, Coauthors
            </div>
            <div class="description">
                Introducing HyperCD embedding in hyperbolic space to replace traditional CD loss, with PTv3 backbone for enhanced sequential features.
            </div>
            <span class="conference">CVPR 2026</span>
            <span class="status-badge status-under-review">📝 Under Review</span><br>
            <div class="links">
                <a href="#">[Coming Soon]</a>
            </div>
        </div>
    </div>
</div>

## 🏆 Honors & Awards

<div class="awards-grid">
    <div class="award-item">
        <div class="award-icon">🏆</div>
        <strong>Academic Excellence Scholarship</strong><br>
        <small>2025, 2023</small>
    </div>
    
    <div class="award-item">
        <div class="award-icon">💪</div>
        <strong>Self-Reliance Scholarship</strong><br>
        <small>2024</small>
    </div>
    
    <div class="award-item">
        <div class="award-icon">🥈</div>
        <strong>National Math Competition</strong><br>
        <small>2nd Prize, 2024</small>
    </div>
</div>

---

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: linear-gradient(135deg, #fef5f1 0%, #f9f9f9 100%); border-radius: 12px;">
    <h3 style="color: #ca6f6f;">🚀 Looking Ahead</h3>
    <p>I'm actively seeking <strong>research opportunities in Autonomous Driving and Computer Vision</strong> for graduate studies. Passionate about pushing the boundaries of AI/ML applications in real-world scenarios.</p>
    
    <div style="margin-top: 1.5rem;">
        <a href="/files/cv.pdf" style="background: #ca6f6f; color: white; padding: 10px 20px; border-radius: 8px; margin: 0 10px; text-decoration: none;">📄 Download CV</a>
        <a href="/publications/" style="background: #83a1c7; color: white; padding: 10px 20px; border-radius: 8px; margin: 0 10px; text-decoration: none;">📚 View Publications</a>
    </div>
</div>