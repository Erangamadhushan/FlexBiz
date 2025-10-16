// hero.js - exports a function that returns the Hero section element
export function Features() {
    const section = document.createElement('section');
    section.id = 'features';
    section.className = 'features section light-background';
    section.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-5 align-items-center">

        <div class="col-lg-5">
            <article class="intro-panel" data-aos="fade-right" data-aos-delay="200">
            <figure class="preview-visual mb-4">
                <img src="assets/img/features/features-3.webp" alt="App preview" class="img-fluid rounded-4 shadow-sm">
            </figure>
            <div class="intro-content">
                <h3 class="intro-title">Designed for Productivity</h3>
                <p class="intro-text">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                <ul class="intro-highlights list-unstyled mt-3">
                <li><i class="bi bi-check-circle-fill"></i> Ceteros detraxit mediocritatem eu, eam no saepe volutpat</li>
                <li><i class="bi bi-check-circle-fill"></i> Invenire instructior voluptatum cu nostrum fabulas</li>
                <li><i class="bi bi-check-circle-fill"></i> Tale delicata ridens no, mei rebum consequat honestatis</li>
                </ul>
                <div class="mt-4">
                <a href="#" class="btn cta-btn">
                    <i class="bi bi-box-arrow-in-right me-2"></i>Get Started
                </a>
                <a href="#" class="btn link-btn ms-2">
                    Learn More <i class="bi bi-arrow-right ms-1"></i>
                </a>
                </div>
            </div>
            </article>
        </div>

        <div class="col-lg-7">
            <div class="feature-grid">
            <div class="feature-item" data-aos="zoom-in" data-aos-delay="200">
                <div class="f-icon badge-blue">
                <i class="bi bi-cpu-fill"></i>
                </div>
                <div class="f-body">
                <h4 class="f-title">Smart Automation</h4>
                <p class="f-text">Inani tibique pertinacia id voluptatum eloquentiam conceptam mei in, aliquid ea accusata.</p>
                <div class="f-meta">
                    <span><i class="bi bi-speedometer2 me-1"></i>Up to 3x faster</span>
                </div>
                </div>
            </div><!-- End Feature Item -->

            <div class="feature-item" data-aos="zoom-in" data-aos-delay="250">
                <div class="f-icon badge-green">
                <i class="bi bi-lock-fill"></i>
                </div>
                <div class="f-body">
                <h4 class="f-title">End-to-End Security</h4>
                <p class="f-text">Pri at fabellas inimicus, id lorem albucius cum vis quaestio fabellas praesent.</p>
                <div class="f-meta">
                    <span><i class="bi bi-shield-lock-fill me-1"></i>AES-256</span>
                </div>
                </div>
            </div><!-- End Feature Item -->

            <div class="feature-item" data-aos="zoom-in" data-aos-delay="300">
                <div class="f-icon badge-purple">
                <i class="bi bi-diagram-3-fill"></i>
                </div>
                <div class="f-body">
                <h4 class="f-title">Seamless Integrations</h4>
                <p class="f-text">Eros molestie id, te quo debet docendi. Eu ius libris noluisse instructior dicant.</p>
                <div class="f-meta">
                    <span><i class="bi bi-plug-fill me-1"></i>50+ apps</span>
                </div>
                </div>
            </div><!-- End Feature Item -->

            <div class="feature-item" data-aos="zoom-in" data-aos-delay="350">
                <div class="f-icon badge-orange">
                <i class="bi bi-bar-chart-fill"></i>
                </div>
                <div class="f-body">
                <h4 class="f-title">Actionable Insights</h4>
                <p class="f-text">Ut porro facilisi splendide. Vix at maiorum reprimique, usu ex amet delicata.</p>
                <div class="f-meta">
                    <span><i class="bi bi-graph-up-arrow me-1"></i>Realtime</span>
                </div>
                </div>
            </div><!-- End Feature Item -->

            <div class="feature-item" data-aos="zoom-in" data-aos-delay="400">
                <div class="f-icon badge-cyan">
                <i class="bi bi-cloud-arrow-down-fill"></i>
                </div>
                <div class="f-body">
                <h4 class="f-title">Reliable Sync</h4>
                <p class="f-text">Ea minim definiebas cum, an pri scripta salutandi, usu eu animal eruditi suavitate.</p>
                <div class="f-meta">
                    <span><i class="bi bi-cloud-check me-1"></i>99.9% uptime</span>
                </div>
                </div>
            </div><!-- End Feature Item -->

            <div class="feature-item" data-aos="zoom-in" data-aos-delay="450">
                <div class="f-icon badge-pink">
                <i class="bi bi-people-fill"></i>
                </div>
                <div class="f-body">
                <h4 class="f-title">Collaboration Hub</h4>
                <p class="f-text">Mel cu idque volumus, qui cu aliquid dignissim. Te ius feugiat admodum.</p>
                <div class="f-meta">
                    <span><i class="bi bi-chat-dots-fill me-1"></i>Team-ready</span>
                </div>
                </div>
            </div><!-- End Feature Item -->
            </div>

            <div class="assurance-banner" data-aos="fade-up" data-aos-delay="480">
            <div class="assurance-icon">
                <i class="bi bi-award-fill"></i>
            </div>
            <div class="assurance-content">
                <h5>Trusted by Innovative Teams</h5>
                <p>Has at option epicuri, nam inani luptatum definitionem ad. Ea sit legere labores, at nihil neglegentur mel.</p>
            </div>
            <a href="#" class="btn banner-btn">
                <i class="bi bi-arrow-right-circle me-1"></i> Explore
            </a>
            </div><!-- End Assurance Banner -->

        </div>

        </div>

    </div>`;
    return section;
}
