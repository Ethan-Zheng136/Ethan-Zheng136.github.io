<!-- 替换你的CSS样式部分 -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    /* 1. 调整标题大小，使用更学术的字体 */
    .main-heading {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        text-align: center;
        color: #ca6f6f;
        font-size: 1.8rem;  /* 从2.2rem改小到1.8rem */
        font-weight: 600;
        margin: 1.5rem 0;   /* 减少上下边距 */
    }
    
    .hi-gif {
        width: 35px;        /* 从40px改小到35px */
        height: 35px;
        vertical-align: middle;
        margin: 0 5px;
    }
    
    /* 2. Research Interests - 移除悬浮效果，保持简洁 */
    .research-interests {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 2rem 0;
    }
    
    .interest-card {
        background: white;
        border: 1px solid #e0e0e0;     /* 简单边框 */
        border-radius: 8px;            /* 较小的圆角 */
        padding: 25px;
        text-align: center;
        /* 移除悬浮效果 - 不要transition和hover */
    }
    
    .interest-icon {
        font-size: 2.5rem;             /* 从3rem改小 */
        margin-bottom: 15px;
        display: block;
    }
    
    .interest-card h3 {
        color: #333;                   /* 改为深灰色，更学术 */
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
    
    /* 3. 整体字体调整为学术风格 */
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #333;
    }
    
    /* 4. 标题样式调整 */
    h2 {
        color: #ca6f6f;
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;             /* 适中的大小 */
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
    
    /* 5. 链接样式保持简洁 */
    a {
        color: #ca6f6f;
        text-decoration: none;
        transition: color 0.2s ease;
    }
    
    a:hover {
        color: #b85f5f;
        text-decoration: underline;
    }
</style>

<h1 class="main-heading">Hi there <img src="/images/Hi.gif" class="hi-gif" alt="Hi"> Welcome to my Homepage!</h1>

I'm an undergraduate(2022-2026) at **Huazhong University of Science and Technology**, Passionate about **Autonomous Driving** and **Computer Vision**. I work at [AIRlab@Tsinghua](https://air.tsinghua.edu.cn/en/) with [Prof. Hao Zhao](https://sites.google.com/view/fromandto).

## 🎯 Research Interests

## Research Interests

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

## 📰 News

<div class="news-section">
    <div class="news-item">
        <div class="news-date">[Jan 2025]</div>
        <div>🎉 Paper <strong>"Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction"</strong> accepted to <strong>ICRA 2025 (Oral Presentation)</strong></div>
    </div>
    
    <div class="news-item">
        <div class="news-date">[Jul 2025]</div>
        <div>🎉 Paper <strong>"Delving into Mapping Uncertainty for Mapless Trajectory Prediction"</strong> accepted to <strong>IROS 2025</strong> - Featured in CV君 media coverage!</div>
    </div>
    
    <div class="news-item">
        <div class="news-date">[Jun 2025]</div>
        <div>🔬 Started new research position at <strong>Westlake University AutoLab</strong> under Prof. Kaicheng Yu</div>
    </div>
</div>

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