const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// Shared components
const head = (title, description) => `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Tax Filings Canada</title>
  <meta name="description" content="${description}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
`;

const topBar = () => `
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <a href="tel:+14166190068"><i class="fas fa-phone-alt"></i> +1 (416) 619-0068</a>
        <a href="mailto:contact@taxfilings.ca"><i class="fas fa-envelope"></i> contact@taxfilings.ca</a>
      </div>
      <div class="top-bar-right">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
      </div>
    </div>
  </div>
`;

const header = (activePage = '') => {
  const isServicesActive = activePage.startsWith('services') ? 'active' : '';
  const isAboutActive = activePage === 'about' || activePage === 'team' || activePage === 'testimonials' || activePage === 'resources' ? 'active' : '';
  const isIndustriesActive = activePage.startsWith('industries') ? 'active' : '';
  const isLocationsActive = activePage.startsWith('locations') ? 'active' : '';
  const isPricingActive = activePage.startsWith('pricing') ? 'active' : '';
  const isBlogActive = activePage.startsWith('blog') ? 'active' : '';
  const isContactActive = activePage === 'contact' ? 'active' : '';

  return `
  <header class="header" id="header">
    <div class="container">
      <a href="/" class="logo">
        <div class="logo-icon"><i class="fas fa-calculator"></i></div>
        <div>
          TAX<span>FILINGS</span>
          <small>Canada</small>
        </div>
      </a>

      <nav>
        <ul class="main-nav" id="mainNav">
          <li><a href="/" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
          <li>
            <a href="/about.html" class="${isAboutActive}">About <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="/about.html">About Tax Filings Canada</a></li>
              <li><a href="/team.html">Our Tax Experts</a></li>
              <li><a href="/pricing.html">Pricing Plans</a></li>
              <li><a href="/testimonials.html">Testimonials</a></li>
              <li><a href="/resources.html">Free E-Books</a></li>
            </ul>
          </li>
          <li>
            <a href="/services.html" class="${isServicesActive}">Services <i class="fas fa-chevron-down"></i></a>
            <div class="mega-menu">
              <div class="mega-menu-col">
                <h4>Tax Filings</h4>
                <a href="/services/tax-planning.html">Tax Planning</a>
                <a href="/services/corporate-tax.html">Corporate Tax</a>
                <a href="/services/hst-returns.html">HST Returns</a>
                <a href="/services/gst-returns.html">GST Returns</a>
              </div>
              <div class="mega-menu-col">
                <h4>Accounting</h4>
                <a href="/services/accounting.html">Top Accounting</a>
                <a href="/services/small-business-accounting.html">Small Businesses</a>
                <a href="/services/financial-accounting.html">Financial</a>
                <a href="/services/virtual-accounting.html">Virtual</a>
                <a href="/services/management-accounting.html">Management</a>
              </div>
              <div class="mega-menu-col">
                <h4>Bookkeeping & Payroll</h4>
                <a href="/services/bookkeeping.html">Top Bookkeeping</a>
                <a href="/services/virtual-bookkeeping.html">Virtual Bookkeeping</a>
                <a href="/services/payroll.html">Payroll Services</a>
                <a href="/services/accounting-advisory.html">Advisory</a>
                <a href="/services/virtual-cfo.html">Virtual CFO</a>
              </div>
            </div>
          </li>
          <li>
            <a href="/industries/index.html" class="${isIndustriesActive}">Industries <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="/industries/healthcare.html">Healthcare</a></li>
              <li><a href="/industries/real-estate.html">Real Estate</a></li>
              <li><a href="/industries/construction.html">Construction</a></li>
              <li><a href="/industries/ecommerce.html">E-Commerce</a></li>
              <li><a href="/industries/restaurants.html">Restaurants</a></li>
              <li><a href="/industries/professional-services.html">Professional Services</a></li>
              <li><a href="/industries/technology.html">Technology</a></li>
              <li><a href="/industries/manufacturing.html">Manufacturing</a></li>
              <li><a href="/industries/transportation.html">Transportation</a></li>
              <li><a href="/industries/non-profit.html">Non-Profit</a></li>
              <li><a href="/industries/index.html" style="font-weight: 700; border-top: 1px solid var(--border-gray);">View All Industries</a></li>
            </ul>
          </li>
          <li>
            <a href="/tax-accountant-firm/index.html" class="${isLocationsActive}">Locations <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="/locations/toronto.html">Toronto</a></li>
              <li><a href="/locations/vancouver.html">Vancouver</a></li>
              <li><a href="/locations/brampton.html">Brampton</a></li>
              <li><a href="/locations/vaughan.html">Vaughan</a></li>
              <li><a href="/locations/mississauga.html">Mississauga</a></li>
              <li><a href="/locations/calgary.html">Calgary</a></li>
              <li><a href="/locations/edmonton.html">Edmonton</a></li>
              <li><a href="/locations/ottawa.html">Ottawa</a></li>
              <li><a href="/tax-accountant-firm/index.html" style="font-weight: 700; border-top: 1px solid var(--border-gray);">View All Locations</a></li>
            </ul>
          </li>
          <li>
            <a href="/pricing.html" class="${isPricingActive}">Pricing <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="/pricing/individual-tax.html">Individual Tax</a></li>
              <li><a href="/pricing/corporate-tax.html">Corporation Tax</a></li>
              <li><a href="/pricing/accounting-bookkeeping.html">Accounting & Bookkeeping</a></li>
              <li><a href="/pricing/payroll.html">Payroll Processing</a></li>
              <li><a href="/pricing/gst-hst-pst.html">GST/HST/PST</a></li>
              <li><a href="/pricing/non-profit-tax.html">Non-Profit Tax</a></li>
              <li><a href="/pricing/notice-to-reader.html">Notice to Reader</a></li>
              <li><a href="/pricing/trust-estate-tax.html">Trust & Estate Tax</a></li>
              <li><a href="/pricing/partnership-tax.html">Partnership Tax</a></li>
            </ul>
          </li>
          <li><a href="/blog.html" class="${isBlogActive}">Blog</a></li>
          <li><a href="/contact.html" class="${isContactActive}">Contact</a></li>
        </ul>
      </nav>

      <div class="header-cta">
        <a href="tel:+14166190068" class="header-phone">
          <i class="fas fa-phone-alt"></i>
          <span>+1 4166 190068</span>
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  `;
};

