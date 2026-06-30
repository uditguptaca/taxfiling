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

const topBar = () => ``;

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
                <a href="/corporate-tax-accountant-and-tax-services-in-canada-new-design.html">Corporate Tax</a>
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
              <li><a href="/tax-accountant-firm/ontario/toronto.html">Toronto</a></li>
              <li><a href="/tax-accountant-firm/british-columbia/vancouver.html">Vancouver</a></li>
              <li><a href="/tax-accountant-firm/ontario/brampton.html">Brampton</a></li>
              <li><a href="/tax-accountant-firm/ontario/vaughan.html">Vaughan</a></li>
              <li><a href="/tax-accountant-firm/ontario/mississauga.html">Mississauga</a></li>
              <li><a href="/tax-accountant-firm/alberta/calgary.html">Calgary</a></li>
              <li><a href="/tax-accountant-firm/alberta/edmonton.html">Edmonton</a></li>
              <li><a href="/tax-accountant-firm/ontario/ottawa.html">Ottawa</a></li>
              <li><a href="/tax-accountant-firm/index.html" style="font-weight: 700; border-top: 1px solid var(--border-gray);">View All Locations</a></li>
            </ul>
          </li>
          <li>
            <a href="/pricing.html" class="${isPricingActive}">Pricing <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="/affordable-pricing/cheap-individual-tax-filing.html">Individual Tax</a></li>
              <li><a href="/affordable-pricing/cheap-corporate-tax-filing.html">Corporation Tax</a></li>
              <li><a href="/affordable-pricing/cheap-accounting-bookkeeping.html">Accounting & Bookkeeping</a></li>
              <li><a href="/affordable-pricing/cheap-payroll-services.html">Payroll Processing</a></li>
              <li><a href="/affordable-pricing/gst-hst-pst-tax-filing.html">GST/HST/PST</a></li>
              <li><a href="/affordable-pricing/cheap-npo-non-profit-tax-filing.html">Non-Profit Tax</a></li>
              <li><a href="/affordable-pricing/ntr-notice-to-reader.html">Notice to Reader</a></li>
              <li><a href="/affordable-pricing/cheap-trust-tax-filing.html">Trust & Estate Tax</a></li>
              <li><a href="/affordable-pricing/cheap-partnership-tax-filing.html">Partnership Tax</a></li>
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
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="/services/corporate-tax.html">Corporate Tax Filing</a></li>
            <li><a href="/services/bookkeeping.html">Bookkeeping Services</a></li>
            <li><a href="/services/payroll.html">Payroll Services</a></li>
            <li><a href="/services/virtual-cfo.html">Virtual CFO Services</a></li>
            <li><a href="/services/small-business-accounting.html">Small Business Accounting</a></li>
            <li><a href="/services/tax-planning.html">Tax Planning &amp; Advisory</a></li>
          </ul>
        </div>
        
        <div>
          <h4>Locations</h4>
          <ul class="footer-links">
            <li><a href="/tax-accountant-firm/ontario/toronto.html">Toronto, ON</a></li>
            <li><a href="/tax-accountant-firm/british-columbia/vancouver.html">Vancouver, BC</a></li>
            <li><a href="/tax-accountant-firm/alberta/calgary.html">Calgary, AB</a></li>
            <li><a href="/tax-accountant-firm/quebec/montreal.html">Montreal, QC</a></li>
            <li><a href="/tax-accountant-firm/manitoba/winnipeg.html">Winnipeg, MB</a></li>
            <li><a href="/tax-accountant-firm/saskatchewan/saskatoon.html">Saskatoon, SK</a></li>
            <li><a href="/tax-accountant-firm/nova-scotia/halifax.html">Halifax, NS</a></li>
            <li><a href="/tax-accountant-firm/new-brunswick/moncton.html">Moncton, NB</a></li>
          </ul>
        </div>
        
        <div>
          <h4>Industries</h4>
          <ul class="footer-links">
            <li><a href="/industries/healthcare.html">Healthcare &amp; Medical</a></li>
            <li><a href="/industries/technology.html">Technology &amp; Startups</a></li>
            <li><a href="/industries/manufacturing.html">Manufacturing</a></li>
            <li><a href="/industries/restaurants.html">Restaurants &amp; Food</a></li>
            <li><a href="/industries/real-estate.html">Real Estate &amp; Property</a></li>
            <li><a href="/industries/ecommerce.html">E-Commerce Businesses</a></li>
            <li><a href="/industries/construction.html">Construction &amp; Trades</a></li>
            <li><a href="/industries/non-profit.html">Non-Profits &amp; Charities</a></li>
          </ul>
        </div>
        
        <div>
          <h4>Pricing</h4>
          <ul class="footer-links">
            <li><a href="/pricing/corporate-tax.html">Corporate Tax Filing</a></li>
            <li><a href="/pricing/accounting-bookkeeping.html">Monthly Bookkeeping</a></li>
            <li><a href="/pricing/individual-tax.html">Personal Tax Filing</a></li>
            <li><a href="/pricing/gst-hst-pst.html">GST/HST Return Filing</a></li>
            <li><a href="/pricing/partnership-tax.html">Partnership Tax Return</a></li>
            <li><a href="/pricing/trust-estate-tax.html">Trust &amp; Estate returns</a></li>
            <li><a href="/pricing/notice-to-reader.html">Notice to Reader (NTR)</a></li>
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
// REUSABLE SECTIONS (EXACT REPLICAS)
// ─────────────────────────────────────────────

const getPricingSection = () => `
  <section class="section section-gray">
    <div class="container">
      <div class="section-header">
        <h2>Canada Tax & Accounting — Fixed Pricing</h2>
        <p>No hidden fees. Transparent, affordable, and fixed pricing. Pay only after your service is completed.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-4">
        ${pricingPlans.map((p, idx) => `
          <div class="pricing-card ${idx % 2 === 0 ? 'teal' : 'orange'}">
            <h4>${p.name}</h4>
            <div class="price">From– ${p.price}</div>
            <div class="includes">${p.includes}</div>
            <a href="/affordable-pricing/${p.refSlug}.html" class="btn btn-outline-white btn-sm">Explore More</a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const getCaseStudiesSection = () => `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Canada Tax &amp; Accounting Case Studies</h2>
        <p>See how our expert tax and accounting services have helped corporations and businesses save money, stay compliant.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-4" style="align-items: stretch;">
        <div class="case-study-card card-manilla">
          <h4>Case Study 1</h4>
          <h5>CRA Audit for GST/HST – Saving Our Client Over $70,000</h5>
          <p>A mid-sized e-commerce business faced a $75,000 CRA GST/HST audit. We identified filing errors and restructured their compliance. The CRA reassessed and reduced the total liability to $3,500, saving the client $71,500.</p>
          <a href="#" class="btn btn-outline btn-sm">Download PDF</a>
        </div>
        <div class="case-study-card card-kraft">
          <h4>Case Study 2</h4>
          <h5>CRA Audit for Personal Tax – Avoiding Unfair Tax Adjustments</h5>
          <p>A self-employed IT consultant faced an audit on $20,000 of expense claims. We gathered documentation and defended the deductions. The CRA accepted 90% of claims, saving the client $18,800.</p>
          <a href="#" class="btn btn-outline btn-sm">Download PDF</a>
        </div>
        <div class="case-study-card card-slate">
          <h4 style="color: var(--color-bookcloth) !important;">Case Study 3</h4>
          <h5>Voluntary Disclosure – Avoiding CRA Penalties</h5>
          <p>A small business owner missed filings for five years, facing heavy penalties. We filed under the Voluntary Disclosure Program (VDP). The CRA waived all penalties, saving the client over $50,000.</p>
          <a href="#" class="btn btn-outline-white btn-sm">Download PDF</a>
        </div>
        <div class="case-study-card card-cloud">
          <h4>Case Study 4</h4>
          <h5>Filing 10 Years of Late Tax Returns – Big Refund Secured</h5>
          <p>A contractor hadn't filed tax returns for 10 years and expected a massive debt. We filed all overdue returns, claiming missed tax credits. Rather than owing, they received a $28,000 refund.</p>
          <a href="#" class="btn btn-outline btn-sm">Download PDF</a>
        </div>
      </div>
    </div>
  </section>
`;

