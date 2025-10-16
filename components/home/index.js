// entry point for home page components
import '../common/header.js';
import '../common/footer.js';

import { Hero } from './hero.js';
import { FeaturedServices } from './featuredServices.js';
import { About } from './about.js';
import { Clients } from './clients.js';
import { Stats } from './stats.js'; 
import { Skills } from './skills.js'; 
import { Services } from './services.js';
import { Features } from './features.js';
import { Portfolio } from './portfolio.js';
import { Testimonials } from './testimonials.js';
import { CallToAction } from './call-to-action.js';
import { Team } from './team.js';
import { Pricing } from './pricing.js';
import { Faq } from './faq.js';
import { Contact } from './contact.js';

function mount() {
    const main = document.querySelector('main');
    if (!main) {
        console.warn('No <main> element found to mount components');
        return;
    }

    // clear existing content
    main.innerHTML = '';

    // Append components in order
    main.appendChild(Hero());
    main.appendChild(FeaturedServices());
    main.appendChild(About());
    main.appendChild(Clients());
    main.appendChild(Stats());
    main.appendChild(Skills());
    main.appendChild(Services());
    main.appendChild(Features());
    main.appendChild(Portfolio());
    main.appendChild(Testimonials());
    main.appendChild(CallToAction());
    main.appendChild(Team());
    main.appendChild(Pricing());
    main.appendChild(Faq());
    main.appendChild(Contact());

    // re-run AOS and other vendor init if present
    if (window.AOS && typeof window.AOS.refresh === 'function') {
        window.AOS.refresh();
    }
}

// mount when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
} else {
    mount();
}