const footer = () => `
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <a href="/" class="logo" style="margin-bottom:15px;">
            <div class="logo-icon"><i class="fas fa-calculator"></i></div>
            <div>
              TAX<span>FILINGS</span>
              <small>Canada</small>
            </div>
          </a>
          <p>Tax Filings Canada is a leading accounting and tax firm empowering businesses and individuals with accurate, reliable, and strategic financial solutions across Canada.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/pricing.html">Pricing</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="/services/corporate-tax.html">Tax Filing</a></li>
            <li><a href="/services/accounting.html">Accounting</a></li>
            <li><a href="/services/bookkeeping.html">Bookkeeping</a></li>
            <li><a href="/services/payroll.html">Payroll</a></li>
            <li><a href="/services/virtual-cfo.html">Advisory</a></li>
            <li><a href="/industries/index.html">Industries</a></li>
            <li><a href="/tax-accountant-firm/index.html">Locations</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul class="footer-contact">
            <li><i class="fas fa-map-marker-alt"></i> 381 Front St W, Toronto, ON M5V 3R8</li>
            <li><i class="fas fa-phone-alt"></i> <a href="tel:+14166190068">+1 (416) 619-0068</a></li>
            <li><i class="fas fa-envelope"></i> <a href="mailto:contact@taxfilings.ca">contact@taxfilings.ca</a></li>
            <li><i class="fas fa-clock"></i> Mon-Fri: 9:00 AM - 6:00 PM EST</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 Tax Filings Canada. All Rights Reserved.</p>
        <div class="footer-bottom-links">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/terms.html">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <div class="whatsapp-widget">
    <a href="https://wa.me/14166190068" target="_blank" class="whatsapp-btn" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>

  <button class="back-to-top" aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
  </button>

  <script type="module" src="/js/main.js"></script>
`;