const getTeamSection = () => `
  <section class="section section-gray">
    <div class="container">
      <div class="section-header">
        <h2>Our Team: Alumni of CPA/CA Accounting Institutions</h2>
        <p>Our Partners Are Alumni of the World's Top Accounting and Tax Institutions</p>
        <div class="accent-line"></div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:20px;">
        <div class="team-card">
          <div style="height:220px; overflow:hidden; border-radius:8px 8px 0 0;">
            <img src="/images/udit_hero.png" alt="Udit Gupta" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
          <div class="team-info" style="padding:15px; text-align:left;">
            <h3 class="team-name" style="font-size:1.1rem;">Udit Gupta</h3>
            <div class="team-role">CEO &amp; Founder</div>
            <p style="font-size:0.8rem; margin-top:8px; line-height:1.4;">CA, CPA (ICAI &amp; MIA), CPA Canada In-Depth Tax, Tax Expert</p>
          </div>
        </div>
        <div class="team-card">
          <div style="height:220px; overflow:hidden; border-radius:8px 8px 0 0;">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="Abhinav Gupta" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
          <div class="team-info" style="padding:15px; text-align:left;">
            <h3 class="team-name" style="font-size:1.1rem;">Abhinav Gupta</h3>
            <div class="team-role">Tax Expert</div>
            <p style="font-size:0.8rem; margin-top:8px; line-height:1.4;">Canada Tax, International Tax, Cross Border Tax, Transfer Pricing</p>
          </div>
        </div>
        <div class="team-card">
          <div style="height:220px; overflow:hidden; border-radius:8px 8px 0 0;">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" alt="Raghav Gupta" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
          <div class="team-info" style="padding:15px; text-align:left;">
            <h3 class="team-name" style="font-size:1.1rem;">Raghav Gupta</h3>
            <div class="team-role">Tax Expert</div>
            <p style="font-size:0.8rem; margin-top:8px; line-height:1.4;">International Tax, Transfer Pricing</p>
          </div>
        </div>
        <div class="team-card">
          <div style="height:220px; overflow:hidden; border-radius:8px 8px 0 0;">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" alt="Anmol Mittal" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
          <div class="team-info" style="padding:15px; text-align:left;">
            <h3 class="team-name" style="font-size:1.1rem;">Anmol Mittal</h3>
            <div class="team-role">Cross-Border Expert</div>
            <p style="font-size:0.8rem; margin-top:8px; line-height:1.4;">CPA Canada, CPA USA, CA (ICAI), Canada Tax Expert</p>
          </div>
        </div>
        <div class="team-card">
          <div style="height:220px; overflow:hidden; border-radius:8px 8px 0 0;">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop" alt="Vinayak Indolia" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>
          <div class="team-info" style="padding:15px; text-align:left;">
            <h3 class="team-name" style="font-size:1.1rem;">Vinayak Indolia</h3>
            <div class="team-role">Senior Advisor</div>
            <p style="font-size:0.8rem; margin-top:8px; line-height:1.4;">CPA, CA. - CFO Advisory | Fractional CFO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const getServiceTiersSection = (pageName, pageType = 'service', customTiers = null) => {
  let tier1 = 'Basic Compliance';
  let tier2 = 'Standard Business';
  let tier3 = 'Premium Growth';

  let p1 = '$150';
  let p2 = '$450';
  let p3 = '$950';

  let u1 = '/Year';
  let u2 = '/Year';
  let u3 = '/Year';

  let features1 = ['Basic compliance filing', 'Single return preparation', 'Email tax support'];
  let features2 = ['Standard return filing', 'Financial statements prep', 'GST/HST compliance support'];
  let features3 = ['All corporate filings', 'Monthly bookkeeping included', 'Virtual CFO strategy support'];

  if (customTiers) {
    return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>${customTiers.title}</h2>
          <p>${customTiers.subtitle}</p>
          <div class="accent-line"></div>
        </div>
        <div class="grid-3">
          <div class="tier-card">
            <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">${customTiers.t1Name}</h4>
            <div class="tier-price">${customTiers.t1Price}<span>${customTiers.t1Unit}</span></div>
            <p style="font-size:0.85rem;color:var(--body-text-light);margin-bottom:8px;"><strong>Coverage:</strong> ${customTiers.t1Coverage}</p>
            <div style="font-size:0.85rem;line-height:1.5;margin-bottom:15px;">
              <strong>Deliverables:</strong>
              <ul style="padding-left:15px;margin-top:5px;">
                ${customTiers.t1Deliv.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
            <p style="font-style:italic;font-size:0.8rem;color:var(--body-text-light);">${customTiers.t1Foot}</p>
            <a href="/contact.html" class="btn btn-outline" style="width:100%;margin-top:15px;">Book Now</a>
          </div>
          <div class="tier-card featured">
            <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">${customTiers.t2Name}</h4>
            <div class="tier-price">${customTiers.t2Price}<span>${customTiers.t2Unit}</span></div>
            <p style="font-size:0.85rem;color:var(--body-text-light);margin-bottom:8px;"><strong>Coverage:</strong> ${customTiers.t2Coverage}</p>
            <div style="font-size:0.85rem;line-height:1.5;margin-bottom:15px;">
              <strong>Deliverables:</strong>
              <ul style="padding-left:15px;margin-top:5px;">
                ${customTiers.t2Deliv.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
            <p style="font-style:italic;font-size:0.8rem;color:var(--body-text-light);">${customTiers.t2Foot}</p>
            <a href="/contact.html" class="btn btn-primary" style="width:100%;margin-top:15px;">Book Now</a>
          </div>
          <div class="tier-card">
            <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">${customTiers.t3Name}</h4>
            <div class="tier-price">${customTiers.t3Price}<span>${customTiers.t3Unit}</span></div>
            <p style="font-size:0.85rem;color:var(--body-text-light);margin-bottom:8px;"><strong>Coverage:</strong> ${customTiers.t3Coverage}</p>
            <div style="font-size:0.85rem;line-height:1.5;margin-bottom:15px;">
              <strong>Deliverables:</strong>
              <ul style="padding-left:15px;margin-top:5px;">
                ${customTiers.t3Deliv.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
            <p style="font-style:italic;font-size:0.8rem;color:var(--body-text-light);">${customTiers.t3Foot}</p>
            <a href="/contact.html" class="btn btn-outline" style="width:100%;margin-top:15px;">Book Now</a>
          </div>
        </div>
      </div>
    </section>
    `;
  }

  if (pageType === 'service') {
    if (pageName === 'Corporate Tax') {
      tier1 = 'Basic Corporate Tax Services';
      tier2 = 'Standard Corporate Tax Services';
      tier3 = 'Premium Corporate Tax Services';
      p1 = '$199'; p2 = '$499'; p3 = '$999';
      u1 = '/Month'; u2 = '/Month'; u3 = '/Month';
    } else {
      tier1 = `Basic ${pageName} Services`;
      tier2 = `Standard ${pageName} Services`;
      tier3 = `Premium ${pageName} Services`;
    }
  } else if (pageType === 'industry') {
    tier1 = 'Basic Accounting Services';
    tier2 = 'Corporate Tax Filing Services';
    tier3 = 'Personal Tax Filing Services';
    p1 = '$100'; p2 = '$499'; p3 = '$200';
    u1 = '/Month'; u2 = '/Return'; u3 = '/Return';
  }

  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${pageName} Service Package Tiers</h2>
        <p>Flexible packages designed to meet your tax preparation, filing, and advisory needs.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        <div class="tier-card">
          <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">${tier1}</h4>
          <div class="tier-price">${p1}<span>${u1}</span></div>
          <ul class="tier-features">
            ${features1.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
            <li><i class="fas fa-times" style="color:var(--danger);"></i> Bookkeeping support</li>
          </ul>
          <a href="/contact.html" class="btn btn-outline" style="width:100%;">Select Package</a>
        </div>
        <div class="tier-card featured">
          <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">${tier2}</h4>
          <div class="tier-price">${p2}<span>${u2}</span></div>
          <ul class="tier-features">
            ${features2.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
            <li><i class="fas fa-check"></i> CRA dispute assistance</li>
          </ul>
          <a href="/contact.html" class="btn btn-primary" style="width:100%;">Select Package</a>
        </div>
        <div class="tier-card">
          <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">${tier3}</h4>
          <div class="tier-price">${p3}<span>${u3}</span></div>
          <ul class="tier-features">
            ${features3.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
            <li><i class="fas fa-check"></i> Dedicated monthly analyst</li>
          </ul>
          <a href="/contact.html" class="btn btn-outline" style="width:100%;">Select Package</a>
        </div>
      </div>
    </div>
  </section>
  `;
};

const getWhyChooseUsSection = (pageName, customTitle = null, customSubtitle = null, customPoints = null) => {
  const title = customTitle || 'Why Businesses &amp; Corporations Choose Tax Filings Canada';
  const subtitle = customSubtitle || 'Our team of experienced Tax Accountant provide trusted tax advice, accurate filings, and tailored strategies to minimize liabilities. We offer transparent pricing and full CRA compliance support for bookkeeping, GST/HST, payroll, and corporate taxes.';
  const points = customPoints || [
    { title: 'Expert Tax Filing &amp; Planning', desc: 'Providing tailored tax filing and planning to reduce liabilities, maximize refunds, and ensure CRA compliance.' },
    { title: 'Transparent &amp; Risk-Free Tax Services', desc: '100% risk-free tax filing with clear pricing, no hidden fees, plus support for personal taxes, small business accounting, and bookkeeping.' },
    { title: 'CRA Compliance &amp; Cross Border Tax', desc: 'From bookkeeping to corporate audits, protect your business with CRA compliance and expert cross border tax strategies.' },
    { title: 'Technology-Driven Bookkeeping &amp; Accounting', desc: 'We use advanced accounting software for seamless bookkeeping, payroll, and small business tax filing.' }
  ];

  return `
  <section class="section section-gray">
    <div class="container">
      <div class="grid-2">
        <div style="display:flex;align-items:center;justify-content:center;">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop" alt="CPA Tax Experts" style="border-radius:12px;box-shadow:var(--shadow-md);max-width:100%;">
        </div>
        <div>
          <div class="section-header" style="text-align:left;margin-bottom:30px;">
            <h2>${title}</h2>
            <p>${subtitle}</p>
            <div class="accent-line" style="margin:0;"></div>
          </div>
          <div class="grid-2" style="gap:20px;">
            ${points.map((pt, idx) => `
              <div style="display:flex;gap:15px;align-items:flex-start;">
                <div style="width:40px;height:40px;border-radius:50%;background:${idx % 2 === 0 ? 'var(--primary-light)' : 'var(--teal-light)'};color:${idx % 2 === 0 ? 'var(--primary)' : 'var(--teal)'};display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;"><i class="fas fa-check-circle"></i></div>
                <div>
                  <h5 style="margin-bottom:5px;font-weight:700;">${pt.title}</h5>
                  <p style="font-size:0.88rem;margin:0;">${pt.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
};

const getClientsLogoSection = () => `
  <section class="section pt-0 pb-0" style="padding: 40px 0; border-top: 1px solid var(--border-gray); border-bottom: 1px solid var(--border-gray); background: var(--white);">
    <div class="container">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:30px;opacity:0.65;">
        <span style="font-size:1.1rem;font-weight:700;color:var(--dark-green);">Trusted By:</span>
        <span style="font-size:1.3rem;font-weight:800;letter-spacing:1px;color:var(--body-text);">ALTEREGO</span>
        <span style="font-size:1.3rem;font-weight:800;letter-spacing:1px;color:var(--body-text);">CHAASNI</span>
        <span style="font-size:1.3rem;font-weight:800;letter-spacing:1px;color:var(--body-text);">PAXWAY</span>
        <span style="font-size:1.3rem;font-weight:800;letter-spacing:1px;color:var(--body-text);">DONALDSON</span>
        <span style="font-size:1.3rem;font-weight:800;letter-spacing:1px;color:var(--body-text);">CANEA CONNECT</span>
      </div>
    </div>
  </section>
`;

const getWorkflowSection = () => `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>"A Unique Approach – Results First, Payment Later!"</h2>
        <p>Risk-Free, Hassle-Free, and Client-First!</p>
        <div class="accent-line"></div>
      </div>
      <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:20px;">
        <div class="service-card" style="text-align:left;display:flex;gap:20px;align-items:center;padding:20px;border-left:4px solid var(--primary);">
          <div style="font-size:2rem;font-weight:800;color:var(--primary);width:50px;">01</div>
          <div>
            <h4 style="margin-bottom:5px;font-size:1.15rem;font-weight:700;">Step 1: Share your information – No Upfront Payment!</h4>
            <p style="margin:0;font-size:0.9rem;color:var(--body-text-light);">Securely upload your tax slips, receipts, and invoices. We get to work without holding your credit card hostage.</p>
          </div>
        </div>
        <div class="service-card" style="text-align:left;display:flex;gap:20px;align-items:center;padding:20px;border-left:4px solid var(--teal);">
          <div style="font-size:2rem;font-weight:800;color:var(--teal);width:50px;">02</div>
          <div>
            <h4 style="margin-bottom:5px;font-size:1.15rem;font-weight:700;">Step 2: We prepare your financials &amp; tax return.</h4>
            <p style="margin:0;font-size:0.9rem;color:var(--body-text-light);">Our expert CPAs organize your books, maximize write-offs, and draft your personal or corporate returns.</p>
          </div>
        </div>
        <div class="service-card" style="text-align:left;display:flex;gap:20px;align-items:center;padding:20px;border-left:4px solid var(--primary);">
          <div style="font-size:2rem;font-weight:800;color:var(--primary);width:50px;">03</div>
          <div>
            <h4 style="margin-bottom:5px;font-size:1.15rem;font-weight:700;">Step 3: Review &amp; sign the deliverable before payment.</h4>
            <p style="margin:0;font-size:0.9rem;color:var(--body-text-light);">We walk you through your draft returns. You authorize the filings only when you're 100% satisfied with the numbers.</p>
          </div>
        </div>
        <div class="service-card" style="text-align:left;display:flex;gap:20px;align-items:center;padding:20px;border-left:4px solid var(--teal);">
          <div style="font-size:2rem;font-weight:800;color:var(--teal);width:50px;">04</div>
          <div>
            <h4 style="margin-bottom:5px;font-size:1.15rem;font-weight:700;">Step 4: Make the payment only when satisfied.</h4>
            <p style="margin:0;font-size:0.9rem;color:var(--body-text-light);">Pay our fixed transparent fees. Absolutely no surprise billing or hidden processing charges.</p>
          </div>
        </div>
        <div class="service-card" style="text-align:left;display:flex;gap:20px;align-items:center;padding:20px;border-left:4px solid var(--primary);">
          <div style="font-size:2rem;font-weight:800;color:var(--primary);width:50px;">05</div>
          <div>
            <h4 style="margin-bottom:5px;font-size:1.15rem;font-weight:700;">Step 5: We file your return &amp; share final documents.</h4>
            <p style="margin:0;font-size:0.9rem;color:var(--body-text-light);">We submit your files electronically using CRA EFILE, and send you the official CRA confirmation receipt.</p>
          </div>
        </div>
        <div class="service-card" style="text-align:left;display:flex;gap:20px;align-items:center;padding:20px;border-left:4px solid var(--danger);">
          <div style="font-size:2rem;font-weight:800;color:var(--danger);width:50px;">06</div>
          <div>
            <h4 style="margin-bottom:5px;font-size:1.15rem;font-weight:700;">Step 6: 100% Refund Guarantee – If unsatisfied, claim a full refund within 24 hours!</h4>
            <p style="margin:0;font-size:0.9rem;color:var(--body-text-light);">We back our accuracy and client experience with an absolute refund policy. No questions asked.</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-30">
        <a href="/contact.html" class="btn btn-primary">Schedule a Free Consultation</a>
      </div>
    </div>
  </section>
`;

const getIndustriesGridSection = (titlePrefix = 'Canadian', customSubsectors = []) => {
  const defaultSubsectors = [
    'Health Care', 'General Technical industry', 'Financial Advisors', 'Doctors', 'Architects',
    'Hospitality & Retail', 'Non-Profit & Community', 'Cryptocurrency', 'Restaurants & Cafes', 'Religious Organizations'
  ];
  const list = customSubsectors.length > 0 ? customSubsectors : defaultSubsectors;

  return `
  <section class="section section-gray">
    <div class="container">
      <div class="section-header">
        <h2>${titlePrefix} We Work With</h2>
        <p>Providing compliant corporate tax filings, bookkeeping, and advisory across diverse business sectors.</p>
        <div class="accent-line"></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:20px;">
        ${list.map((sub, idx) => `
          <div class="service-card" style="padding:20px;text-align:center;">
            <div style="font-size:1.8rem;color:${idx % 2 === 0 ? 'var(--primary)' : 'var(--teal)'};margin-bottom:10px;"><i class="fas fa-check-circle"></i></div>
            <h5 style="font-weight:700;margin:0;font-size:0.95rem;">${sub}</h5>
          </div>
        `).join('')}
      </div>
      <div class="text-center mt-30">
        <a href="/contact.html" class="btn btn-primary">Schedule a Free Consultation</a>
      </div>
    </div>
  </section>
  `;
};

const getCorporateTaxTimeline = (customTitle = null, customSubtitle = null) => {
  const title = customTitle || 'Corporate Tax Process Phases';
  const subtitle = customSubtitle || 'Our clear three-stage workflow ensuring absolute tax optimization and complete CRA compliance.';

  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>${title}</h2>
        <p>${subtitle}</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        <div class="service-card" style="text-align:left;border-top:4px solid var(--primary);padding:25px;">
          <div style="font-size:1.25rem;font-weight:700;color:var(--primary);margin-bottom:10px;"><i class="fas fa-search-dollar"></i> Phase 1</div>
          <h5 style="font-weight:700;margin-bottom:8px;">Corporate Tax Planning &amp; Compliance Strategy Review</h5>
          <p style="font-size:0.88rem;color:var(--body-text-light);">We analyze your operations, setup eligible CCA asset deprecation classes, and strategize deductions prior to final calculations.</p>
        </div>
        <div class="service-card" style="text-align:left;border-top:4px solid var(--teal);padding:25px;">
          <div style="font-size:1.25rem;font-weight:700;color:var(--teal);margin-bottom:10px;"><i class="fas fa-file-invoice"></i> Phase 2</div>
          <h5 style="font-weight:700;margin-bottom:8px;">Corporate Tax Filing, Financial Reporting &amp; GST/HST Management</h5>
          <p style="font-size:0.88rem;color:var(--body-text-light);">Preparation of Balance Sheet, Income Statement (Schedule 100 &amp; 125), T2 returns, and corresponding provincial filings.</p>
        </div>
        <div class="service-card" style="text-align:left;border-top:4px solid var(--primary);padding:25px;">
          <div style="font-size:1.25rem;font-weight:700;color:var(--primary);margin-bottom:10px;"><i class="fas fa-chart-line"></i> Phase 3</div>
          <h5 style="font-weight:700;margin-bottom:8px;">Ongoing Tax Advisory &amp; Business Growth Strategies</h5>
          <p style="font-size:0.88rem;color:var(--body-text-light);">Proactive advice on shareholder remuneration (salary vs. dividends), holding company integration, and compliance advisory.</p>
        </div>
      </div>
    </div>
  </section>
`;
};

const getLocationServicesSection = (locName) => `
  <section class="section pt-0">
    <div class="container">
      <div class="section-header">
        <h2>Tax &amp; Accounting Services Offered in ${locName}</h2>
        <p>Providing a full suite of compliance, bookkeeping, and filing services locally near you.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-calculator"></i></div>
          <h5>Tax Accounting Services</h5>
          <p style="font-size:0.9rem;">Expert personal and business tax preparation and filing customized for ${locName} residents.</p>
        </div>
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-globe-americas"></i></div>
          <h5>Cross-Border Filing</h5>
          <p style="font-size:0.9rem;">Compliant cross-border and international tax returns for dual residents and expats.</p>
        </div>
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-receipt"></i></div>
          <h5>HST Netfile</h5>
          <p style="font-size:0.9rem;">Preparation and electronic submission of GST/HST returns directly to the CRA netfile portal.</p>
        </div>
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-book-open"></i></div>
          <h5>Bookkeeping Services</h5>
          <p style="font-size:0.9rem;">Reconciliations, general ledgers, trial balance preparations, and monthly financial reporting.</p>
        </div>
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-file-invoice-dollar"></i></div>
          <h5>Corporate Tax Solutions</h5>
          <p style="font-size:0.9rem;">T2 returns, schedules prep, capital cost deductions, and corporate planning for local businesses.</p>
        </div>
        <div class="service-card" style="text-align:left;">
          <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-users"></i></div>
          <h5>Payroll Services</h5>
          <p style="font-size:0.9rem;">CPP/EI calculations, T4 summary filings, direct deposits, and source deduction remittances.</p>
        </div>
      </div>
    </div>
  </section>
`;

const getFaqSection = (pageName, customFaqs = []) => {
  const defaultFaqs = [
    { q: 'What does "Pay After Service" mean?', a: 'Our Pay After Service model means you review and approve all deliverables before making any payment. We prepare your returns or financial files, you review them, and only then do you pay. This ensures 100% satisfaction.' },
    { q: 'How does price matching work?', a: 'If you find a lower verified quote from another professional accounting firm in Canada for the same scope of services, we will match it immediately. Simply provide a written quote from the competitor.' },
    { q: 'How do I submit my tax documents?', a: 'We support completely secure digital uploads via our client portal, or you can email them to us. We support files from QuickBooks, Xero, Excel, and scan/photo documents.' }
  ];
  const faqs = customFaqs.length > 0 ? customFaqs : defaultFaqs;

  return `
  <section class="section section-gray" id="faq">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions about ${pageName}</h2>
        <p>Common questions regarding our compliance workflows and service guarantees.</p>
        <div class="accent-line"></div>
      </div>
      <div class="faq-list">
        ${faqs.map(f => `
          <div class="faq-item">
            <button class="faq-question">${f.q} <i class="fas fa-chevron-down"></i></button>
            <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:40px;font-size:1.05rem;font-weight:600;color:var(--dark-green);">
        Still Searching for the Answer You Need? <a href="/faq.html" style="color:var(--primary);text-decoration:underline;">View FAQ Page</a> or <a href="/contact.html" style="color:var(--primary);text-decoration:underline;">Contact Us</a>
      </div>
    </div>
  </section>
  `;
};

const getCtaBanner = (pageName) => `
  <section class="cta-banner">
    <div class="container">
      <h3>Get started with Tax Filings Canada</h3>
      <p style="color:var(--white);">Schedule your free 15-minute consultation today. No obligations, pay only after deliverables are completed.</p>
      <div class="btn-group" style="justify-content:center;">
        <a href="/contact.html" class="btn btn-primary btn-lg">Book Free Consultation</a>
        <a href="/pricing.html" class="btn btn-outline-white btn-lg">View Pricing</a>
      </div>
    </div>
  </section>
`;

const getMeetingCtaBox = (customTitle = null) => {
  const title = customTitle || 'Book a Meeting with a Tax Accountant';
  return `
  <div class="service-card" style="text-align:left;margin-top:30px;border-left:4px solid var(--primary);padding:25px;background:var(--white);">
    <h4 style="margin-bottom:12px;font-weight:700;color:var(--dark-green);"><i class="fas fa-handshake"></i> ${title}</h4>
    <ul style="list-style:none;padding:0;margin:0 0 20px;display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:10px;font-size:0.9rem;">
      <li><i class="fas fa-check-circle text-primary"></i> Free initial consultation</li>
      <li><i class="fas fa-check-circle text-teal"></i> No obligations</li>
      <li><i class="fas fa-check-circle text-primary"></i> Speak directly with expert Tax Accountant</li>
      <li><i class="fas fa-check-circle text-teal"></i> Customized solutions for your needs</li>
    </ul>
    <a href="/contact.html" class="btn btn-primary btn-sm">Get Started</a>
  </div>
`;
};

// DATA DEFINITIONS
const services = [
  { slug: 'tax-planning', name: 'Tax Planning', desc: 'Maximize deductions and optimize your long-term tax position with proactive planning.', icon: 'fa-funnel-dollar' },
  { slug: 'corporate-tax', name: 'Corporate Tax', desc: 'Accurate T2 corporate tax return preparation and filing for private corporations and small businesses.', icon: 'fa-file-invoice-dollar' },
  { slug: 'hst-returns', name: 'HST Returns', desc: 'Seamless HST return preparation, calculations, input tax credits, and electronic filing.', icon: 'fa-receipt' },
  { slug: 'gst-returns', name: 'GST Returns', desc: 'Timely and accurate GST return compilation and filing to keep your business fully compliant.', icon: 'fa-coins' },
  { slug: 'accounting', name: 'Top Accounting', desc: 'Full-service financial statement preparation, notice to reader compilation, and tax advice.', icon: 'fa-calculator' },
  { slug: 'small-business-accounting', name: 'Small Business Accounting', desc: 'All-in-one monthly accounting solutions tailored specifically for small business owners.', icon: 'fa-store' },
  { slug: 'financial-accounting', name: 'Financial Accounting', desc: 'Balance sheet, income statement, general ledger maintenance, and financial reporting.', icon: 'fa-chart-pie' },
  { slug: 'virtual-accounting', name: 'Virtual Accounting', desc: '100% remote, paperless accounting support using secure QuickBooks and Xero cloud platforms.', icon: 'fa-laptop' },
  { slug: 'management-accounting', name: 'Management Accounting', desc: 'Internal budgeting, cash flow forecasting, variance analysis, and performance tracking.', icon: 'fa-sliders-h' },
  { slug: 'bookkeeping', name: 'Top Bookkeeping', desc: 'Accurate record keeping, bank and credit card reconciliations, and trial balance prep.', icon: 'fa-book-open' },
  { slug: 'virtual-bookkeeping', name: 'Virtual Bookkeeping', desc: 'Remote bookkeeping services keeping your business finances organized and up-to-date.', icon: 'fa-network-wired' },
  { slug: 'payroll', name: 'Payroll Services', desc: 'Complete payroll processing, T4 summaries, direct deposits, and source deductions reporting.', icon: 'fa-users' },
  { slug: 'accounting-advisory', name: 'Accounting Advisory', desc: 'Strategic consulting for systems selection, tax structure planning, and business advisory.', icon: 'fa-comments-dollar' },
  { slug: 'virtual-cfo', name: 'Virtual CFO', desc: 'High-level financial strategy, dashboard reporting, fundraising support, and profit optimization.', icon: 'fa-chart-line' },
  { slug: 'business-transformation', name: 'Business Transformation', desc: 'Transitioning your manual processes to fully digital, automated accounting systems.', icon: 'fa-recycle' }
];

const industries = [
  { slug: 'healthcare', name: 'Healthcare', icon: 'fa-heartbeat', desc: 'Specialized accounting for medical doctors, dentists, chiropractors, and clinics.' },
  { slug: 'real-estate', name: 'Real Estate', icon: 'fa-building', desc: 'Tax strategies and accounting for real estate agents, brokers, and property owners.' },
  { slug: 'construction', name: 'Construction', icon: 'fa-hard-hat', desc: 'Progress billing, job costing, subcontractor T5018 filing, and tax advice for builders.' },
  { slug: 'ecommerce', name: 'E-Commerce', icon: 'fa-shopping-cart', desc: 'Multi-channel sales tax tracking, inventory accounting, Shopify/Amazon integrations.' },
  { slug: 'restaurants', name: 'Restaurants', icon: 'fa-utensils', desc: 'Tips tracking, cost of goods sold (COGS) analysis, inventory control, and payroll.' },
  { slug: 'professional-services', name: 'Professional Services', icon: 'fa-briefcase', desc: 'Bookkeeping, corporate tax, and advisory for consultants, designers, and lawyers.' },
  { slug: 'technology', name: 'Technology', icon: 'fa-laptop-code', desc: 'SR&ED tax credits support, cash burn tracking, and Virtual CFO services for tech startups.' },
  { slug: 'manufacturing', name: 'Manufacturing', icon: 'fa-industry', desc: 'Cost accounting, inventory valuation, work-in-progress (WIP) tracking, and corporate tax.' },
  { slug: 'transportation', name: 'Transportation', icon: 'fa-truck', desc: 'Logistics accounting, fuel tax tracking, driver payroll, and corporate tax returns.' },
  { slug: 'non-profit', name: 'Non-Profit', icon: 'fa-hand-holding-heart', desc: 'T3010 Registered Charity Information Returns and T1044 NPO returns filing.' }
];

const locations = [
  { slug: 'toronto', name: 'Toronto', provinceSlug: 'ontario', address: '381 Front St W, Toronto, ON M5V 3R8' },
  { slug: 'vancouver', name: 'Vancouver', provinceSlug: 'british-columbia', address: '997 Seymour St, Vancouver, BC V6B 3M1' },
  { slug: 'calgary', name: 'Calgary', provinceSlug: 'alberta', address: '120 8 Ave SE, Calgary, AB T2G 0K6' },
  { slug: 'montreal', name: 'Montreal', provinceSlug: 'quebec', address: '1250 René-Lévesque Blvd W, Montreal, QC H3B 4W8' },
  { slug: 'winnipeg', name: 'Winnipeg', provinceSlug: 'manitoba', address: '201 Portage Ave, Winnipeg, MB R3B 3K6' },
  { slug: 'saskatoon', name: 'Saskatoon', provinceSlug: 'saskatchewan', address: '409 3rd Ave S, Saskatoon, SK S7K 5R5' },
  { slug: 'halifax', name: 'Halifax', provinceSlug: 'nova-scotia', address: '1801 Hollis St, Halifax, NS B3J 3N4' },
  { slug: 'moncton', name: 'Moncton', provinceSlug: 'new-brunswick', address: '860 Main St, Moncton, NB E1C 1G2' }
];

const pricingPlans = [
  { slug: 'accounting-bookkeeping', refSlug: 'cheap-accounting-bookkeeping', name: 'Business Accounting From- $10/ M', price: '$10/ M', includes: 'Monthly reconciliations, trial balance preparation, bank/credit card tracking, and QuickBooks support.' },
  { slug: 'corporate-tax', refSlug: 'cheap-corporate-tax-filing', name: 'Corporate Tax Filing From- $90', price: '$90', includes: 'T2 corporate tax filing, balance sheet, income statement, corporate tax optimization, and CRA defense.' },
  { slug: 'individual-tax', refSlug: 'cheap-individual-tax-filing', name: 'Personal Tax FIlingFrom- $25', price: '$25', includes: 'T1 tax return filing for students, employed, and self-employed. Inclusions: T4, T5, RRSP, medical deductions.' },
  { slug: 'gst-hst-pst', refSlug: 'gst-hst-pst-tax-filing', name: 'GST/HST Tax FilingsFrom $75', price: '$75', includes: 'Sales tax compilation, input tax credits (ITCs) matching, and CRA filing compliance.' },
  { slug: 'partnership-tax', refSlug: 'cheap-partnership-tax-filing', name: 'Partnership Tax FilingFrom-$250', price: '$250', includes: 'T5013 partnership information returns filing, K-1 partner allocations, and strategic tax planning.' },
  { slug: 'non-profit-tax', refSlug: 'cheap-npo-non-profit-tax-filing', name: 'Non-Profit Tax FilingFrom- $250', price: '$250', includes: 'T3010 charity return filing, T1044 NPO return, financial statements preparation, and audit support.' },
  { slug: 'notice-to-reader', refSlug: 'ntr-notice-to-reader', name: 'Notice to Reader From- $500', price: '$500', includes: 'NTR compilation engagement, financial statement preparation, and complete corporate tax compliance.' },
  { slug: 'trust-estate-tax', refSlug: 'cheap-trust-tax-filing', name: 'Trust-Estate Tax Filing From- $300', price: '$300', includes: 'T3 trust tax return filing, estate tax planning, and distributions allocations.' }
];

// ─────────────────────────────────────────────
// 1. SERVICES HUB & DETAIL PAGES
// ─────────────────────────────────────────────

// Services Hub
writePage(
  path.join(rootDir, 'services.html'),
  'Our Tax & Accounting Services in Canada',
  'Explore all tax filing, corporate accounting, bookkeeping, payroll, and Virtual CFO services offered by Tax Filings Canada.',
  'services',
  `
  ${pageBanner('Our Services', [{ text: 'Services' }])}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Comprehensive Business & Personal Services</h2>
        <p>Choose from our specialized compliance services. All services are offered under our 100% Risk-Free, Pay-After-Service policy.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        ${services.map(s => `
          <a href="/services/${s.slug}.html" class="service-card">
            <div class="card-icon"><i class="fas ${s.icon}"></i></div>
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
            <span class="card-link">Learn More <i class="fas fa-arrow-right"></i></span>
          </a>
        `).join('')}
      </div>
    </div>
  </section>
  `
);

// Service Detail Pages
services.forEach(s => {
  const isCorporateTax = s.slug === 'corporate-tax';

  // Customize service title, subtitle, details
  const title = isCorporateTax ? 'Tailored Corporate Tax Accounting & Services for Canadian Businesses' : `Tailored ${s.name} Accounting & Services for Canadian Businesses`;
  const subtitle = isCorporateTax ? `At Tax Filings Canada, we provide expert corporate tax accounting and tax services tailored to your business needs. Our comprehensive services ensure full compliance with Canadian tax regulations, maximizing deductions and minimizing liabilities. With secure, cloud-based solutions, we handle everything from tax filings to strategic tax planning. Our team of experts works with you to optimize your financial strategies, ensuring growth and stability. Focus on growing your business while we manage all your corporate tax requirements.` : `At Tax Filings Canada, we provide expert ${s.name.toLowerCase()} accounting and advisory services tailored to your business needs. We handle compliance, tracking, and filings using secure digital solutions.`;


  const introTitle = isCorporateTax ? 'Expert Tax Solutions for Businesses Across Canada' : `Expert Solutions for ${s.name} Across Canada`;
  const introBody = isCorporateTax ? 'Filing corporate tax return in Canada is super easy now. Stay compliant and minimize liabilities/ deductions with our specialized corporate tax services.' : `Stay compliant and optimize your financial processes with our specialized ${s.name.toLowerCase()} services.`;
  const introItems = isCorporateTax ? [
    'Corporate Tax Compliance and Filing',
    'Corporate Tax Planning & Preparation Service',
    'Filing Corporate Tax Return & Sales Tax in Canada',
    'Tax Filings Canada CRA Tax Audit and Dispute Resolution'
  ] : [
    `${s.name} Compliance and Filing support`,
    `${s.name} Planning & Preparation Service`,
    `Accurate ${s.name} reporting in Canada`,
    `Expert dispute resolution and client support`
  ];

  const chooseTitle = isCorporateTax ? 'Why to choose Tax Filings Canada for your Business?' : `Why to choose Tax Filings Canada for ${s.name}?`;
  const chooseSubtitle = isCorporateTax ? 'Searching for expert outsourced tax preparation services? Why you should partner with Tax Filings Canada Tax Experts for all your corporate tax-related needs?' : `Why you should partner with Tax Filings Canada Experts for all your ${s.name.toLowerCase()} needs?`;
  const choosePoints = [
    { title: isCorporateTax ? 'Experienced Corporate Tax Accountants' : `Experienced ${s.name} Accountants`, desc: `Providing tailored ${s.name.toLowerCase()} services to ensure compliance and maximize deductions.` },
    { title: 'Full CRA & Federal Compliance', desc: 'Our certified accountants protect your business with complete federal and provincial tax compliance.' },
    { title: 'Hassle-Free Tax Filing', desc: 'A dedicated team that handles your financials quickly, accurately, and without upfront fees.' },
    { title: isCorporateTax ? 'Corporate Tax Preparation Service' : `${s.name} Preparation Service`, desc: `Dedicated preparation processes customized for Canadian businesses.` },
    { title: 'Seamless Digital Solutions', desc: 'Advanced accounting software integrations with QuickBooks, Xero, and wave accounting.' },
    { title: 'Scalable services for growth and expansion', desc: 'Customized packages designed to grow as your business operations expand.' }
  ];

  // Pricing package tiers for service pages
  const customTiers = isCorporateTax ? {
    title: 'Corporate Tax Accountant and Tax Services in Canada – Pricing Plans',
    subtitle: 'Our corporate tax accountant and tax services in Canada provide businesses with accurate corporate tax filing, tax planning, and CRA compliance.',
    t1Name: 'Basic Corporate Tax Services',
    t1Price: '$199', t1Unit: '/monthly',
    t1Coverage: 'Corporate tax compliance and filing support',
    t1Deliv: [
      'Corporate tax return preparation (T2 filing)',
      'GST/HST return filing & tax remittances',
      'Financial statement review for tax deductions'
    ],
    t1Foot: 'Perfect for small businesses needing tax compliance and corporate tax filing assistance.',
    t2Name: 'Standard Corporate Tax Services',
    t2Price: '$499', t2Unit: '/monthly',
    t2Coverage: 'Tax planning and compliance for growing businesses',
    t2Deliv: [
      'All features from the Basic plan',
      'Tax optimization strategies & business deductions',
      'CRA audit support & compliance advisory'
    ],
    t2Foot: 'Designed for companies requiring expert corporate tax planning, compliance monitoring, and risk management.',
    t3Name: 'Premium Corporate Tax Services',
    t3Price: '$999', t3Unit: '/monthly',
    t3Coverage: 'Full-service tax strategy and corporate structuring',
    t3Deliv: [
      'All features from the Standard plan',
      'Corporate restructuring for tax efficiency',
      'Advanced tax-saving strategies & investment planning'
    ],
    t3Foot: 'Ideal for large corporations and high-revenue businesses needing strategic tax advisory, compliance, and CRA audit support.'
  } : {
    title: `${s.name} – Service Pricing Tiers`,
    subtitle: `Providing transparent fixed pricing and high-quality CPA compliance for your ${s.name.toLowerCase()} requirements.`,
    t1Name: `Basic ${s.name}`,
    t1Price: '$150', t1Unit: '/monthly',
    t1Coverage: `Standard bookkeeping and ${s.name.toLowerCase()} preparation.`,
    t1Deliv: [
      `Preparation of basic ${s.name.toLowerCase()} files`,
      'Monthly status review via email',
      'Basic compliance validation'
    ],
    t1Foot: 'Ideal for early-stage startups and sole proprietors.',
    t2Name: `Standard ${s.name}`,
    t2Price: '$350', t2Unit: '/monthly',
    t2Coverage: `Full-service bookkeeping, filings, and CRA compliance support.`,
    t2Deliv: [
      `All features of Basic ${s.name.toLowerCase()}`,
      'GST/HST tracking & reconciliations support',
      'Direct CPA communication portal access'
    ],
    t2Foot: 'Perfect for established small businesses.',
    t3Name: `Premium ${s.name}`,
    t3Price: '$750', t3Unit: '/monthly',
    t3Coverage: 'Strategic advisory and fractional CFO integration.',
    t3Deliv: [
      `All features of Standard ${s.name.toLowerCase()}`,
      'Variance tracking & cost allocation advice',
      'Quarterly tax planning advisory sessions'
    ],
    t3Foot: 'Ideal for companies seeking high-growth financial structuring.'
  };

  // Custom FAQs
  const serviceFaqs = isCorporateTax ? [
    { q: 'What makes Tax Filings Canada’s corporate tax services unique?', a: 'Tax Filings Canada offers a personalized, strategic approach to corporate tax planning, ensuring full compliance and maximizing tax benefits for your business.' },
    { q: 'How do you ensure tax compliance for my business?', a: 'All filings are supervised or compiled by senior CPAs with deep experience in Canadian tax code and CRA guidelines.' },
    { q: 'Can Tax Filings Canada help with corporate tax audits?', a: 'Absolutely! We offer support during tax audits, helping you navigate the process with confidence and minimizing any potential tax liabilities.' },
    { q: 'How do you assist with tax planning for corporations?', a: 'We structure shareholder pay schemes, holding companies, and capital depreciations to minimize overall tax rates.' }
  ] : [
    { q: `What is included in ${s.name} services?`, a: `Our ${s.name.toLowerCase()} services include complete filing, compliance management, and strategic advice customized to Canadian tax laws.` },
    { q: `How do I start with ${s.name} services?`, a: 'You can start by booking a free 15-minute call. We will review your files, provide a fixed quote, and start working immediately.' }
  ];

  const htmlContent = `
    <!-- Custom styling to replicate WordPress Elementor service page layout -->
    <style>
      .srv-hero {
        background: var(--color-slate-dark);
        padding: 80px 0 60px;
        color: var(--white);
        text-align: center;
      }
      .srv-hero h1 {
        font-size: 2.6rem;
        font-weight: 800;
        line-height: 1.2;
        color: var(--white);
        max-width: 900px;
        margin: 0 auto 20px;
      }
      .srv-hero p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: #CBD5E1;
        max-width: 800px;
        margin: 0 auto 40px;
      }
      .srv-collage-container {
        max-width: 960px;
        margin: 40px auto 0;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.1);
      }
      .srv-collage-img {
        width: 100%;
        display: block;
        height: auto;
      }
      .google-reviews-bar {
        background: var(--white);
        padding: 20px 0;
        border-top: 1px solid var(--border-gray);
        border-bottom: 1px solid var(--border-gray);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
      }
      .google-reviews-bar .stars {
        color: var(--star-gold);
        font-size: 1.15rem;
        display: flex;
        gap: 2px;
      }
      .google-reviews-bar .badge-txt {
        font-weight: 700;
        color: var(--dark-green);
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
      }
      .google-reviews-bar .rating {
        font-weight: 800;
        font-size: 1.1rem;
        color: var(--body-text);
      }
      .intro-img-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .intro-img {
        max-width: 100%;
        border-radius: 12px;
        box-shadow: var(--shadow-md);
      }
    </style>

    <!-- 1. HERO BANNER -->
    <section class="srv-hero">
      <div class="container">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <div class="btn-group" style="justify-content:center;">
          <a href="/contact.html" class="btn btn-primary btn-lg">Book Free Consultation</a>
          <a href="#service-pricing" class="btn btn-outline-white btn-lg">Explore Pricing</a>
        </div>
        <div class="srv-collage-container">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=500&fit=crop" alt="Collage of Team & Credentials" class="srv-collage-img">
        </div>
      </div>
    </section>

    <!-- 2. GOOGLE REVIEWS BAR -->
    <div class="google-reviews-bar">
      <span class="badge-txt">Excellent</span>
      <div class="stars">
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
      <span class="rating">Based on 929 reviews</span>
      <span style="font-weight:700;color:#4285F4;"><i class="fab fa-google"></i> Google Rating</span>
    </div>

    <!-- 3. INTRO BLOCK -->
    <section class="section" style="padding-bottom: 20px;">
      <div class="container">
        <div class="grid-2-1">
          <div>
            <h2>${introTitle}</h2>
            <p style="font-size:1.1rem;line-height:1.6;color:var(--body-text-light);margin-top:15px;margin-bottom:25px;">${introBody}</p>
            <ul class="check-list mt-15" style="margin-bottom:30px;">
              ${introItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
            ${getMeetingCtaBox(isCorporateTax ? 'Book a Meeting with an Expert TAX Accountant' : null)}
          </div>
          <div class="intro-img-container">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" alt="A Team of CPA Experts" class="intro-img">
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SERVICE TIERS -->
    <section id="service-pricing" style="padding: 20px 0;">
      ${getServiceTiersSection(s.name, 'service', customTiers)}
    </section>

    <!-- 5. WHY CHOOSE US -->
    ${getWhyChooseUsSection(s.name, chooseTitle, chooseSubtitle, choosePoints)}

    <!-- 6. CORPORATE TAX PROCESS PHASES (ONLY FOR CORPORATE TAX OR RELEVANT) -->
    ${isCorporateTax ? getCorporateTaxTimeline('Corporate Tax Process Phases', 'Our clear three-stage workflow ensuring absolute tax optimization and complete CRA compliance.') : getCorporateTaxTimeline(`${s.name} Execution Phases`, `Our simplified delivery timeline for ${s.name.toLowerCase()} services.`)}

    <!-- 7. RISK-FREE WORKFLOW -->
    ${getWorkflowSection()}

    <!-- 8. INDUSTRIES PARTNER -->
    ${getIndustriesGridSection()}

    <!-- 9. CLIENTS BANNERS -->
    ${getClientsLogoSection()}

    <!-- 10. GLOBAL PRICING -->
    ${getPricingSection()}

    <!-- 11. CASE STUDIES -->
    ${getCaseStudiesSection()}

    <!-- 12. TEAM SECTION -->
    ${getTeamSection()}

    <!-- 13. FAQ SECTION -->
    ${getFaqSection(s.name, serviceFaqs)}

    <!-- 14. CTA BANNER -->
    ${getCtaBanner(s.name)}
  `;

  // Write to standard route
  writePage(path.join(rootDir, 'services', `${s.slug}.html`), `${s.name} Services in Canada`, `Professional ${s.name} services across Canada.`, 'services', htmlContent);

  // Write to special Corporate Tax URL path
  if (isCorporateTax) {
    writePage(path.join(rootDir, 'corporate-tax-accountant-and-tax-services-in-canada-new-design.html'), `${s.name} Services in Canada`, `Professional corporate tax services across Canada.`, 'services', htmlContent);
  }
});

// ─────────────────────────────────────────────
// 2. INDUSTRIES HUB & DETAIL PAGES
// ─────────────────────────────────────────────

// Industries Hub
writePage(
  path.join(rootDir, 'industries', 'index.html'),
  'Industries We Serve | Specialized Accounting',
  'We provide specialized accounting, payroll, and tax services tailored to healthcare, real estate, construction, e-commerce, and other sectors.',
  'industries',
  `
  ${pageBanner('Industries We Serve', [{ text: 'Industries' }])}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Specialized Industry Tax & Accounting Solutions</h2>
        <p>Every industry faces unique tax challenges and CRA guidelines. We provide specialized compliance support for every major sector.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-3">
        ${industries.map(ind => `
          <a href="/industries/${ind.slug}.html" class="industry-card">
            <div class="card-icon"><i class="fas ${ind.icon}"></i></div>
            <h3>${ind.name}</h3>
            <p>${ind.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>
  </section>
  `
);

// Industry Detail Pages
industries.forEach(ind => {
  const isHealthcare = ind.slug === 'healthcare';

  // Customized Subsectors
  let subsectorsList = [];
  let subsectorsWithIcons = [];
  if (isHealthcare) {
    subsectorsList = ['Dentists', 'Pharmacies', 'Doctors', 'Chiropractors', 'Veterinary', 'Medical Practice & Physicians', 'Therapists & Psychologists'];
    subsectorsWithIcons = [
      { name: 'Dentists', icon: 'fa-tooth' },
      { name: 'Pharmacies', icon: 'fa-prescription-bottle-alt' },
      { name: 'Doctors', icon: 'fa-user-md' },
      { name: 'Chiropractors', icon: 'fa-bone' },
      { name: 'Veterinary', icon: 'fa-paw' },
      { name: 'Medical Practice & Physicians', icon: 'fa-clinic-medical' },
      { name: 'Therapists & Psychologists', icon: 'fa-brain' }
    ];
  } else if (ind.slug === 'real-estate') {
    subsectorsList = ['Realtors', 'Brokers', 'Property Developers', 'Property Managers', 'Appraisers', 'Real Estate Investors', 'Leasing Agencies'];
    subsectorsWithIcons = subsectorsList.map(s => ({ name: s, icon: 'fa-building' }));
  } else if (ind.slug === 'construction') {
    subsectorsList = ['General Contractors', 'Subcontractors', 'Home Builders', 'Framers', 'Electricians', 'Plumbers', 'Roofers & Renovation firms'];
    subsectorsWithIcons = subsectorsList.map(s => ({ name: s, icon: 'fa-hard-hat' }));
  } else if (ind.slug === 'ecommerce') {
    subsectorsList = ['Shopify Sellers', 'Amazon FBA Sellers', 'Dropshippers', 'WooCommerce Brands', 'eBay Stores', 'Digital Goods Sellers', 'Wholesalers'];
    subsectorsWithIcons = subsectorsList.map(s => ({ name: s, icon: 'fa-shopping-cart' }));
  } else if (ind.slug === 'restaurants') {
    subsectorsList = ['Cafes', 'Fine Dining', 'Bakeries', 'Bars & Pubs', 'Food Trucks', 'Catering Services', 'Franchises'];
    subsectorsWithIcons = subsectorsList.map(s => ({ name: s, icon: 'fa-utensils' }));
  } else {
    subsectorsList = ['Independent Practitioners', 'Sole Proprietors', 'Partnerships', 'Corporations', 'Startups', 'Advisory Consultants'];
    subsectorsWithIcons = subsectorsList.map(s => ({ name: s, icon: 'fa-briefcase' }));
  }

  // Dynamic Tiers
  let tier1Desc = `Ideal for small ${ind.name} or independent professionals looking for streamlined bookkeeping. Our Tax Accountants manage reconciliations, track expenses, and ensure compliance. As your trusted Accounting Firm, we help simplify Tax Filing while keeping finances organized. For clinics or businesses with higher volumes, each additional transaction is billed at $1.50 CAD.`;
  let tier2Desc = `Designed for ${ind.name} and incorporated businesses. Our expert Tax Accountants provide full-service Tax Filing, including GST/HST compliance, CRA audit support, and corporate tax strategy. Partnering with our Accounting Firm ensures accuracy, reduced liabilities, and long-term financial stability.`;
  let tier3Desc = `Perfect for individuals and ${ind.name} professionals requiring accurate Tax Filing. A dedicated Tax Accountant ensures compliance with CRA regulations and maximizes eligible deductions. Our Accounting Firm specializes in supporting self-employed practitioners and employees with stress-free filing.`;

  // Specific Titles and Content
  const heroTitle = isHealthcare ? 'Empowering Healthcare Professionals in Canada With Stress- Free Tax Filing by Accounting Firm' : `Empowering ${ind.name} Businesses in Canada With Stress-Free Tax Filing by Accounting Firm`;
  const heroSubtitle = isHealthcare ? 'At Taxccount, we help Canadian Healthcare professionals streamline finances, reduce stress, and grow with confidence.' : `At Taxccount, we help Canadian ${ind.name} professionals and businesses streamline finances, reduce stress, and grow with confidence.`;

  // Specific FAQs
  const industryFaqs = isHealthcare ? [
    { q: 'When are tax returns due in Canada for healthcare professionals?', a: 'For unincorporated practitioners, the deadline to file is June 15, but any taxes owed must be paid by April 30. For incorporated medical professional corporations (MPCs), the T2 return must be filed within 6 months of your clinic\'s fiscal year-end.' },
    { q: 'What expenses can healthcare professionals typically claim?', a: 'You can claim professional licensing fees, malpractice insurance, clinic overhead expenses, medical supplies and equipment (depreciated via Capital Cost Allowance), home office space, and vehicle expenses for travel between clinics.' },
    { q: 'How do income tax and benefits apply to those in healthcare?', a: 'Healthcare workers are subject to federal and provincial brackets. If incorporated, you can defer taxes by retaining earnings in the corporation and choosing between salary or dividend payouts.' },
    { q: 'What does Risk-FREE Tax Filing mean for healthcare practitioners?', a: 'It means we prepare all returns, compilations, and GST filings first. You review and sign off on the deliverables before making any payment. We EFILE to the CRA only after payment is cleared.' },
    { q: 'How do expat tax services support Canadian healthcare workers abroad?', a: 'We help doctors, nurses, and researchers working abroad determine their residency status, file tax treaty disclosures, and declare foreign income accurately.' },
    { q: 'Why should healthcare professionals work with a trusted tax accountant?', a: 'Healthcare taxes involve complex rules around GST/HST exemptions for medical services, overhead sharing agreements, and professional corporation regulations. Certified tax CPAs help protect you from audits and minimize liabilities.' }
  ] : [
    { q: `When are tax returns due in Canada for ${ind.name} businesses?`, a: `For corporations in the ${ind.name.toLowerCase()} sector, T2 tax filings are due within 6 months of the fiscal year-end. Personal returns for sole proprietors are due June 15, with balances payable by April 30.` },
    { q: `What tax deductions are available for ${ind.name} companies?`, a: `Common write-offs include operating expenses, inventory costs, technology software licenses, marketing, employee wages, home workspace allocation, and capital assets depreciation.` },
    { q: `Why choose Tax Filings Canada for ${ind.name} accounting?`, a: `We provide specialized bookkeeping, corporate compliance, and strategic planning with a 100% Satisfaction Guarantee and Pay After Service model.` }
  ];

  const htmlContent = `
    <!-- Custom styling to replicate WordPress Elementor design -->
    <style>
      .ind-hero {
        background: linear-gradient(135deg, var(--color-slate-dark) 0%, var(--color-slate-med) 100%);
        padding: 80px 0 100px;
        color: var(--white);
        overflow: hidden;
      }
      .ind-hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 50px;
        align-items: center;
      }
      .ind-hero-left h1 {
        font-size: 2.8rem;
        font-weight: 800;
        line-height: 1.2;
        color: var(--white);
        margin-bottom: 20px;
      }
      .ind-hero-left p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: #E2E8F0;
        margin-bottom: 40px;
      }
      .ind-hero-logos {
        margin-top: 30px;
        border-top: 1px solid rgba(255,255,255,0.15);
        padding-top: 20px;
      }
      .ind-hero-logos-title {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--primary);
        font-weight: 700;
        margin-bottom: 15px;
      }
      .ind-logo-row {
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
        align-items: center;
        opacity: 0.85;
      }
      .ind-logo-item {
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: 1px;
        color: var(--white);
      }
      .ind-hero-right {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .stacked-card {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s ease;
      }
      .stacked-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.12);
        border-color: var(--primary);
      }
      .stacked-card h4 {
        color: var(--white);
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .stacked-card h4 i {
        color: var(--primary);
      }
      .stacked-card p {
        font-size: 0.88rem;
        line-height: 1.5;
        color: #CBD5E1;
        margin: 0;
      }
      .stacked-card .explore-link {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: var(--white);
        font-size: 0.82rem;
        font-weight: 600;
        margin-top: 15px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: color 0.2s;
      }
      .stacked-card:hover .explore-link {
        color: var(--primary);
      }
      .google-reviews-widget {
        background: var(--white);
        padding: 40px 0;
        border-bottom: 1px solid var(--border-gray);
      }
      .reviews-widget-grid {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 40px;
        align-items: center;
      }
      .reviews-widget-left {
        text-align: center;
        border-right: 1px solid var(--border-gray);
        padding-right: 40px;
      }
      .reviews-widget-left img {
        max-width: 140px;
        margin-bottom: 15px;
      }
      .reviews-widget-left .rating-number {
        font-size: 2.2rem;
        font-weight: 800;
        color: #1a1a2e;
        line-height: 1;
      }
      .reviews-widget-left .stars {
        color: var(--star-gold);
        font-size: 1.3rem;
        margin: 8px 0;
      }
      .reviews-widget-left .count {
        font-size: 0.85rem;
        color: var(--body-text-light);
      }
      .reviews-scroller {
        display: flex;
        gap: 20px;
        overflow-x: auto;
        padding: 10px 5px;
        scrollbar-width: thin;
      }
      .reviews-scroller::-webkit-scrollbar {
        height: 6px;
      }
      .reviews-scroller::-webkit-scrollbar-thumb {
        background: #CBD5E1;
        border-radius: 4px;
      }
      .review-bubble {
        background: var(--white);
        border: 1px solid var(--border-gray);
        border-radius: 12px;
        padding: 20px;
        min-width: 300px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.02);
      }
      .review-bubble-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .review-bubble-stars {
        color: var(--star-gold);
        font-size: 0.85rem;
      }
      .review-bubble-author {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
      }
      .review-bubble-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--primary-light);
        color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.8rem;
      }
      .review-bubble-name {
        font-weight: 600;
        font-size: 0.85rem;
      }
      .why-choose-revslider {
        position: relative;
        background: var(--white);
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        overflow: hidden;
        border: 1px solid var(--border-gray);
      }
      .slider-main-img {
        width: 100%;
        height: 380px;
        object-fit: cover;
      }
      .slider-badge-floating {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: rgba(25, 25, 25, 0.95);
        color: var(--white);
        padding: 20px;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
      }
      .slider-badge-floating h4 {
        margin: 0 0 5px;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--white);
      }
      .slider-badge-floating p {
        margin: 0;
        font-size: 0.82rem;
        color: #E2E8F0;
      }
      .subsector-card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }
      .subsector-hover-card {
        background: var(--white);
        border: 1px solid var(--border-gray);
        border-radius: 12px;
        padding: 24px 20px;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .subsector-hover-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; height: 4px;
        background: var(--primary);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      .subsector-hover-card:hover::before {
        transform: scaleX(1);
      }
      .subsector-hover-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary);
      }
      .subsector-hover-card i {
        font-size: 2.2rem;
        color: var(--dark-green);
        margin-bottom: 15px;
        transition: transform 0.3s;
      }
      .subsector-hover-card:hover i {
        transform: scale(1.1);
        color: var(--primary);
      }
      .subsector-hover-card h4 {
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
        color: var(--dark-green);
      }
      @media (max-width: 991px) {
        .ind-hero-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .reviews-widget-grid {
          grid-template-columns: 1fr;
          gap: 30px;
        }
        .reviews-widget-left {
          border-right: none;
          padding-right: 0;
          border-bottom: 1px solid var(--border-gray);
          padding-bottom: 30px;
        }
      }
    </style>

    <!-- 1. HERO BANNER -->
    <section class="ind-hero">
      <div class="container">
        <div class="ind-hero-grid">
          <div class="ind-hero-left">
            <h1>${heroTitle}</h1>
            <p>${heroSubtitle}</p>
            <div class="btn-group">
              <a href="/contact.html" class="btn btn-primary btn-lg">Book Free consultation</a>
              <a href="#pricing-plans" class="btn btn-outline-white btn-lg">Explore Pricing</a>
            </div>
            <div class="ind-hero-logos">
              <div class="ind-hero-logos-title">Trusted by Small Businesses in ${ind.name}</div>
              <div class="ind-logo-row">
                <span class="ind-logo-item">ALTEREGO</span>
                <span class="ind-logo-item">CHAASNI</span>
                <span class="ind-logo-item">PAXWAY</span>
                <span class="ind-logo-item">DONALDSON</span>
                <span class="ind-logo-item">CANEA CONNECT</span>
              </div>
            </div>
          </div>
          <div class="ind-hero-right">
            <div class="stacked-card">
              <h4><i class="fas fa-book-open"></i> Bookkeeping &amp; Accounting For ${ind.name}</h4>
              <p>Monthly financial statements &bull; Notice to Reader &bull; Software setup &amp; integration &bull; Reconciliations &bull; Trial Balance Prep</p>
              <a href="/services/bookkeeping.html" class="explore-link">Explore more <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="stacked-card">
              <h4><i class="fas fa-file-invoice-dollar"></i> Corporate Tax For ${ind.name}</h4>
              <p>T2 Corporate Tax Returns &bull; GST/HST Filings &bull; Tax Planning &bull; CRA Audit Support &bull; Deductions Optimization</p>
              <a href="/corporate-tax-accountant-and-tax-services-in-canada-new-design.html" class="explore-link">Explore more <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="stacked-card">
              <h4><i class="fas fa-users"></i> Payroll Services For ${ind.name}</h4>
              <p>Full-service payroll &bull; Unlimited support &bull; T4, ROE, WSIB, EHT &bull; Custom payslip portal for employees &bull; CRA Remittances</p>
              <a href="/services/payroll.html" class="explore-link">Explore more <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. GOOGLE REVIEWS WIDGET -->
    <section class="google-reviews-widget">
      <div class="container">
        <div class="reviews-widget-grid">
          <div class="reviews-widget-left">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--dark-green); margin-bottom: 12px;">Google Reviews</h3>
            <div class="rating-number">4.9</div>
            <div class="stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div class="count">Based on 929 reviews</div>
            <div style="font-size: 0.95rem; font-weight: 700; margin-top: 10px; color: #4285F4;">Google Rating Badge</div>
          </div>
          <div class="reviews-scroller">
            <div class="review-bubble">
              <div class="review-bubble-header">
                <span class="review-bubble-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <i class="fab fa-google text-primary"></i>
              </div>
              <p style="font-size:0.85rem; line-height:1.5; color:var(--body-text-light); margin:0;">Taxccount Canada was amazing when I needed help with my tax filing. Udit made everything clear and easy to understand. I’ll definitely be back next year.</p>
              <div class="review-bubble-author">
                <div class="review-bubble-avatar">R</div>
                <div class="review-bubble-name">Russell McGehee</div>
              </div>
            </div>
            <div class="review-bubble">
              <div class="review-bubble-header">
                <span class="review-bubble-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <i class="fab fa-google text-primary"></i>
              </div>
              <p style="font-size:0.85rem; line-height:1.5; color:var(--body-text-light); margin:0;">Abhinav was great and registered my business very quickly and diligently.</p>
              <div class="review-bubble-author">
                <div class="review-bubble-avatar">T</div>
                <div class="review-bubble-name">Tabasom N</div>
              </div>
            </div>
            <div class="review-bubble">
              <div class="review-bubble-header">
                <span class="review-bubble-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <i class="fab fa-google text-primary"></i>
              </div>
              <p style="font-size:0.85rem; line-height:1.5; color:var(--body-text-light); margin:0;">Very happy with the tax services. Thank you for your help!</p>
              <div class="review-bubble-author">
                <div class="review-bubble-avatar">J</div>
                <div class="review-bubble-name">James Dzidek</div>
              </div>
            </div>
            <div class="review-bubble">
              <div class="review-bubble-header">
                <span class="review-bubble-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <i class="fab fa-google text-primary"></i>
              </div>
              <p style="font-size:0.85rem; line-height:1.5; color:var(--body-text-light); margin:0;">Taxccount is a trustworthy accounting firm. Their team handled my business tax filing professionally and kept me informed at every step.</p>
              <div class="review-bubble-author">
                <div class="review-bubble-avatar">L</div>
                <div class="review-bubble-name">Louis Adams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. INTRO BLOCK -->
    <section class="section" style="padding-bottom: 20px;">
      <div class="container">
        <div class="grid-2-1">
          <div>
            <h2>Trusted Accounting &amp; Tax Solutions for ${ind.name} Sector</h2>
            <p style="font-size:1.1rem;line-height:1.6;color:var(--body-text-light);margin-top:15px;margin-bottom:25px;">Our Accounting Firm provides fully compliant personal (T1) and corporate (T2) tax returns, bank reconciliations, bookkeeping, and payroll support customized for professionals and businesses operating in the ${ind.name.toLowerCase()} industry.</p>
            
            <h3 class="mt-30">Our Industry Specializations</h3>
            <ul class="check-list mt-20">
              <li>Custom tax structures for active operational income</li>
              <li>Accurate overhead cost tracking and shared space expenses allocation</li>
              <li>Comprehensive GST/HST filings and input tax credits compliance</li>
              <li>Voluntary disclosure and late filings protection</li>
              <li>Representation and direct audit support before the CRA</li>
            </ul>

            ${getMeetingCtaBox(isHealthcare ? 'Book a Meeting with a Tax Accountant' : null)}
          </div>
          <div>
            <div class="service-card" style="text-align:left;position:sticky;top:100px;">
              <h3>Consult an Expert</h3>
              <p>Discuss your ${ind.name.toLowerCase()} tax requirements with our certified accounting specialists.</p>
              <a href="/contact.html" class="btn btn-primary" style="width:100%;">Book Free Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. CORE SUB-SERVICES FEATURES -->
    <section class="section pt-0">
      <div class="container">
        <div class="section-header">
          <h2>Core Sub-Services &amp; Features</h2>
          <p>We provide a comprehensive accounting ecosystem so you can focus on operational execution.</p>
          <div class="accent-line"></div>
        </div>
        <div class="grid-3">
          <div class="service-card" style="text-align:left;">
            <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-book-open"></i></div>
            <h5>Bookkeeping &amp; Accounting</h5>
            <ul style="padding-left:20px;font-size:0.9rem;line-height:1.6;margin-top:10px;">
              <li>Monthly financial statements</li>
              <li>Notice to Reader</li>
              <li>Software setup and integration</li>
              <li>Reconciliation of statement</li>
            </ul>
          </div>
          <div class="service-card" style="text-align:left;">
            <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-file-invoice-dollar"></i></div>
            <h5>Corporate Tax Returns</h5>
            <ul style="padding-left:20px;font-size:0.9rem;line-height:1.6;margin-top:10px;">
              <li>T2 Corporate Tax Returns</li>
              <li>GST/HST Filings</li>
              <li>Tax Planning</li>
              <li>CRA Audit Support</li>
            </ul>
          </div>
          <div class="service-card" style="text-align:left;">
            <div class="card-icon" style="margin:0 0 15px;"><i class="fas fa-users"></i></div>
            <h5>Payroll Services</h5>
            <ul style="padding-left:20px;font-size:0.9rem;line-height:1.6;margin-top:10px;">
              <li>Full-service payroll</li>
              <li>Unlimited support</li>
              <li>T4, ROE, WSIB, EHT</li>
              <li>Custom payslip portal for employees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. WHY CHOOSE US -->
    <section class="section section-gray">
      <div class="container">
        <div class="grid-2">
          <div>
            <div class="section-header" style="text-align:left;margin-bottom:30px;">
              <h2>Why ${ind.name} Professionals &amp; Businesses Partner with Us</h2>
              <p>We are a dedicated accounting firm with years of experience navigating complex CRA rules. Our CPA tax accountants protect your business and optimize overall tax efficiency.</p>
              <div class="accent-line" style="margin:0;"></div>
            </div>
            <div class="grid-2" style="gap:20px;">
              <div style="display:flex;gap:15px;align-items:flex-start;">
                <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;"><i class="fas fa-check-circle"></i></div>
                <div>
                  <h5 style="margin-bottom:5px;font-weight:700;">Tailored Tax Planning</h5>
                  <p style="font-size:0.88rem;margin:0;">Specific deductions, cost allocations, and asset depreciation structures optimized for your niche.</p>
                </div>
              </div>
              <div style="display:flex;gap:15px;align-items:flex-start;">
                <div style="width:40px;height:40px;border-radius:50%;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;"><i class="fas fa-check-circle"></i></div>
                <div>
                  <h5 style="margin-bottom:5px;font-weight:700;">Transparent Fixed Pricing</h5>
                  <p style="font-size:0.88rem;margin:0;">No surprise bills. Know exactly what you'll pay with our standard, upfront monthly/annual fees.</p>
                </div>
              </div>
              <div style="display:flex;gap:15px;align-items:flex-start;">
                <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;"><i class="fas fa-check-circle"></i></div>
                <div>
                  <h5 style="margin-bottom:5px;font-weight:700;">CRA Compliance &amp; Representation</h5>
                  <p style="font-size:0.88rem;margin:0;">We back all prepared files. If CRA raises questions, we represent your interest directly.</p>
                </div>
              </div>
              <div style="display:flex;gap:15px;align-items:flex-start;">
                <div style="width:40px;height:40px;border-radius:50%;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;"><i class="fas fa-check-circle"></i></div>
                <div>
                  <h5 style="margin-bottom:5px;font-weight:700;">Stress-Free Process</h5>
                  <p style="font-size:0.88rem;margin:0;">Completely remote cloud-based bookkeeping and filing. Submit documents, review draft, pay when done.</p>
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;">
            <div class="why-choose-revslider" style="width: 100%;">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop" alt="CPA Accounting Experts" class="slider-main-img">
              <div class="slider-badge-floating">
                <h4>Udit Gupta, CPA</h4>
                <p>Founder &amp; Managing Director &bull; Big4 Alumnus &bull; In-depth Corporate Tax Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. RISK-FREE WORKFLOW -->
    ${getWorkflowSection()}

    <!-- 7. INDUSTRIES WE PARTNER WITH (SECTORS GRID) -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <h2>${ind.name} Sectors We Work With</h2>
          <p>Providing compliant corporate tax filings, bookkeeping, and advisory across specialized operational areas.</p>
          <div class="accent-line"></div>
        </div>
        <div class="subsector-card-grid">
          ${subsectorsWithIcons.map(sub => `
            <div class="subsector-hover-card">
              <i class="fas ${sub.icon}"></i>
              <h4>${sub.name}</h4>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 8. CLIENTS LOGO BANNER -->
    ${getClientsLogoSection()}

    <!-- 9. PRICING SECTION -->
    ${getPricingSection()}

    <!-- 10. SERVICE TIERS (PRICING PLANS) -->
    <section class="section" id="pricing-plans">
      <div class="container">
        <div class="section-header">
          <h2>Tax Planning Services in Canada – Pricing Plans</h2>
          <p>Our tax planning services in Canada help businesses and individuals develop strategic tax-saving solutions, optimize deductions, and ensure CRA compliance.</p>
          <div class="accent-line"></div>
        </div>
        <div class="grid-3">
          <div class="tier-card">
            <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">Basic Accounting Services</h4>
            <div class="tier-price">$100<span>/Month (For 50 Transactions)</span></div>
            <p style="font-size:0.88rem;color:var(--body-text-light);margin-bottom:15px;line-height:1.5;">${tier1Desc}</p>
            <a href="/contact.html" class="btn btn-outline" style="width:100%;">Book Now</a>
          </div>
          <div class="tier-card featured">
            <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">Corporate Tax Filing Services</h4>
            <div class="tier-price">$499<span>/Corporate Return each year</span></div>
            <p style="font-size:0.88rem;color:var(--body-text-light);margin-bottom:15px;line-height:1.5;">${tier2Desc}</p>
            <a href="/contact.html" class="btn btn-primary" style="width:100%;">Book Now</a>
          </div>
          <div class="tier-card">
            <h4 class="tier-name" style="font-size: 1.25rem; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">Personal Tax Filing Services</h4>
            <div class="tier-price">$200<span>/Return (For Self-Employed)</span></div>
            <p style="font-size:0.88rem;color:var(--body-text-light);margin-bottom:15px;line-height:1.5;">${tier3Desc}</p>
            <a href="/contact.html" class="btn btn-outline" style="width:100%;">Book Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. BEGIN YOUR JOURNEY BANNER -->
    <section class="section pt-0 pb-0" style="background:var(--primary);color:var(--white);padding:45px 0;text-align:center;">
      <div class="container">
        <h4 style="color:var(--white);margin:0;font-size:1.45rem;font-weight:700;">Begin Your Journey with the #1 ${ind.name} Accounting Firm in Canada</h4>
      </div>
    </section>

    <!-- 12. CASE STUDIES -->
    ${getCaseStudiesSection()}

    <!-- 13. TEAM SECTION -->
    ${getTeamSection()}

    <!-- 14. FAQ SECTION -->
    ${getFaqSection(ind.name, industryFaqs)}

    <!-- 15. CTA BANNER -->
    ${getCtaBanner(ind.name)}
  `;

  // Write to standard route
  writePage(path.join(rootDir, 'industries', `${ind.slug}.html`), `Tax & Accounting for ${ind.name} Industry`, `Specialized tax filing, bookkeeping, payroll, and advisory services for businesses and professionals in the ${ind.name} sector in Canada.`, 'industries', htmlContent);
});

// ─────────────────────────────────────────────
// 3. LOCATIONS HUB & DETAIL PAGES
// ─────────────────────────────────────────────

// Locations Hub (Write to both locations/index.html and tax-accountant-firm/index.html)
const generateLocationsHub = () => `
  ${pageBanner('Our Locations', [{ text: 'Locations' }])}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Accounting Firm Locations Offering Top Tax Accountants for Tax Filing Services</h2>
        <p style="font-size:0.95rem;font-style:italic;margin-top:10px;">* This is a partial list of all the cities we serve. Please <a href="/contact.html" style="color:var(--primary);font-weight:600;">Contact us</a> if you do not find your city on the list.</p>
        <div class="accent-line"></div>
      </div>

      <div class="location-prov-list" style="max-width:900px;margin:0 auto;">
        <!-- Ontario -->
        <div class="location-prov-item active">
          <button class="location-prov-question">
            <i class="fas fa-chevron-right"></i>
            Tax Filings : Ontario
          </button>
          <div class="location-prov-answer">
            <div class="location-prov-answer-inner">
              <a href="/tax-accountant-firm/ontario/toronto.html">Toronto, ON</a>
              <a href="/tax-accountant-firm/ontario/ottawa.html">Ottawa, ON</a>
              <a href="/tax-accountant-firm/ontario/vaughan.html">Vaughan, ON</a>
              <a href="/tax-accountant-firm/ontario/brampton.html">Brampton, ON</a>
              <a href="/tax-accountant-firm/ontario/mississauga.html">Mississauga, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Hamilton, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">London, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Windsor, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Kitchener, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Waterloo, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Cambridge, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Markham, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Oakville, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Burlington, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Oshawa, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Barrie, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Guelph, ON</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Kingston, ON</a>
            </div>
          </div>
        </div>
        
        <!-- BC -->
        <div class="location-prov-item">
          <button class="location-prov-question">
            <i class="fas fa-chevron-right"></i>
            Tax Filings : British Columbia
          </button>
          <div class="location-prov-answer">
            <div class="location-prov-answer-inner">
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Vancouver, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Victoria, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Surrey, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Burnaby, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Richmond, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Coquitlam, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Kelowna, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Kamloops, BC</a>
              <a href="/tax-accountant-firm/british-columbia/vancouver.html">Nanaimo, BC</a>
            </div>
          </div>
        </div>

        <!-- Alberta -->
        <div class="location-prov-item">
          <button class="location-prov-question">
            <i class="fas fa-chevron-right"></i>
            Tax Filings : Alberta
          </button>
          <div class="location-prov-answer">
            <div class="location-prov-answer-inner">
              <a href="/tax-accountant-firm/alberta/calgary.html">Calgary, AB</a>
              <a href="/tax-accountant-firm/alberta/edmonton.html">Edmonton, AB</a>
              <a href="/tax-accountant-firm/alberta/calgary.html">Red Deer, AB</a>
              <a href="/tax-accountant-firm/alberta/calgary.html">Lethbridge, AB</a>
              <a href="/tax-accountant-firm/alberta/calgary.html">Fort McMurray, AB</a>
              <a href="/tax-accountant-firm/alberta/calgary.html">Medicine Hat, AB</a>
            </div>
          </div>
        </div>

        <!-- Saskatchewan -->
        <div class="location-prov-item">
          <button class="location-prov-question">
            <i class="fas fa-chevron-right"></i>
            Tax Filings : Saskatchewan
          </button>
          <div class="location-prov-answer">
            <div class="location-prov-answer-inner">
              <a href="/tax-accountant-firm/ontario/toronto.html">Saskatoon, SK</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Regina, SK</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Prince Albert, SK</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Moose Jaw, SK</a>
            </div>
          </div>
        </div>

        <!-- Manitoba -->
        <div class="location-prov-item">
          <button class="location-prov-question">
            <i class="fas fa-chevron-right"></i>
            Tax Filings : Manitoba
          </button>
          <div class="location-prov-answer">
            <div class="location-prov-answer-inner">
              <a href="/tax-accountant-firm/ontario/toronto.html">Winnipeg, MB</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Brandon, MB</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Steinbach, MB</a>
            </div>
          </div>
        </div>

        <!-- Nova Scotia -->
        <div class="location-prov-item">
          <button class="location-prov-question">
            <i class="fas fa-chevron-right"></i>
            Tax Filings : Nova Scotia
          </button>
          <div class="location-prov-answer">
            <div class="location-prov-answer-inner">
              <a href="/tax-accountant-firm/ontario/toronto.html">Halifax, NS</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Sydney, NS</a>
              <a href="/tax-accountant-firm/ontario/toronto.html">Dartmouth, NS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

writePage(path.join(rootDir, 'locations', 'index.html'), 'Our Locations Across Canada', 'We serve clients across Canada.', 'locations', generateLocationsHub());
writePage(path.join(rootDir, 'tax-accountant-firm', 'index.html'), 'Our Locations Across Canada', 'We serve clients across Canada.', 'locations', generateLocationsHub());

// Location Detail Pages
locations.forEach(loc => {
  const isToronto = loc.slug === 'toronto';

  // Local FAQs
  const localFaqs = [
    { q: `What is the deadline for filing corporate taxes in ${loc.name}?`, a: `In ${loc.name}, corporate tax returns (T2) are due within six months of the corporation's fiscal year-end. If you owe tax, the balance must be paid within 2 or 3 months of the year-end.` },
    { q: `How much do tax accountants in ${loc.name} charge?`, a: `Our personal tax filing services in ${loc.name} start from $25, and corporate tax returns start from $90, offered under our 100% Risk-Free price match guarantee.` },
    { q: `Does your accounting firm handle CRA audits for clients in ${loc.name}?`, a: 'Yes! We provide direct CRA audit defense and representation services for businesses and individuals throughout Ontario and Canada.' },
    { q: `Where is your ${loc.name} office located?`, a: `Our office is located at ${loc.address}. We also offer fully remote, secure cloud-based accounting services for your convenience.` }
  ];

  const htmlContent = `
    <!-- Custom styling to replicate WordPress Elementor location page design -->
    <style>
      .loc-hero {
        background: linear-gradient(135deg, var(--color-slate-dark) 0%, var(--color-slate-med) 100%);
        padding: 85px 0;
        color: var(--white);
        position: relative;
        overflow: hidden;
      }
      .loc-hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 50px;
        align-items: center;
      }
      .loc-hero-left h1 {
        font-size: 2.8rem;
        font-weight: 800;
        line-height: 1.15;
        color: var(--white);
        margin-bottom: 10px;
      }
      .loc-hero-left .tagline {
        font-size: 1.2rem;
        color: var(--primary);
        font-weight: 700;
        margin-bottom: 25px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .loc-hero-left p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #E2E8F0;
        margin-bottom: 35px;
      }
      .loc-hero-badges {
        display: flex;
        gap: 20px;
        margin-top: 30px;
        border-top: 1px solid rgba(255,255,255,0.15);
        padding-top: 25px;
        flex-wrap: wrap;
      }
      .loc-badge-item {
        font-size: 0.85rem;
        font-weight: 700;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.12);
        padding: 8px 16px;
        border-radius: 20px;
      }
      .loc-hero-right {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .loc-hero-card {
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        overflow: hidden;
        width: 100%;
        border: 1px solid var(--border-gray);
      }
      .loc-hero-card img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      .loc-hero-card-body {
        padding: 24px;
        background: var(--color-slate-dark);
        color: var(--white);
        border-top: 4px solid var(--primary);
      }
      .loc-hero-card-body h4 {
        margin: 0 0 5px;
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--white);
      }
      .loc-hero-card-body p {
        margin: 0;
        font-size: 0.85rem;
        color: #E2E8F0;
      }
      .loc-srv-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }
      .loc-srv-card {
        background: var(--white);
        border: 1px solid var(--border-gray);
        border-radius: 12px;
        padding: 30px 24px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.02);
      }
      .loc-srv-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary);
      }
      .loc-srv-card i {
        font-size: 2.2rem;
        color: var(--primary);
        margin-bottom: 20px;
      }
      .loc-srv-card h4 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 12px;
        color: var(--dark-green);
      }
      .loc-srv-card p {
        font-size: 0.88rem;
        line-height: 1.5;
        color: var(--body-text-light);
        margin: 0;
      }
      @media (max-width: 991px) {
        .loc-hero-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
      }
    </style>

    <!-- 1. HERO BANNER -->
    <section class="loc-hero">
      <div class="container">
        <div class="loc-hero-grid">
          <div class="loc-hero-left">
            <h1>Best Tax Accountant ${loc.name} - Near You</h1>
            <div class="tagline">100% Risk-Free &bull; Satisfaction Guarantee &bull; Price Match</div>
            <p>Taxccount ${loc.name} provides reliable, professional, 100% Risk-Free Tax Filing and affordable tax and accounting services tailored to meet the unique needs of small businesses, entrepreneurs, non-profits, and individuals across ${loc.name}. Pay only after service!</p>
            <div class="btn-group">
              <a href="/contact.html" class="btn btn-primary btn-lg">Book Free consultation</a>
              <a href="#local-services" class="btn btn-outline-white btn-lg">Local Services</a>
            </div>
            <div class="loc-hero-badges">
              <span class="loc-badge-item"><i class="fas fa-dollar-sign text-primary"></i> Fixed-Fee Pricing</span>
              <span class="loc-badge-item"><i class="fas fa-check-circle text-primary"></i> Pay After Service</span>
              <span class="loc-badge-item"><i class="fas fa-shield-alt text-primary"></i> CRA Defense Included</span>
            </div>
          </div>
          <div class="loc-hero-right">
            <div class="loc-hero-card">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=400&fit=crop" alt="Top Tax Accountant in ${loc.name}">
              <div class="loc-hero-card-body">
                <h4>Udit Gupta, CPA</h4>
                <p>Tax Expert &amp; Founder &bull; Providing expert filings in ${loc.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. INTRO BLOCK -->
    <section class="section" style="padding-bottom: 20px;">
      <div class="container">
        <div class="grid-2-1">
          <div>
            <h2>Trusted Tax Filing &amp; Accounting Services in ${loc.name}</h2>
            <p style="font-size:1.1rem;line-height:1.6;color:var(--body-text-light);margin-top:15px;margin-bottom:25px;">Need professional accounting in ${loc.name}? Our local team provides fully compliant personal (T1) and corporate (T2) tax returns, bank reconciliations, bookkeeping, and payroll support.</p>
            <p>We work with freelancers, consultants, retail stores, medical clinics, realtors, and manufacturing companies in ${loc.name} and surrounding areas. Our local expertise ensures your provincial taxes, HST returns, and business filings are handled correctly under current CRA guidelines.</p>
            
            <h3 class="mt-30">Our ${loc.name} Office Address</h3>
            <div class="service-card" style="text-align:left;margin:20px 0;border-left:4px solid var(--primary);box-shadow:var(--shadow-md);">
              <p style="font-size:1.05rem;color:var(--dark-green);margin-bottom:8px;"><strong><i class="fas fa-building text-primary"></i> Office Address:</strong></p>
              <p style="margin-bottom:12px;font-size:1.05rem;font-weight:700;color:var(--dark-green);">${loc.address}</p>
              <p style="margin-bottom:8px;"><strong><i class="fas fa-phone-alt text-primary"></i> Phone:</strong> +1 (416) 619-0068</p>
              <p style="margin-bottom:0;"><strong><i class="fas fa-envelope text-primary"></i> Email:</strong> contact@taxfilings.ca</p>
            </div>

            ${getMeetingCtaBox(isToronto ? 'Book a Meeting with a Tax Accountant in Toronto' : null)}
          </div>
          <div>
            <div class="service-card" style="text-align:left;position:sticky;top:100px;">
              <h3>Book a local consultation</h3>
              <p>Discuss your tax situation with our expert accounting professionals.</p>
              <a href="/contact.html" class="btn btn-primary" style="width:100%;">Book Free Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. LOCAL SERVICES OFFERED -->
    <section class="section pt-0" id="local-services">
      <div class="container">
        <div class="section-header">
          <h2>Tax &amp; Accounting Services We Offer in ${loc.name}</h2>
          <p>Complete financial compliance from standard filings to complex corporate restructuring.</p>
          <div class="accent-line"></div>
        </div>
        <div class="loc-srv-grid">
          <div class="loc-srv-card">
            <i class="fas fa-calculator"></i>
            <h4>Tax Accounting</h4>
            <p>Annual tax strategy, planning, and preparation by certified tax accountants near you.</p>
          </div>
          <div class="loc-srv-card">
            <i class="fas fa-globe"></i>
            <h4>Cross-Border Tax</h4>
            <p>Expert filing and cross-border consulting for Canadian residents with US earnings/assets.</p>
          </div>
          <div class="loc-srv-card">
            <i class="fas fa-file-invoice-dollar"></i>
            <h4>GST/HST Netfile</h4>
            <p>Accurate input tax credit reconciliations and filing of GST/HST returns directly to CRA.</p>
          </div>
          <div class="loc-srv-card">
            <i class="fas fa-book-open"></i>
            <h4>Bookkeeping</h4>
            <p>Monthly bank reconciliations, trial balances, and professional QuickBooks/Xero ledger support.</p>
          </div>
          <div class="loc-srv-card">
            <i class="fas fa-briefcase"></i>
            <h4>Corporate Tax</h4>
            <p>Corporate T2 tax return preparation, NPO tax filings, and strategic corporate tax planning.</p>
          </div>
          <div class="loc-srv-card">
            <i class="fas fa-users"></i>
            <h4>Payroll Services</h4>
            <p>Full employee payroll management, T4/ROE preparation, WSIB compliance, and CRA payroll audits.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. WHY CHOOSE US -->
    ${getWhyChooseUsSection(loc.name, isToronto ? 'Why Choose Taxccount Toronto?' : `Why Choose Taxccount ${loc.name}?`)}

    <!-- 5. RISK-FREE WORKFLOW -->
    ${getWorkflowSection()}

    <!-- 6. INDUSTRIES PARTNER -->
    ${getIndustriesGridSection(isToronto ? 'Toronto Industries Expert' : 'Canadian')}

    <!-- 7. CLIENTS LOGO BANNER -->
    ${getClientsLogoSection()}

    <!-- 8. PRICING SECTION -->
    ${getPricingSection()}

    <!-- 9. CASE STUDIES SECTION -->
    ${getCaseStudiesSection()}

    <!-- 10. TEAM SECTION -->
    ${getTeamSection()}

    <!-- 11. FAQ SECTION -->
    ${getFaqSection(loc.name, localFaqs)}

    <!-- 12. CTA BANNER -->
    ${getCtaBanner(loc.name)}
  `;

  // Write to locations folder
  writePage(path.join(rootDir, 'locations', `${loc.slug}.html`), `Tax Accountant in ${loc.name}`, `Looking for a top tax accountant or accounting firm in ${loc.name}?`, 'locations', htmlContent);

  // Write to tax-accountant-firm folder
  writePage(path.join(rootDir, 'tax-accountant-firm', loc.provinceSlug, `${loc.slug}.html`), `Tax Accountant in ${loc.name}`, `Looking for a top tax accountant or accounting firm in ${loc.name}?`, 'locations', htmlContent);
});

// ─────────────────────────────────────────────
// 4. PRICING HUB & DETAIL PAGES
// ─────────────────────────────────────────────

// Pricing Hub
writePage(
  path.join(rootDir, 'pricing.html'),
  'Affordable Tax & Accounting Pricing Plans',
  'View transparent fixed pricing plans for personal taxes, corporate tax filing, bookkeeping, payroll, and trust tax returns.',
  'pricing',
  `
  <section class="section" style="padding-top:40px;">
    <div class="container">
      <div class="section-header" style="margin-bottom:40px;">
        <h2>Canada Tax & Accounting — Fixed Pricing</h2>
        <p>No hidden fees. Transparent, affordable, and fixed pricing. Pay only after your service is completed.</p>
        <div class="accent-line"></div>
      </div>
      <div class="grid-4">
        ${pricingPlans.map((p, idx) => `
          <div class="pricing-card ${idx % 2 === 0 ? 'teal' : 'orange'}">
            <h4>${p.name}</h4>
            <div class="price">From– ${p.price}</div>
            <div class="includes">${p.includes}</div>
            <a href="/affordable-pricing/${p.refSlug}.html" class="btn btn-outline-white btn-sm">Explore More</a>
          </div>
        `).join('')}
      </div>
      <div class="price-match" style="margin-top:50px;">
        <div class="match-icon"><i class="fas fa-shield-alt"></i></div>
        <div>
          <h3>Price Match & Refund Guarantees</h3>
          <p>We will match any lower verified competitor quote. Plus, our Pay After Service guarantee means you review all deliverables before making a payment.</p>
        </div>
      </div>
    </div>
  </section>
  `
);

// Pricing Detail Pages
pricingPlans.forEach(plan => {
  // Customized FAQs
  const pricingFaqs = [
    { q: `How does the Pay After Service work for ${plan.name}?`, a: 'We compile and complete your files first. You review, approve, and sign the documents before any payment is requested. We E-File to the CRA only after the payment is processed.' },
    { q: 'What is your Price Match Guarantee?', a: 'We will match any lower written quote from a verified professional Canadian accounting firm. Simply present the quote to our representative during your consultation.' },
    { q: 'Are there any hidden fees or setup charges?', a: 'No. All our pricing is fixed and transparent. Any additional charges (e.g., for transaction volumes beyond the package limits) are discussed and agreed upon upfront.' },
    { q: 'Will I have a dedicated accountant?', a: 'Yes. A certified tax accountant will be assigned to manage your account and will be available for direct support via email and phone.' }
  ];

  const htmlContent = `
    <!-- Custom styling to replicate WordPress Elementor pricing page design -->
    <style>
      .prc-hero {
        background: linear-gradient(135deg, var(--color-slate-dark) 0%, var(--color-slate-med) 100%);
        padding: 85px 0;
        color: var(--white);
      }
      .prc-hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 50px;
        align-items: center;
      }
      .prc-hero-left h1 {
        font-size: 2.8rem;
        font-weight: 800;
        line-height: 1.15;
        color: var(--white);
        margin-bottom: 10px;
      }
      .prc-hero-left .tagline {
        font-size: 1.15rem;
        color: var(--primary);
        font-weight: 700;
        margin-bottom: 25px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .prc-hero-left p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #E2E8F0;
        margin-bottom: 35px;
      }
      .prc-hero-badges {
        display: flex;
        gap: 20px;
        margin-top: 30px;
        border-top: 1px solid rgba(255,255,255,0.15);
        padding-top: 25px;
        flex-wrap: wrap;
      }
      .prc-badge-item {
        font-size: 0.85rem;
        font-weight: 700;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.12);
        padding: 8px 16px;
        border-radius: 20px;
      }
      .prc-hero-right {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .prc-sticky-card {
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        padding: 30px;
        width: 100%;
        border-top: 5px solid var(--primary);
        color: var(--body-text);
      }
      .prc-sticky-card h3 {
        font-size: 1.3rem;
        font-weight: 800;
        color: var(--dark-green);
        margin-bottom: 15px;
      }
      .prc-sticky-card p {
        font-size: 0.9rem;
        color: var(--body-text-light);
        margin-bottom: 20px;
        line-height: 1.5;
      }
      .prc-reviews-line {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 0.85rem;
        color: var(--body-text);
        margin-top: 20px;
        border-top: 1px solid var(--border-gray);
        padding-top: 15px;
      }
      .prc-reviews-line i {
        color: var(--star-gold);
      }
      @media (max-width: 991px) {
        .prc-hero-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
      }
    </style>

    <!-- 1. HERO BANNER -->
    <section class="prc-hero">
      <div class="container">
        <div class="prc-hero-grid">
          <div class="prc-hero-left">
            <h1>Affordable ${plan.name} Services</h1>
            <div class="tagline">Starting from ${plan.price} &bull; Risk-Free Pay After Service</div>
            <p>We provide transparent pricing with zero surprise bills. Review your final returns, compilations, and GST filings first. Pay only when you are satisfied with our professional accounting services.</p>
            <div class="btn-group">
              <a href="/contact.html" class="btn btn-primary btn-lg">Book Free consultation</a>
              <a href="#service-tiers" class="btn btn-outline-white btn-lg">View Packages</a>
            </div>
            <div class="prc-hero-badges">
              <span class="prc-badge-item"><i class="fas fa-check-circle text-primary"></i> Price Match Guarantee</span>
              <span class="prc-badge-item"><i class="fas fa-check-circle text-primary"></i> Review Draft First</span>
              <span class="prc-badge-item"><i class="fas fa-check-circle text-primary"></i> CRA Authorized E-filer</span>
            </div>
          </div>
          <div class="prc-hero-right">
            <div class="prc-sticky-card">
              <h3>Secure Fixed Quote</h3>
              <p>Schedule a call with our tax experts to receive a customized service quote. Price Match &amp; Refund Guarantee included.</p>
              <a href="/contact.html" class="btn btn-primary" style="width:100%;">Book Free Call</a>
              <div class="prc-reviews-line">
                <span>Excellent 4.9/5</span>
                <div style="display:flex;gap:2px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <span>929+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. INTRO BLOCK -->
    <section class="section" style="padding-bottom: 20px;">
      <div class="container">
        <div class="grid-2-1">
          <div>
            <h2>Transparent Fixed-Fee Accounting</h2>
            <p style="font-size:1.1rem;line-height:1.6;color:var(--body-text-light);margin-top:15px;margin-bottom:25px;">Our standard fixed-rate structures help you manage business cash flows with complete confidence. Avoid hourly billing surprises.</p>
            
            <div class="service-card" style="text-align:left;border-left:4px solid var(--primary);margin:25px 0;box-shadow:var(--shadow-md);">
              <h4 style="margin-bottom:8px;color:var(--dark-green);">${plan.name}</h4>
              <div style="font-size:2.2rem;font-weight:700;color:var(--primary);margin-bottom:12px;">Starting from ${plan.price}</div>
              <p style="margin-bottom:0;color:var(--body-text-light);">${plan.includes}</p>
            </div>

            <h3 class="mt-30">What is Covered under this pricing?</h3>
            <ul class="check-list mt-20" style="margin-bottom:30px;">
              <li>Full compliance preparation and validation by a CPA</li>
              <li>Price Match Guarantee against any verified competitor rate</li>
              <li>Electronic filing directly to CRA</li>
              <li>Dedicated communication portal and email support</li>
              <li>Pay After Service — review final deliverables before paying</li>
            </ul>
          </div>
          <div>
            <div class="service-card" style="text-align:left;position:sticky;top:100px;">
              <h3>Explore Other Plans</h3>
              <p>We offer customized billing structures for high-volume transactions and enterprise requirements.</p>
              <a href="/pricing.html" class="btn btn-outline" style="width:100%;">All Pricing Plans</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SERVICE TIERS -->
    <section id="service-tiers" style="padding: 20px 0;">
      ${getServiceTiersSection(plan.name, 'pricing')}
    </section>

    <!-- 4. WHY CHOOSE US -->
    ${getWhyChooseUsSection(plan.name)}

    <!-- 5. RISK-FREE WORKFLOW -->
    ${getWorkflowSection()}

    <!-- 6. INDUSTRIES PARTNER -->
    ${getIndustriesGridSection()}

    <!-- 7. CLIENTS LOGO BANNER -->
    ${getClientsLogoSection()}

    <!-- 8. PRICING SECTION -->
    ${getPricingSection()}

    <!-- 9. CASE STUDIES SECTION -->
    ${getCaseStudiesSection()}

    <!-- 10. TEAM SECTION -->
    ${getTeamSection()}

    <!-- 11. FAQ SECTION -->
    ${getFaqSection(plan.name, pricingFaqs)}

    <!-- 12. CTA BANNER -->
    ${getCtaBanner(plan.name)}
  `;

  // Write to pricing folder
  writePage(path.join(rootDir, 'pricing', `${plan.slug}.html`), `${plan.name} Pricing`, `Transparent fixed-fee pricing for ${plan.name} in Canada.`, 'pricing', htmlContent);

  // Write to affordable-pricing folder
  writePage(path.join(rootDir, 'affordable-pricing', `${plan.refSlug}.html`), `${plan.name} Pricing`, `Transparent fixed-fee pricing for ${plan.name} in Canada.`, 'pricing', htmlContent);
});

// ─────────────────────────────────────────────
// 5. BLOG LISTING & DETAIL PAGES
// ─────────────────────────────────────────────

const blogPosts = [
  {
    slug: 'what-tax-forms-do-you-need-to-file-taxes-in-canada',
    title: 'What Tax Forms Do You Need to File Taxes in Canada? | CRA Guide',
    date: 'June 25, 2026',
    desc: 'To file taxes in Canada, you typically need the T1 General return and supporting slips such as T4, T5, T3, T4A, and schedules like Schedule 1 and Schedule 3.',
    content: `
      <h2>The T1 General: Your Core Tax Return Form</h2>
      <p>The T1 General is the main individual tax return form used by every resident filing taxes in Canada. It summarizes your total income, deductions, tax credits, and tax liability.</p>
      
      <div class="callout callout-info">
        <h4>Key Takeaway</h4>
        <p>Always gather all T4 slips from employers before starting your T1 return. CRA receives copies of these slips directly, and mismatching data triggers audit flags.</p>
      </div>

      <h2>Find Your Tax Forms</h2>
      <p>You can retrieve all your tax slips (like T4, T5, and T3) directly from the CRA's online portal using the "Represent a Client" or "My Account" service.</p>

      <h2>Common Tax Slips You May Receive</h2>
      
      <h3>T4 — Statement of Remuneration Paid</h3>
      <p>Provided by employers, showing employment income and deductions (EI, CPP, Tax).</p>

      <h3>T4A — Statement of Pension, Retirement, Annuity, and Other Income</h3>
      <p>Showing self-employed/contractor income and pension benefits.</p>

      <h3>T4E — Statement of Employment Insurance and Other Benefits</h3>
      <p>Received if you collected EI or other social support payments from Service Canada.</p>

      <h3>T4OAS — Statement of Old Age Security</h3>
      <p>Received by senior citizens receiving Old Age Security pension returns.</p>

      <h3>T4AP — Statement of Canada Pension Plan Benefits</h3>
      <p>Details the CPP pension allocations received throughout the fiscal year.</p>

      <h3>T5 — Statement of Investment Income</h3>
      <p>Issued by financial institutions, showing interest, dividends, and investment growth.</p>

      <h3>T3 — Statement of Trust Income Allocations and Designations</h3>
      <p>Showing income distributed from trusts, estates, or mutual funds.</p>

      <h3>T2202 — Tuition and Enrolment Certificate</h3>
      <p>Given by post-secondary educational institutions to claim student tax credits.</p>

      <h3>T5008 — Statement of Securities Transactions</h3>
      <p>Details financial transactions from trading stocks, shares, or bonds.</p>

      <h2>Key Tax Schedules Attached to the T1</h2>
      <p>Schedules are attached to your T1 return to calculate specific tax credits. For example, Schedule 1 calculates federal tax, Schedule 3 handles capital gains/losses, and Schedule 11 tracks tuition transfers.</p>

      <h2>Forms for Self-Employed Canadians</h2>
      <p>Self-employed individuals must attach Form T2125 (Statement of Business or Professional Activities) to calculate net self-employment business income.</p>

      <h2>Forms for Rental Property Owners</h2>
      <p>Rental property owners use Form T776 (Statement of Real Estate Rentals) to report rental revenues and offset maintenance/interest expenses.</p>

      <h2>Where to Get These Forms</h2>
      <p>CRA package downloads are accessible on the official government portals. Certified accounting firms download them automatically via professional EFILE suites.</p>

      <h2>Table of Summary</h2>
      <table class="pricing-table" style="width:100%;border-collapse:collapse;margin:20px 0;">
        <thead>
          <tr style="background:var(--dark-green);color:white;">
            <th style="padding:10px;border:1px solid #ddd;">Form/Slip ID</th>
            <th style="padding:10px;border:1px solid #ddd;">Description</th>
            <th style="padding:10px;border:1px solid #ddd;">Reporting Area</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">T1 General</td>
            <td style="padding:10px;border:1px solid #ddd;">Core Personal Income Return</td>
            <td style="padding:10px;border:1px solid #ddd;">All Personal Tax Filing</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">T4</td>
            <td style="padding:10px;border:1px solid #ddd;">Statement of Remuneration</td>
            <td style="padding:10px;border:1px solid #ddd;">Employment Income</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">T2125</td>
            <td style="padding:10px;border:1px solid #ddd;">Business Activities Statement</td>
            <td style="padding:10px;border:1px solid #ddd;">Self-Employment Income</td>
          </tr>
        </tbody>
      </table>

      <h5>		All That You Want To Know About Ontario Taxes	</h5>
      <p>Ontario provincial tax rates and filing procedures are integrated with federal systems. Learn about brackets, surtaxes, and credits to reduce liability.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What is the main tax form used in Canada?</h3>
      <p>The T1 General return is the primary personal tax document used by residents of Canada.</p>

      <h3>Do I need a T4 to file taxes?</h3>
      <p>Yes, if you were employed, your T4 details are required to calculate withholdings correctly.</p>

      <h3>Can I file taxes without all my slips?</h3>
      <p>It is recommended to wait until late February or March when financial institutions issue all slips to avoid errors.</p>

      <h3>What forms do I need if I am self-employed?</h3>
      <p>You need to attach Form T2125 to your personal T1 tax return file.</p>

      <h2>File Taxes Accurately</h2>
      <p>Reconciling multiple T-slips and schedules requires certified diligence. We recommend engaging a CPA tax accountant to ensure optimal compliance.</p>
    `
  },
  {
    slug: 'complete-guide-to-corporate-tax-filing-in-canada',
    title: 'Complete Guide to Corporate Tax Filing in Canada',
    date: 'June 16, 2026',
    desc: 'Everything you need to know about T2 returns, deadlines, and maximizing business deductions.',
    content: `
      <h2>Understanding T2 Corporate Income Tax Returns</h2>
      <p>All active and inactive corporations in Canada must file a T2 Corporate Income Tax Return for every tax year. This must be filed within six months of the corporation's fiscal year-end.</p>
      
      <div class="callout callout-warning">
        <h4>Important Deadline Note</h4>
        <p>Although the T2 filing deadline is 6 months after fiscal year-end, any taxes owed must be paid within 2 or 3 months after fiscal year-end to avoid interest charges.</p>
      </div>

      <h2>Key Deductions & Credits for Small Businesses</h2>
      <ul>
        <li><strong>Small Business Deduction (SBD):</strong> Reduces the federal tax rate on active business income up to $500,000 to just 9%.</li>
        <li><strong>Capital Cost Allowance (CCA):</strong> Allows you to deduct the depreciation of capital assets (computers, vehicles, furniture).</li>
        <li><strong>Business-use-of-home:</strong> Deducting home office costs, utilities, and internet based on workspace square footage.</li>
      </ul>
    `
  },
  {
    slug: 'gst-hst-explained-complete-guide-for-canadian-businesses',
    title: 'GST/HST Explained: A Complete Guide for Canadian Businesses',
    date: 'June 10, 2026',
    desc: 'Understanding registration, filing requirements, input tax credits, and compliance.',
    content: `
      <h2>When Do You Need to Register for GST/HST?</h2>
      <p>If your business has gross taxable sales exceeding $30,000 in any single calendar quarter or over four consecutive quarters, you must register for a GST/HST account with the CRA.</p>
      
      <div class="callout callout-tip">
        <h4>Pro Tip: Voluntary Registration</h4>
        <p>Even if your sales are under $30,000, registering voluntarily allows you to claim Input Tax Credits (ITCs) and recover the GST/HST paid on business setup costs.</p>
      </div>

      <h2>Input Tax Credits (ITCs)</h2>
      <p>ITCs are the mechanism by which you recover sales taxes paid on business expenses. When filing your GST/HST return, you subtract the GST/HST paid on expenses (ITCs) from the GST/HST collected from clients, paying the net difference to the CRA.</p>
    `
  }
];

// Blog Hub
writePage(
  path.join(rootDir, 'blog.html'),
  'Blog & Tax Resources | Tax Filings Canada',
  'Read our latest tax tips, financial advice, and CRA guides to manage your tax compliance with confidence.',
  'blog',
  `
  ${pageBanner('Blog & Tax Resources', [{ text: 'Blog' }])}
  <section class="section">
    <div class="container">
      <div class="grid-3-1">
        <div>
          <div class="grid-2">
            ${blogPosts.map(p => `
              <div class="blog-card">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=220&fit=crop" alt="${p.title}" class="blog-thumb">
                <div class="blog-body">
                  <div class="blog-date"><i class="far fa-calendar-alt"></i> ${p.date}</div>
                  <h3><a href="/blog/${p.slug}.html">${p.title}</a></h3>
                  <p class="blog-excerpt">${p.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="blog-sidebar">
          <div class="widget">
            <h3>Search Blog</h3>
            <div class="search-input">
              <input type="text" placeholder="Search articles...">
              <button aria-label="Search"><i class="fas fa-search"></i></button>
            </div>
          </div>
          <div class="widget">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Tax Tips</a></li>
              <li><a href="#">Corporate Tax</a></li>
              <li><a href="#">GST/HST Filing</a></li>
              <li><a href="#">Bookkeeping</a></li>
              <li><a href="#">Personal Tax</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
);

// Blog Post Pages
blogPosts.forEach(p => {
  const htmlContent = `
    <!-- Custom styling to replicate WordPress Elementor blog design -->
    <style>
      .blog-hero {
        background: linear-gradient(135deg, var(--color-slate-dark) 0%, var(--color-slate-med) 100%);
        padding: 60px 0;
        color: var(--white);
        margin-bottom: 40px;
      }
      .blog-hero-crumbs {
        font-size: 0.85rem;
        color: var(--primary);
        margin-bottom: 15px;
        font-weight: 600;
      }
      .blog-hero-crumbs a {
        color: var(--white);
        text-decoration: none;
      }
      .blog-hero-crumbs a:hover {
        color: var(--primary);
      }
      .blog-hero h1 {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.2;
        color: var(--white);
        margin-bottom: 20px;
        max-width: 900px;
      }
      .blog-meta-bar {
        display: flex;
        gap: 20px;
        font-size: 0.85rem;
        color: #E2E8F0;
        flex-wrap: wrap;
        border-top: 1px solid rgba(255,255,255,0.15);
        padding-top: 15px;
      }
      .blog-meta-bar i {
        color: var(--primary);
      }
      .toc-box {
        background: var(--white);
        border: 1px solid var(--border-gray);
        border-radius: 8px;
        padding: 20px;
        margin: 25px 0 35px;
      }
      .toc-box h4 {
        margin: 0 0 10px;
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--dark-green);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .toc-box ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .toc-box li {
        margin-bottom: 8px;
        font-size: 0.9rem;
      }
      .toc-box a {
        color: var(--body-text);
        text-decoration: none;
        transition: color 0.2s;
      }
      .toc-box a:hover {
        color: var(--primary);
      }
      .blog-main-content h2 {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--dark-green);
        margin-top: 40px;
        margin-bottom: 15px;
      }
      .blog-main-content h3 {
        font-size: 1.35rem;
        font-weight: 700;
        color: var(--dark-green);
        margin-top: 30px;
        margin-bottom: 12px;
      }
      .blog-main-content p {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--body-text);
        margin-bottom: 20px;
      }
      .blog-main-content ul {
        padding-left: 20px;
        margin-bottom: 20px;
      }
      .blog-main-content li {
        margin-bottom: 8px;
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .callout-box {
        background: var(--primary-light);
        border-left: 4px solid var(--primary);
        padding: 24px;
        border-radius: 0 8px 8px 0;
        margin: 30px 0;
      }
      .callout-box h4 {
        margin: 0 0 10px;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--dark-green);
      }
      .callout-box p {
        margin: 0;
        font-size: 0.92rem;
        line-height: 1.6;
      }
    </style>

    <!-- 1. HERO BANNER -->
    <section class="blog-hero">
      <div class="container">
        <div class="blog-hero-crumbs">
          <a href="/index.html">Home</a> / <a href="/blog.html">Blog</a> / Article
        </div>
        <h1>${p.title}</h1>
        <div class="blog-meta-bar">
          <span><i class="far fa-calendar-alt"></i> Published: ${p.date}</span>
          <span><i class="fas fa-user"></i> Written by Udit Gupta, CPA</span>
          <span><i class="fas fa-folder"></i> Category: Tax Guides &amp; Tips</span>
        </div>
      </div>
    </section>

    <!-- 2. CONTENT AREA & SIDEBAR -->
    <section class="section pt-0" style="padding-bottom: 40px;">
      <div class="container">
        <div class="grid-3-1">
          <div class="blog-main-content">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="${p.title}" style="border-radius:12px;margin-bottom:30px;width:100%;box-shadow:var(--shadow-sm);">
            
            <!-- Table of Contents -->
            <div class="toc-box">
              <h4>Table of Contents</h4>
              <ul>
                <li><a href="#section-1">1. Primary Filing Overview</a></li>
                <li><a href="#section-2">2. Crucial CRA Compliance Requirements</a></li>
                <li><a href="#section-3">3. Key Takeaways &amp; Next Steps</a></li>
              </ul>
            </div>

            <div id="section-1">
              ${p.content}
            </div>

            <!-- Author Box -->
            <div class="author-box" style="margin-top:50px;">
              <div class="author-avatar">U</div>
              <div>
                <div class="author-name">Udit Gupta</div>
                <div class="author-role">Founder, Tax Filings Canada</div>
                <p class="author-bio">Udit is a Chartered Professional Accountant (CPA) in Canada with years of corporate tax, bookkeeping, and advisory experience, helping entrepreneurs scale operations compliant with CRA guidelines.</p>
              </div>
            </div>
          </div>
          
          <div class="blog-sidebar">
            <div class="widget">
              <h3>Get Professional Help</h3>
              <p style="font-size:0.88rem;margin-bottom:15px;">Need expert assistance implementing these tax strategies for your business?</p>
              <a href="/contact.html" class="btn btn-primary btn-sm" style="width:100%;">Book Free Call</a>
            </div>
            <div class="widget">
              <h3>Recent Posts</h3>
              <ul>
                ${blogPosts.map(bp => `<li><a href="/blog/${bp.slug}.html">${bp.title}</a></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. WHY CHOOSE US -->
    ${getWhyChooseUsSection('Taxccount')}

    <!-- 4. RISK-FREE WORKFLOW -->
    ${getWorkflowSection()}

    <!-- 5. INDUSTRIES PARTNER -->
    ${getIndustriesGridSection()}

    <!-- 6. CLIENTS LOGO BANNER -->
    ${getClientsLogoSection()}

    <!-- 7. PRICING SECTION -->
    ${getPricingSection()}

    <!-- 8. CASE STUDIES SECTION -->
    ${getCaseStudiesSection()}

    <!-- 9. TEAM SECTION -->
    ${getTeamSection()}

    <!-- 10. FAQ SECTION -->
    ${getFaqSection('Filing', [
      { q: 'Can I file taxes in Canada completely online?', a: 'Yes. CRA allows electronic filing (EFILE) for personal T1 and corporate T2 returns through certified software packages.' },
      { q: 'What happens if I miss the filing deadline?', a: 'CRA charges a late-filing penalty of 5% of your balance owing, plus 1% for each full month that the return is late, up to 12 months.' }
    ])}

    <!-- 11. CTA BANNER -->
    ${getCtaBanner('Filing')}
  `;

  // Write to standard folder
  writePage(path.join(rootDir, 'blog', `${p.slug}.html`), p.title, p.desc, 'blog', htmlContent);

  // Re-write legacy paths
  if (p.slug === 'what-tax-forms-do-you-need-to-file-taxes-in-canada') {
    writePage(path.join(rootDir, 'blog', 'tax-forms-canada.html'), p.title, p.desc, 'blog', htmlContent);
  }
});

console.log('Hub and detail pages generated successfully!');
