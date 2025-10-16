// hero.js - exports a function that returns the Hero section element
export function Hero() {
    const section = document.createElement('section');
    section.id = 'hero';
    section.className = 'hero section dark-background';
    section.innerHTML = `
    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center gy-5">
            <div class="col-lg-7">
                <div class="hero-card shadow-sm" data-aos="fade-right" data-aos-delay="150">
                    <div class="eyebrow d-inline-flex align-items-center mb-3">
                        <i class="bi bi-stars me-2"></i>
                        <span>Lorem ipsum vivamus dictum</span>
                    </div>
                    <div class="content">
                        <h2 class="display-5 fw-bold mb-3">Build modern interfaces that feel effortless</h2>
                        <p class="lead mb-4">Nibh tristique gravida arcu, posuere luctus imperdiet. Aenean varius sem id, at ullamcorper sodales lectus purus facilisis.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <a href="#about" class="btn btn-primary-ghost">
                                <span>Explore Now</span>
                                <i class="bi bi-arrow-right ms-2"></i>
                            </a>
                            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-video d-inline-flex align-items-center">
                                <span class="play-icon d-inline-flex align-items-center justify-content-center me-2">
                                    <i class="bi bi-play-fill"></i>
                                </span>
                                <span>Watch Overview</span>
                            </a>
                        </div>
                        <div class="mini-stats d-flex flex-wrap gap-4 mt-4" data-aos="zoom-in" data-aos-delay="250">
                            <div class="stat d-flex align-items-center">
                                <i class="bi bi-lightning-charge me-2"></i>
                                <span>Fusce aptent interdum</span>
                            </div>
                        <div class="stat d-flex align-items-center">
                            <i class="bi bi-shield-check me-2"></i>
                            <span>Quam nunc tempor</span>
                        </div>
                        <div class="stat d-flex align-items-center">
                            <i class="bi bi-people me-2"></i>
                            <span>Ultricies porta lectus</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="media-stack" data-aos="zoom-in" data-aos-delay="200">
                    <figure class="media primary shadow-sm">
                        <img src="assets/img/illustration/illustration-8.webp" class="img-fluid" alt="Hero visual">
                    </figure>
                    <figure class="media secondary shadow-sm">
                        <img src="assets/img/illustration/illustration-15.webp" class="img-fluid" alt="Supporting visual">
                    </figure>
                    <div class="floating-badge d-flex align-items-center shadow-sm" data-aos="fade-down" data-aos-delay="300">
                        <i class="bi bi-award me-2"></i>
                        <span>Curabitur congue pretium</span>
                    </div>
                </div>
            </div>
        </div>

    </div>`;
    return section;
}