const pageBanner = (title, breadcrumbs) => `
  <section class="page-banner">
    <div class="container">
      <h1>${title}</h1>
      <div class="breadcrumb">
        <a href="/">Home</a>
        ${breadcrumbs.map(b => `<span class="separator">&gt;</span>${b.link ? `<a href="${b.link}">${b.text}</a>` : `<span>${b.text}</span>`}`).join('')}
      </div>
    </div>
  </section>
`;

// Helper to write file ensuring directory exists
function writePage(filePath, title, description, activePage, content) {
  const fullDir = path.dirname(filePath);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  ${head(title, description)}
</head>
<body>
  ${topBar()}
  ${header(activePage)}
  ${content}
  ${footer()}
</body>
</html>`;

  fs.writeFileSync(filePath, htmlContent, 'utf-8');
}

// ─────────────────────────────────────────────
// GENERATE STANDALONE PAGES
// ─────────────────────────────────────────────

// 1. About Us
writePage(
  path.join(rootDir, 'about.html'),
  'About Us | Trusted Tax & Accounting Experts',
  'Learn about Tax Filings Canada, our mission, vision, values, and commitment to providing top-quality tax and accounting services across Canada.',
  'about',
  `
  ${pageBanner('About Tax Filings Canada', [{ text: 'About' }])}
  <section class="section">
    <div class="container">
      <div class="grid-1-1">
        <div class="fade-in">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Accounting Team" style="border-radius:12px;box-shadow:var(--shadow-md);">
        </div>
        <div class="fade-in">
          <h2>Our Story & Mission</h2>
          <p>Founded with a vision to simplify Canadian tax and accounting compliance, Tax Filings Canada provides affordable, high-quality, and transparent financial solutions for individuals and businesses across Canada.</p>
          <p>We leverage modern cloud-based technology to offer completely remote, paperless tax filing services that save you time and money. Our team of CPAs and tax specialists is committed to maximizing your tax refunds and reducing your tax prep fees by up to 75% compared to traditional brick-and-mortar firms.</p>
          <div class="btn-group mt-20">
            <a href="/services.html" class="btn btn-primary">Our Services</a>
            <a href="/contact.html" class="btn btn-outline">Free Consultation</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-gray">
    <div class="container">
      <div class="grid-2">
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-bullseye"></i></div>
          <h3>Our Mission</h3>
          <p>To empower Canadian businesses and individuals with accurate, reliable, and strategic tax and accounting services that drive growth, minimize tax liabilities, and simplify compliance through innovative cloud solutions.</p>
        </div>
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-eye"></i></div>
          <h3>Our Vision</h3>
          <p>To be Canada's most trusted and affordable remote accounting partner, recognized for exceptional customer satisfaction, transparent fixed pricing, and professional excellence.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Our Core Values</h2>
        <p>The principles that guide our work, our decisions, and our client partnerships.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-4">
        <div class="icon-card">
          <div class="card-icon"><i class="fas fa-shield-alt"></i></div>
          <h4>Integrity</h4>
          <p>We maintain the highest professional and ethical standards in all our compliance work.</p>
        </div>
        <div class="icon-card">
          <div class="card-icon"><i class="fas fa-check-double"></i></div>
          <h4>Accuracy</h4>
          <p>We guarantee 100% accurate tax filing, ensuring maximum deductions and zero compliance errors.</p>
        </div>
        <div class="icon-card">
          <div class="card-icon"><i class="fas fa-hand-holding-usd"></i></div>
          <h4>Affordability</h4>
          <p>We provide transparent fixed-fee plans, ensuring professional accounting is accessible to everyone.</p>
        </div>
        <div class="icon-card">
          <div class="card-icon"><i class="fas fa-smile"></i></div>
          <h4>Client-First</h4>
          <p>We offer year-round, dedicated support with a 100% risk-free, satisfaction guarantee.</p>
        </div>
      </div>
    </div>
  </section>
  `
);

// 2. Team
writePage(
  path.join(rootDir, 'team.html'),
  'Meet Our Tax Experts | Professional CPAs',
  'Meet the professional Chartered Professional Accountants (CPAs) and tax specialists at Tax Filings Canada, serving all provinces.',
  'about',
  `
  ${pageBanner('Our Tax Experts', [{ text: 'About', link: '/about.html' }, { text: 'Our Experts' }])}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Expert Tax & Accounting Professionals</h2>
        <p>Our team consists of Chartered Professional Accountants (CPA), Chartered Accountants (CA), and tax specialists with Big 4 consulting experience, dedicated to handling your taxes with extreme precision.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-4">
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=280&fit=crop" alt="Udit Gupta" class="team-photo">
          <div class="team-info">
            <h3 class="team-name">Udit Gupta</h3>
            <div class="team-role">CEO & Founder</div>
            <div class="team-credentials">CA, CPA (ICAI & MIA), CPA Canada In-Depth Tax</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=280&fit=crop" alt="Vinayak Indolia" class="team-photo">
          <div class="team-info">
            <h3 class="team-name">Vinayak Indolia</h3>
            <div class="team-role">Senior Tax Expert</div>
            <div class="team-credentials">CPA, CA</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=280&fit=crop" alt="Anmol Mittal" class="team-photo">
          <div class="team-info">
            <h3 class="team-name">Anmol Mittal</h3>
            <div class="team-role">Cross-Border Tax Expert</div>
            <div class="team-credentials">CPA Canada, CPA USA, CA (ICAI)</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=280&fit=crop" alt="Gurjot Singh" class="team-photo">
          <div class="team-info">
            <h3 class="team-name">Gurjot Singh</h3>
            <div class="team-role">Canadian Tax Specialist</div>
            <div class="team-credentials">CPA Canada, Tax Expert</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
);

// 3. Testimonials
writePage(
  path.join(rootDir, 'testimonials.html'),
  'Client Reviews & Testimonials | Tax Filings Canada',
  'Read verified 5-star client testimonials and reviews from small business owners, freelancers, and corporations across Canada.',
  'about',
  `
  ${pageBanner('Client Testimonials', [{ text: 'About', link: '/about.html' }, { text: 'Testimonials' }])}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>What Our Clients Say</h2>
        <p>We pride ourselves on offering outstanding service with 100% transparency. Here are reviews from verified Google and Birdeye listings.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        <div class="testimonial-card">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="testimonial-text">"The corporate tax return process was seamless. The team helped us navigate our multi-province tax filing and saved us thousands in potential double taxes."</p>
          <div class="testimonial-author">
            <div class="author-avatar">J</div>
            <div>
              <div class="author-name">Johnathan Miller</div>
              <div class="author-role">Founder, TechVibe Inc.</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="testimonial-text">"As a self-employed realtor, taxes were always a nightmare. They categorized all my rental property and business expenses perfectly. Extremely helpful."</p>
          <div class="testimonial-author">
            <div class="author-avatar">A</div>
            <div>
              <div class="author-name">Amanda Ross</div>
              <div class="author-role">Realtor, Re/Max Metro</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="testimonial-text">"Incredible response time. I sent my T4 slips and they filed my T1 return within 24 hours. The pay after service model gave me complete peace of mind."</p>
          <div class="testimonial-author">
            <div class="author-avatar">N</div>
            <div>
              <div class="author-name">Nathan K</div>
              <div class="author-role">Software Engineer, Vancouver</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
);

// 4. Contact Us
writePage(
  path.join(rootDir, 'contact.html'),
  'Contact Us | Get a Free Tax Consultation',
  'Get in touch with Tax Filings Canada. Book a free 15-minute consultation for individual or corporate tax filing, bookkeeping, and payroll.',
  'contact',
  `
  ${pageBanner('Contact Us', [{ text: 'Contact' }])}
  <section class="section">
    <div class="container">
      <div class="grid-2-1">
        <div class="fade-in">
          <h2>Get in Touch</h2>
          <p>Fill out the form below and one of our tax experts will get back to you within 2-4 business hours. Let us help you handle your compliance stress-free.</p>
          <form class="contact-form">
            <div class="grid-2">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" id="email" required placeholder="john@example.com">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label for="phone">Your Phone</label>
                <input type="tel" id="phone" required placeholder="(123) 456-7890">
              </div>
              <div class="form-group">
                <label for="service">Select Service</label>
                <select id="service">
                  <option value="corporate-tax">Corporate Tax Filing</option>
                  <option value="personal-tax">Personal Tax Filing</option>
                  <option value="bookkeeping">Bookkeeping & Accounting</option>
                  <option value="payroll">Payroll Processing</option>
                  <option value="gst-hst">GST/HST Returns</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" required placeholder="Tell us about your tax or accounting requirements..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message <i class="fas fa-paper-plane"></i></button>
          </form>
        </div>
        <div class="fade-in">
          <div class="service-card" style="text-align:left;margin-bottom:20px;">
            <h3 style="font-size:1.15rem;margin-bottom:15px;color:var(--dark-green);"><i class="fas fa-headset text-primary" style="margin-right:8px;"></i> Direct Contact</h3>
            <p style="margin-bottom:8px;"><strong>Phone:</strong> <a href="tel:+14166190068" class="text-primary">+1 (416) 619-0068</a></p>
            <p style="margin-bottom:8px;"><strong>Email:</strong> <a href="mailto:contact@taxfilings.ca" class="text-primary">contact@taxfilings.ca</a></p>
            <p style="margin-bottom:0;"><strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM EST</p>
          </div>
          <div class="service-card" style="text-align:left;">
            <h3 style="font-size:1.15rem;margin-bottom:15px;color:var(--dark-green);"><i class="fas fa-map-marker-alt text-primary" style="margin-right:8px;"></i> Offices</h3>
            <p style="margin-bottom:8px;font-size:0.88rem;"><strong>Toronto:</strong> 381 Front St W, M5V 3R8</p>
            <p style="margin-bottom:8px;font-size:0.88rem;"><strong>Vancouver:</strong> 997 Seymour St, V6B 3M1</p>
            <p style="margin-bottom:8px;font-size:0.88rem;"><strong>Brampton:</strong> 30 Alderbury Cres, L6T 1P6</p>
            <p style="margin-bottom:0;font-size:0.88rem;"><strong>Vaughan:</strong> 185 Millway Ave, L4K 0L2</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
);

// 5. Utility Pages (Privacy, Terms, Resources, book-consultation, 404)
writePage(
  path.join(rootDir, 'privacy.html'),
  'Privacy Policy | Tax Filings Canada',
  'Read our privacy policy to understand how we protect your personal and business tax data.',
  '',
  `
  ${pageBanner('Privacy Policy', [{ text: 'Privacy Policy' }])}
  <section class="section">
    <div class="container-narrow">
      <p>At Tax Filings Canada, we are committed to protecting the privacy and security of your personal and business financial information. This Privacy Policy describes how we collect, use, and safeguard your data when you use our tax filing and accounting services.</p>
      <h2 style="font-size:1.5rem;margin:30px 0 15px;">Information Collection</h2>
      <p>We collect personal information necessary to prepare and file your tax returns, including names, contact details, social insurance numbers (SIN), business numbers, income slips, financial statements, and receipts. We obtain this data directly from you or with your consent via official CRA portals.</p>
      <h2 style="font-size:1.5rem;margin:30px 0 15px;">Data Protection & Security</h2>
      <p>We implement industry-standard security protocols to encrypt and protect your files during transfer and storage. We never sell, lease, or share your financial data with third parties except as required to file your tax returns with the Canada Revenue Agency (CRA) or as required by law.</p>
    </div>
  </section>
  `
);

writePage(
  path.join(rootDir, 'terms.html'),
  'Terms of Service | Tax Filings Canada',
  'Terms of service and client engagement policies for Tax Filings Canada.',
  '',
  `
  ${pageBanner('Terms of Service', [{ text: 'Terms of Service' }])}
  <section class="section">
    <div class="container-narrow">
      <p>By engaging Tax Filings Canada, you agree to our Terms of Service. We provide professional tax preparation, bookkeeping, and payroll services based on the financial documents and information provided by you.</p>
      <h2 style="font-size:1.5rem;margin:30px 0 15px;">Client Responsibilities</h2>
      <p>You are responsible for ensuring all financial receipts, T-slips, business records, and receipts provided to us are accurate, complete, and filed in a timely manner. We rely on your documentation to file accurate returns with the CRA.</p>
      <h2 style="font-size:1.5rem;margin:30px 0 15px;">Pay After Service</h2>
      <p>Under our Pay After Service guarantee, you will review your completed tax return before payment. Once you approve the return, you must make full payment before we transmit the return electronically to the CRA.</p>
    </div>
  </section>
  `
);

writePage(
  path.join(rootDir, '404.html'),
  'Page Not Found | 404 Error',
  'The page you are looking for does not exist.',
  '',
  `
  <section class="section" style="padding:120px 0;text-align:center;">
    <div class="container">
      <div style="font-size:5rem;color:var(--primary);font-weight:700;margin-bottom:20px;"><i class="fas fa-triangle-exclamation"></i> 404</div>
      <h2>Oops! Page Not Found</h2>
      <p style="max-width:500px;margin:15px auto 30px;">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/" class="btn btn-primary">Go Back Home</a>
    </div>
  </section>
  `
);

writePage(
  path.join(rootDir, 'resources.html'),
  'Free E-Books & Tax Resources | Tax Filings Canada',
  'Download free Canadian tax e-books, CRA forms, and technical guides for businesses and individuals.',
  'about',
  `
  ${pageBanner('Free Tax Resources & E-Books', [{ text: 'Resources' }])}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Downloadable E-Books & Technical Guides</h2>
        <p>Boost your tax knowledge with our free resources written by professional CPAs.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        <div class="service-card">
          <div class="card-icon"><i class="fas fa-book-bookmark"></i></div>
          <h3>Corporate Tax Savings Guide</h3>
          <p>Learn 15 legal tax loopholes to reduce your corporation's tax burden in Canada.</p>
          <a href="#" class="btn btn-primary btn-sm">Download Free PDF <i class="fas fa-download"></i></a>
        </div>
        <div class="service-card">
          <div class="card-icon"><i class="fas fa-file-invoice"></i></div>
          <h3>CRA Audit Defense Kit</h3>
          <p>What to do if the CRA audits your small business. Steps to prepare and defend your business.</p>
          <a href="#" class="btn btn-primary btn-sm">Download Free PDF <i class="fas fa-download"></i></a>
        </div>
        <div class="service-card">
          <div class="card-icon"><i class="fas fa-hand-holding-usd"></i></div>
          <h3>GST/HST Compliance Guide</h3>
          <p>Everything about filing, input tax credits, and common pitfalls for new entrepreneurs.</p>
          <a href="#" class="btn btn-primary btn-sm">Download Free PDF <i class="fas fa-download"></i></a>
        </div>
      </div>
    </div>
  </section>
  `
);

console.log('Standalone pages generated successfully!');
