/**
 * Chhipa Handblock Printroom - Main Dynamic Interactive Controller
 * Driven by Centralized Dynamic Data Engine (store-config.js)
 */

// Application State
let currentCategory = "all";
let searchQuery = "";
let currentProductQuantities = {};
let selectedProductForModal = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize Dynamic Store
  if (window.ChhipaStore) {
    await window.ChhipaStore.init();
  }

  // Initial Render of All Dynamic Sections
  renderAllDynamicSections();

  // Listen for real-time updates from admin or Google Sheets sync
  window.addEventListener("chhipa-store-updated", () => {
    renderAllDynamicSections();
  });

  // Setup Event Listeners
  initCatalogueListeners();
  initWholesaleCalculator();
  initWhatsAppAssistant();
  initMobileNavigation();
  initQuickModals();
});

/**
 * Master Dynamic Renderer: Binds 100% of store-config.js data to DOM
 */
function renderAllDynamicSections() {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  if (!store) return;

  renderBusinessContact(store.business);
  renderSwatchBanner(store.swatchBanner, store.business);
  renderWholesaleCalculatorOptions(store.wholesaleCalculator);
  renderProducts();
  renderTestimonials(store.testimonials);
}

/* ==========================================================================
   1. GLOBAL BUSINESS CONTACT & HEADER/FOOTER BINDINGS
   ========================================================================== */

function renderBusinessContact(biz) {
  if (!biz) return;

  // Announcement Bar
  setText("top-announcement-text", biz.announcement || "Direct Manufacturer Pricing • 60+ Years in Sanganer (Est. 1965) • Pan-India & Global Export");
  setText("top-operating-hours", biz.hours || "Open Daily, 9:00 AM – 8:00 PM");
  setText("top-phone-display", biz.displayPhone || "+91 90248 56205");
  setHref("top-phone-link", `tel:${biz.whatsappNumber}`);

  // Header Nav WhatsApp CTAs
  const waUrlGeneral = `https://wa.me/${biz.whatsappNumber}?text=${encodeURIComponent("Hello Chhipa Handblock Printroom, I am interested in your Sanganeri handblock fabrics.")}`;
  setHref("nav-wa-cta-desktop", waUrlGeneral);
  setHref("nav-wa-cta-mobile-icon", waUrlGeneral);
  setHref("nav-wa-cta-drawer", waUrlGeneral);
  setHref("mobile-bar-wa-btn", waUrlGeneral);

  // Drawer Info
  setText("drawer-address", biz.address);
  setText("drawer-hours", biz.hours);

  // Social Links
  setHref("nav-instagram-link", biz.instagram);
  setHref("nav-facebook-link", biz.facebook);
  setHref("drawer-instagram-link", biz.instagram);
  setHref("drawer-facebook-link", biz.facebook);
  setHref("footer-instagram-link", biz.instagram);
  setHref("footer-facebook-link", biz.facebook);

  // Workshop Visit Section
  setText("visit-address-text", biz.address);
  setText("visit-hours-text", biz.hours);
  setText("visit-phone-display", biz.displayPhone);
  setHref("visit-phone-link", `tel:${biz.whatsappNumber}`);
  setHref("visit-notify-wa-btn", `https://wa.me/${biz.whatsappNumber}?text=${encodeURIComponent("Hello Chhipa Handblock, I am planning to visit your Sanganer workshop today. Please share directions.")}`);

  // Footer Contact & Hours
  setText("footer-address-text", biz.address);
  setText("footer-phone-display", biz.displayPhone);
  setHref("footer-phone-link", `tel:${biz.whatsappNumber}`);
  setText("footer-wa-display", `WhatsApp: ${biz.displayPhone}`);
  setHref("footer-wa-link", `https://wa.me/${biz.whatsappNumber}`);
  setText("footer-hours-display", `Operating Hours: ${biz.hours}`);

  // Google Maps Directions link
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(biz.address)}`;
  setHref("visit-directions-btn", mapsSearchUrl);
}

/* ==========================================================================
   2. SANGANER SWATCH BOX BANNER
   ========================================================================== */

function renderSwatchBanner(banner, biz) {
  const container = document.getElementById("swatch-banner-container");
  if (!container) return;

  if (!banner || banner.show === false) {
    container.style.display = "none";
    return;
  }

  container.style.display = "flex";
  setText("swatch-banner-title", banner.title || "Curating a New Apparel Line? Order Our Sanganer Swatch Box.");
  setText("swatch-banner-desc", banner.description || "Receive 10 tactile fabric swatches delivered to your studio within 48 hours.");
  
  const ctaBtn = document.getElementById("swatch-banner-cta");
  if (ctaBtn) {
    const priceText = banner.price ? `₹${banner.price}` : "₹499";
    ctaBtn.innerHTML = `
      <span>${banner.ctaText || `Request Swatch Box (${priceText})`}</span>
      <svg class="w-4 h-4 fill-emerald-300" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    `;
    const waPhone = biz ? biz.whatsappNumber : "919024856205";
    const waText = encodeURIComponent(`Hello Chhipa Handblock Printroom, I would like to order the Sanganer Fabric Swatch Box (${priceText}) for my studio.`);
    ctaBtn.href = `https://wa.me/${waPhone}?text=${waText}`;
  }
}

/* ==========================================================================
   3. COLLECTIONS GRID (ALL 12 DYNAMIC PRODUCTS & OUT-OF-STOCK HANDLING)
   ========================================================================== */

function initCatalogueListeners() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("catalogue-search");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-[#1B365D]", "text-white", "shadow-md");
        b.classList.add("bg-[#F3ECE1]", "text-[#1E1E1E]");
      });
      btn.classList.remove("bg-[#F3ECE1]", "text-[#1E1E1E]");
      btn.classList.add("bg-[#1B365D]", "text-white", "shadow-md");

      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }
}

function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const products = store ? store.products : [];
  const waPhone = store && store.business ? store.business.whatsappNumber : "919024856205";

  const filtered = products.filter(item => {
    const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) ||
      (item.tag && item.tag.toLowerCase().includes(searchQuery)) ||
      (item.description && item.description.toLowerCase().includes(searchQuery)) ||
      (item.fabricSubtitle && item.fabricSubtitle.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-[#B84A39]">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h4 class="font-serif-heading text-2xl font-bold text-[#1B365D]">No textiles found matching "${searchQuery}"</h4>
        <p class="text-sm text-stone-600 mt-2">Try searching for cambric, cotton, kurti, saree, dabu, or table cover.</p>
        <button onclick="resetCatalogueFilter()" class="mt-4 px-6 py-2 bg-[#1B365D] text-white text-sm font-semibold rounded-md hover:bg-[#12243F]">
          View All Collections
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    // Initialize quantity state if missing
    if (currentProductQuantities[item.id] === undefined) {
      currentProductQuantities[item.id] = item.defaultQty || item.minOrder || 1;
    }

    const qty = currentProductQuantities[item.id];
    const itemTotal = item.price * qty;
    const unitLabel = item.isUnitMeter ? "Meters" : "Pcs";
    const isOutOfStock = (item.inStock === false) || (item.tag && item.tag.toLowerCase().includes("out of stock"));

    // Badge styling & text
    let badgeClass = item.badgeColor || "bg-[#1B365D] text-white";
    let badgeText = item.tag || "Artisan Craft";
    if (isOutOfStock) {
      badgeClass = "bg-stone-800 text-stone-200 border border-stone-600";
      badgeText = "Out of Stock";
    }

    // WhatsApp Message
    const waText = encodeURIComponent(
      `Hello Chhipa Handblock Printroom,\n` +
      `I would like to inquire about this item from your website:\n\n` +
      `• Product: ${item.title}\n` +
      `• Rate: ₹${item.price} ${item.priceUnit || '/ piece'}\n` +
      `• Requested Quantity: ${qty} ${unitLabel}\n` +
      `• Approx Total: ₹${itemTotal.toLocaleString('en-IN')}\n\n` +
      `Please let me know current availability, dispatch time, and delivery charges to my location.`
    );
    const waUrl = `https://wa.me/${waPhone}?text=${waText}`;

    // Restock message if out of stock
    const restockWaText = encodeURIComponent(
      `Hello Chhipa Handblock Printroom,\n` +
      `I am interested in ${item.title}. I see it is currently Out of Stock on your website.\n\n` +
      `Please notify me when this design or fabric is back in stock / next batch is being stamped.`
    );
    const restockWaUrl = `https://wa.me/${waPhone}?text=${restockWaText}`;

    return `
      <div class="product-card bg-white rounded-xl overflow-hidden border border-[#E8DECE] shadow-sm flex flex-col justify-between group ${isOutOfStock ? 'opacity-90' : ''}">
        <!-- Image & Badges -->
        <div class="relative overflow-hidden bg-stone-100 aspect-[4/3] product-image-container cursor-pointer" onclick="openProductModal('${item.id}')">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ${isOutOfStock ? 'grayscale-[40%]' : ''}"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'"
          />
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm ${badgeClass}">
              ${badgeText}
            </span>
          </div>
          <button 
            type="button" 
            onclick="event.stopPropagation(); openProductModal('${item.id}')"
            class="absolute bottom-3 right-3 bg-white/95 text-[#1B365D] hover:bg-[#1B365D] hover:text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-md flex items-center gap-1.5 transition-colors"
            title="View Specifications & Swatch"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Quick View
          </button>
        </div>

        <!-- Content Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-[#B84A39]">Sanganeri Craft</span>
              <span class="text-xs text-stone-600 font-medium">${item.fabricSubtitle || (item.specs && item.specs.fabric ? item.specs.fabric.split('(')[0] : 'Pure Cotton')}</span>
            </div>
            
            <h3 
              class="font-serif-heading text-lg font-bold text-[#1E1E1E] leading-snug line-clamp-2 hover:text-[#1B365D] cursor-pointer transition-colors"
              onclick="openProductModal('${item.id}')"
            >
              ${item.title}
            </h3>

            <p class="text-xs text-stone-600 mt-2 line-clamp-2">
              ${item.description || 'Authentic Sanganeri hand block printed textile, crafted in Jaipur with natural dyes.'}
            </p>

            <!-- Price Display -->
            <div class="mt-3.5 pt-3 border-t border-[#F3ECE1] flex items-baseline justify-between">
              <div>
                <span class="text-xs text-stone-600 uppercase font-medium">Wholesale Rate</span>
                <div class="flex items-baseline gap-1">
                  <span class="font-serif-heading text-2xl font-bold text-[#1B365D]">₹${item.price}</span>
                  <span class="text-xs text-stone-600 font-semibold">${item.priceUnit || '/ piece'}</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-[11px] text-stone-600 block">Est. Total (${qty} ${unitLabel})</span>
                <span class="text-sm font-bold text-[#B84A39]">₹${itemTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Quantity Stepper & Order / Out of Stock Buttons -->
          <div class="mt-4 pt-3 border-t border-[#F3ECE1]">
            ${!isOutOfStock ? `
              <div class="flex items-center justify-between mb-3 bg-[#FAF6F0] p-1.5 rounded-lg border border-[#E8DECE]">
                <span class="text-xs font-medium text-stone-700 ml-2">Order Quantity:</span>
                <div class="flex items-center gap-1">
                  <button 
                    type="button"
                    onclick="updateProductQty('${item.id}', -${item.step || 1})"
                    class="w-7 h-7 rounded bg-white hover:bg-stone-200 border border-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors"
                    aria-label="Decrease quantity"
                  >−</button>
                  <span class="w-12 text-center text-xs font-bold text-[#1B365D]">${qty} ${unitLabel}</span>
                  <button 
                    type="button"
                    onclick="updateProductQty('${item.id}', ${item.step || 1})"
                    class="w-7 h-7 rounded bg-white hover:bg-stone-200 border border-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors"
                    aria-label="Increase quantity"
                  >+</button>
                </div>
              </div>

              <!-- Active WhatsApp Order Button -->
              <a 
                href="${waUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 bg-[#1B365D] hover:bg-[#12243F] text-white py-2.5 px-4 rounded-lg font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200"
              >
                <svg class="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Order / Inquire via WhatsApp</span>
              </a>
            ` : `
              <div class="space-y-2">
                <div class="text-center py-1.5 px-3 rounded-lg bg-stone-100 text-stone-600 text-xs font-semibold">
                  Currently Out of Stock in Sanganer Workshop
                </div>
                <!-- Disabled/Restock WhatsApp Button -->
                <a 
                  href="${restockWaUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-2 bg-stone-700 hover:bg-stone-800 text-white py-2 px-4 rounded-lg font-semibold text-xs tracking-wide transition-colors"
                >
                  <svg class="w-3.5 h-3.5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span>Inquire for Restock / Next Batch</span>
                </a>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function updateProductQty(productId, delta) {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const product = store ? store.products.find(p => p.id === productId) : null;
  if (!product) return;

  const current = currentProductQuantities[productId] || product.defaultQty || product.minOrder || 1;
  const minRequired = product.minOrder || 1;
  const next = current + delta;

  if (next >= minRequired) {
    currentProductQuantities[productId] = next;
    renderProducts();
  } else {
    showToast(`Minimum order for this product is ${minRequired} ${product.isUnitMeter ? 'meters' : 'pcs'}`);
  }
}

function resetCatalogueFilter() {
  currentCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("catalogue-search");
  if (searchInput) searchInput.value = "";

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    if (btn.getAttribute("data-category") === "all") {
      btn.classList.add("bg-[#1B365D]", "text-white", "shadow-md");
      btn.classList.remove("bg-[#F3ECE1]", "text-[#1E1E1E]");
    } else {
      btn.classList.remove("bg-[#1B365D]", "text-white", "shadow-md");
      btn.classList.add("bg-[#F3ECE1]", "text-[#1E1E1E]");
    }
  });

  renderProducts();
}

/* ==========================================================================
   4. B2B WHOLESALE CALCULATOR ENGINE (DYNAMIC CONFIGURATION)
   ========================================================================== */

function renderWholesaleCalculatorOptions(calcConfig) {
  const fabricSelect = document.getElementById("calc-fabric");
  if (!fabricSelect || !calcConfig || !Array.isArray(calcConfig.fabrics)) return;

  const selectedVal = fabricSelect.value;
  fabricSelect.innerHTML = calcConfig.fabrics.map(f => {
    return `<option value="${f.id}">
      ${f.name} (Base ₹${f.baseRate} / m) — ${f.subtitle || ''}
    </option>`;
  }).join("");

  if (selectedVal && calcConfig.fabrics.some(f => f.id === selectedVal)) {
    fabricSelect.value = selectedVal;
  }

  // Update Tier explanatory boxes dynamically
  if (Array.isArray(calcConfig.tiers) && calcConfig.tiers.length >= 3) {
    const t1 = calcConfig.tiers[0];
    const t2 = calcConfig.tiers[1];
    const t3 = calcConfig.tiers[2];

    setText("calc-tier-1-range", `${t1.minMeters}m – ${t1.maxMeters}m`);
    setText("calc-tier-1-pct", `${t1.discountPercent}% Off`);

    setText("calc-tier-2-range", `${t2.minMeters}m – ${t2.maxMeters}m`);
    setText("calc-tier-2-pct", `${t2.discountPercent}% Off`);

    setText("calc-tier-3-range", `${t3.minMeters}m+`);
    setText("calc-tier-3-pct", `${t3.discountPercent}% Off`);
  }

  // Update Custom surcharge label if present
  setText("calc-surcharge-badge", `+₹${calcConfig.customSurcharge || 15}/m`);
  
  updateCalculatorResults();
}

function initWholesaleCalculator() {
  const fabricSelect = document.getElementById("calc-fabric");
  const meterSlider = document.getElementById("calc-meters");
  const meterInput = document.getElementById("calc-meters-input");
  const customToggle = document.getElementById("calc-custom-toggle");
  const quoteWaBtn = document.getElementById("calc-whatsapp-btn");
  const copyBtn = document.getElementById("calc-copy-btn");
  const chipButtons = document.querySelectorAll(".calc-meter-chip");

  if (!fabricSelect || !meterSlider || !meterInput) return;

  meterSlider.addEventListener("input", (e) => {
    meterInput.value = e.target.value;
    updateCalculatorResults();
  });

  meterInput.addEventListener("input", (e) => {
    let val = parseInt(e.target.value) || 20;
    if (val < 20) val = 20;
    if (val > 5000) val = 5000;
    meterSlider.value = val;
    updateCalculatorResults();
  });

  fabricSelect.addEventListener("change", updateCalculatorResults);

  if (customToggle) {
    customToggle.addEventListener("change", updateCalculatorResults);
  }

  chipButtons.forEach(chip => {
    chip.addEventListener("click", () => {
      const val = parseInt(chip.getAttribute("data-meters"));
      meterSlider.value = val;
      meterInput.value = val;
      chipButtons.forEach(c => c.classList.remove("bg-[#1B365D]", "text-white"));
      chip.classList.add("bg-[#1B365D]", "text-white");
      updateCalculatorResults();
    });
  });

  if (quoteWaBtn) {
    quoteWaBtn.addEventListener("click", sendWholesaleQuoteToWhatsApp);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", copyWholesaleQuoteSummary);
  }

  updateCalculatorResults();
}

function updateCalculatorResults() {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const calcConfig = store ? store.wholesaleCalculator : null;
  if (!calcConfig) return;

  const fabricSelect = document.getElementById("calc-fabric");
  const fabricKey = fabricSelect ? fabricSelect.value : "cambric";
  const meters = parseInt(document.getElementById("calc-meters-input")?.value) || 20;
  const isCustom = document.getElementById("calc-custom-toggle")?.checked || false;

  const fabricInfo = calcConfig.fabrics.find(f => f.id === fabricKey) || calcConfig.fabrics[0] || {
    name: "60x60 Cambric Cotton",
    baseRate: 120,
    weightPerM: 0.11
  };

  const surcharge = isCustom ? (calcConfig.customSurcharge || 15) : 0;
  let baseRate = fabricInfo.baseRate + surcharge;

  // Calculate volume discount from dynamic tiers
  let discountPercent = 0;
  let tierLabel = "Standard Wholesale (20m - 99m)";
  let tierBadge = "bg-stone-200 text-stone-800";

  if (Array.isArray(calcConfig.tiers)) {
    // Sort descending by minMeters to match highest qualifying tier first
    const sortedTiers = [...calcConfig.tiers].sort((a, b) => b.minMeters - a.minMeters);
    for (const tier of sortedTiers) {
      if (meters >= tier.minMeters) {
        discountPercent = tier.discountPercent;
        tierLabel = tier.label || `${tier.minMeters}m+ Tier • ${tier.discountPercent}% Off`;
        tierBadge = discountPercent >= 18 
          ? "bg-emerald-100 text-emerald-800 border-emerald-300"
          : (discountPercent >= 10 ? "bg-blue-100 text-blue-800 border-blue-300" : "bg-amber-100 text-amber-800 border-amber-300");
        break;
      }
    }
  }

  const discountAmountPerMeter = (baseRate * discountPercent) / 100;
  const netRatePerMeter = baseRate - discountAmountPerMeter;
  const subtotalPrice = netRatePerMeter * meters;
  const originalTotalPrice = baseRate * meters;
  const totalSavings = originalTotalPrice - subtotalPrice;

  // Dispatch timeline calculation
  let timeline = isCustom 
    ? "7 – 10 Working Days (Lab Dips & Custom Stamping)" 
    : (meters > 500 ? "4 – 6 Working Days" : "2 – 3 Working Days (Ready Stock Rolls)");
  let estWeightKg = Math.round(meters * (fabricInfo.weightPerM || 0.11) * 10) / 10;

  // Update UI Elements
  setText("res-fabric-name", fabricInfo.name);
  setText("res-base-rate", `₹${baseRate.toFixed(2)}/m`);
  setText("res-discount-pct", `${discountPercent}%`);
  setText("res-net-rate", `₹${netRatePerMeter.toFixed(2)}`);
  setText("res-total-meters", `${meters} meters`);
  setText("res-total-price", `₹${Math.round(subtotalPrice).toLocaleString('en-IN')}`);
  setText("res-savings", `You Save ₹${Math.round(totalSavings).toLocaleString('en-IN')}`);
  setText("res-timeline", timeline);
  setText("res-weight", `Approx. ${estWeightKg} kg`);

  // Update Tier badge
  const tierEl = document.getElementById("res-tier-badge");
  if (tierEl) {
    tierEl.className = `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${tierBadge}`;
    tierEl.innerHTML = `
      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      ${tierLabel}
    `;
  }

  // Update Custom Mode warning/status
  const customNotice = document.getElementById("custom-production-notice");
  if (customNotice) {
    customNotice.style.display = isCustom ? "block" : "none";
  }
}

function sendWholesaleQuoteToWhatsApp() {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const calcConfig = store ? store.wholesaleCalculator : null;
  const waPhone = store && store.business ? store.business.whatsappNumber : "919024856205";
  if (!calcConfig) return;

  const fabricKey = document.getElementById("calc-fabric")?.value || "cambric";
  const meters = parseInt(document.getElementById("calc-meters-input")?.value) || 20;
  const isCustom = document.getElementById("calc-custom-toggle")?.checked || false;

  const fabricInfo = calcConfig.fabrics.find(f => f.id === fabricKey) || calcConfig.fabrics[0];
  const surcharge = isCustom ? (calcConfig.customSurcharge || 15) : 0;
  let baseRate = fabricInfo.baseRate + surcharge;

  let discountPercent = 0;
  if (Array.isArray(calcConfig.tiers)) {
    const sortedTiers = [...calcConfig.tiers].sort((a, b) => b.minMeters - a.minMeters);
    for (const tier of sortedTiers) {
      if (meters >= tier.minMeters) {
        discountPercent = tier.discountPercent;
        break;
      }
    }
  }

  const netRate = baseRate * (1 - discountPercent / 100);
  const totalVal = Math.round(netRate * meters);
  const timeline = isCustom ? "7-10 Days (Custom Block/Color)" : (meters > 500 ? "4-6 Days" : "2-3 Days");

  const message = 
    `Namaste Chhipa Handblock Team,\n` +
    `I generated this B2B Wholesale Yardage Quote on your website:\n\n` +
    `📌 *Wholesale Order Estimate*\n` +
    `• Fabric Base: ${fabricInfo.name}\n` +
    `• Quantity: ${meters} meters\n` +
    `• Production Mode: ${isCustom ? `Custom Block / Pantone Matching (+₹${surcharge}/m)` : 'Ready Stock Designs'}\n` +
    `• Tier Discount: ${discountPercent}% applied\n` +
    `• Net Wholesale Rate: ₹${netRate.toFixed(2)} / meter\n` +
    `• Estimated Order Value: ₹${totalVal.toLocaleString('en-IN')}\n` +
    `• Est. Dispatch: ${timeline}\n\n` +
    `Please share your current fabric swatch catalogue and confirm current running stock.`;

  const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function copyWholesaleQuoteSummary() {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const phone = store && store.business ? store.business.displayPhone : "+91 90248 56205";

  const fabricName = document.getElementById("res-fabric-name")?.innerText || "";
  const meters = document.getElementById("res-total-meters")?.innerText || "";
  const netRate = document.getElementById("res-net-rate")?.innerText || "";
  const totalPrice = document.getElementById("res-total-price")?.innerText || "";
  const timeline = document.getElementById("res-timeline")?.innerText || "";

  const textToCopy = `Chhipa Handblock Printroom Wholesale Quote\nFabric: ${fabricName}\nQuantity: ${meters}\nNet Rate: ${netRate}/m\nEstimated Total: ${totalPrice}\nTimeline: ${timeline}\nContact: ${phone} | Sanganer, Jaipur`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast("Wholesale quote copied to clipboard!");
  }).catch(() => {
    showToast("Quote details ready to share!");
  });
}

/* ==========================================================================
   5. BUYER TESTIMONIALS (DYNAMIC RENDERING)
   ========================================================================== */

function renderTestimonials(testimonials) {
  const container = document.getElementById("testimonials-container");
  if (!container || !Array.isArray(testimonials)) return;

  container.innerHTML = testimonials.map(item => {
    const starString = "★".repeat(item.stars || 5);
    return `
      <div class="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DECE] shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-amber-500 mb-2 font-bold text-sm tracking-wider">
            ${starString}
          </div>
          <p class="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
            "${item.quote}"
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-[#E8DECE] flex items-center justify-between">
          <div>
            <h5 class="text-xs font-bold text-stone-900">${item.name}</h5>
            <span class="text-[11px] text-stone-500">${item.role}</span>
          </div>
          <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">${item.badge || 'Verified Buyer'}</span>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   6. FLOATING SMART WHATSAPP ASSISTANT WIDGET
   ========================================================================== */

function initWhatsAppAssistant() {
  const toggleBtn = document.getElementById("floating-wa-btn");
  const widgetCard = document.getElementById("wa-widget-card");
  const closeBtn = document.getElementById("wa-widget-close");
  const customInput = document.getElementById("wa-custom-input");
  const customSubmitBtn = document.getElementById("wa-custom-submit");

  if (!toggleBtn || !widgetCard) return;

  toggleBtn.addEventListener("click", () => {
    const isHidden = widgetCard.classList.contains("hidden");
    if (isHidden) {
      widgetCard.classList.remove("hidden");
      widgetCard.classList.add("modal-enter");
      if (customInput) customInput.focus();
    } else {
      widgetCard.classList.add("hidden");
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      widgetCard.classList.add("hidden");
    });
  }

  document.addEventListener("click", (e) => {
    if (!widgetCard.contains(e.target) && !toggleBtn.contains(e.target)) {
      widgetCard.classList.add("hidden");
    }
  });

  if (customSubmitBtn && customInput) {
    const handleSend = () => {
      const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
      const waPhone = store && store.business ? store.business.whatsappNumber : "919024856205";

      const query = customInput.value.trim();
      const text = query ? query : "Hello Chhipa Handblock Printroom, I would like to inquire about your Sanganeri hand block prints.";
      const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
      customInput.value = "";
      widgetCard.classList.add("hidden");
    };

    customSubmitBtn.addEventListener("click", handleSend);
    customInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSend();
    });
  }
}

window.sendWhatsAppChip = function(type) {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const waPhone = store && store.business ? store.business.whatsappNumber : "919024856205";
  const address = store && store.business ? store.business.address : "Plot No. 9, Miya Bajaj Gali, Dinesh Colony, Sanganer, Jaipur";

  let message = "";
  switch(type) {
    case "wholesale":
      message = "Hello Chhipa Handblock Printroom, I am interested in bulk wholesale fabric rates for my boutique/brand. Please share your wholesale price list and catalog.";
      break;
    case "catalogue":
      message = "Hello Chhipa Handblock, please send me your latest PDF design catalogue, fresh arrivals, and swatch book details.";
      break;
    case "retail":
      message = "Hello Chhipa Handblock, I would like to purchase retail handblock suit sets / sarees / kurtis for personal use. Please share what is ready in stock.";
      break;
    case "visit":
      message = `Hello Chhipa Handblock, I am planning to visit your Sanganer workshop at ${address}. Please share visitor timings and landmarks.`;
      break;
    default:
      message = "Hello Chhipa Handblock Printroom, I would like to connect regarding your Sanganeri hand block prints.";
  }

  const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  const widgetCard = document.getElementById("wa-widget-card");
  if (widgetCard) widgetCard.classList.add("hidden");
};

/* ==========================================================================
   7. QUICK VIEW MODAL
   ========================================================================== */

function initQuickModals() {
  const modalBackdrop = document.getElementById("product-modal");
  const modalClose = document.getElementById("modal-close-btn");

  if (!modalBackdrop) return;

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalBackdrop.classList.add("hidden");
    });
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalBackdrop.classList.add("hidden");
      const widgetCard = document.getElementById("wa-widget-card");
      if (widgetCard) widgetCard.classList.add("hidden");
    }
  });
}

window.openProductModal = function(productId) {
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const products = store ? store.products : [];
  const item = products.find(p => p.id === productId);
  if (!item) return;

  selectedProductForModal = item;
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  const currentQty = currentProductQuantities[item.id] || item.defaultQty || item.minOrder || 1;
  const isOutOfStock = (item.inStock === false) || (item.tag && item.tag.toLowerCase().includes("out of stock"));

  // Populate Modal Fields
  const imgEl = document.getElementById("modal-img");
  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.title;
  }

  setText("modal-title", item.title);
  setText("modal-tag", isOutOfStock ? "Out of Stock" : (item.tag || "Artisan Edition"));
  setText("modal-desc", item.description || "Authentic Sanganeri hand block printed item.");
  setText("modal-price", `₹${item.price} ${item.priceUnit || '/ piece'}`);

  // Build Specs Table
  const specsContainer = document.getElementById("modal-specs");
  if (specsContainer && item.specs) {
    let specRows = "";
    for (const [key, val] of Object.entries(item.specs)) {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      specRows += `
        <div class="py-1.5 flex justify-between border-b border-stone-200 text-xs">
          <span class="font-medium text-stone-500">${formattedKey}:</span>
          <span class="font-semibold text-stone-900 text-right max-w-[65%]">${val}</span>
        </div>
      `;
    }
    specsContainer.innerHTML = specRows;
  }

  // Update modal quantity input
  const modalQtyInput = document.getElementById("modal-qty-input");
  if (modalQtyInput) {
    modalQtyInput.value = currentQty;
  }
  updateModalWhatsAppLink();

  modal.classList.remove("hidden");
};

window.updateModalQty = function(delta) {
  if (!selectedProductForModal) return;
  const input = document.getElementById("modal-qty-input");
  if (!input) return;

  const minRequired = selectedProductForModal.minOrder || 1;
  let current = parseInt(input.value) || minRequired;
  let next = current + delta;
  if (next < minRequired) {
    showToast(`Minimum order is ${minRequired} ${selectedProductForModal.isUnitMeter ? 'meters' : 'pcs'}`);
    return;
  }
  input.value = next;
  currentProductQuantities[selectedProductForModal.id] = next;
  updateModalWhatsAppLink();
  renderProducts();
};

function updateModalWhatsAppLink() {
  if (!selectedProductForModal) return;
  const store = window.ChhipaStore ? window.ChhipaStore.get() : null;
  const waPhone = store && store.business ? store.business.whatsappNumber : "919024856205";

  const input = document.getElementById("modal-qty-input");
  const qty = parseInt(input?.value) || selectedProductForModal.defaultQty || selectedProductForModal.minOrder || 1;
  const unitLabel = selectedProductForModal.isUnitMeter ? "Meters" : "Pcs";
  const total = selectedProductForModal.price * qty;
  const isOutOfStock = (selectedProductForModal.inStock === false) || (selectedProductForModal.tag && selectedProductForModal.tag.toLowerCase().includes("out of stock"));

  const orderBtn = document.getElementById("modal-order-btn");
  if (!orderBtn) return;

  if (isOutOfStock) {
    orderBtn.className = "w-full inline-flex items-center justify-center gap-2 bg-stone-700 hover:bg-stone-800 text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all";
    orderBtn.innerHTML = `
      <svg class="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span>Inquire for Restock / Next Batch</span>
    `;
    const restockText = encodeURIComponent(
      `Hello Chhipa Handblock Printroom,\n` +
      `I would like to inquire about the restocking schedule for: ${selectedProductForModal.title}.\n` +
      `Please let me know when this will be available again.`
    );
    orderBtn.href = `https://wa.me/${waPhone}?text=${restockText}`;
  } else {
    orderBtn.className = "w-full inline-flex items-center justify-center gap-2 bg-[#1B365D] hover:bg-[#12243F] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-all";
    orderBtn.innerHTML = `
      <svg class="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span>Order via WhatsApp Now</span>
    `;
    const waText = encodeURIComponent(
      `Hello Chhipa Handblock Printroom,\n` +
      `I am looking at ${selectedProductForModal.title} on your website.\n\n` +
      `• Product: ${selectedProductForModal.title}\n` +
      `• Rate: ₹${selectedProductForModal.price} ${selectedProductForModal.priceUnit || '/ piece'}\n` +
      `• Quantity: ${qty} ${unitLabel}\n` +
      `• Approx Total: ₹${total.toLocaleString('en-IN')}\n\n` +
      `Please share current stock availability, color options, and dispatch timeline.`
    );
    orderBtn.href = `https://wa.me/${waPhone}?text=${waText}`;
  }
}

/* ==========================================================================
   8. MOBILE NAVIGATION & DRAWER
   ========================================================================== */

function initMobileNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const closeDrawerBtn = document.getElementById("mobile-drawer-close");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileDrawer) return;

  menuBtn.addEventListener("click", () => {
    mobileDrawer.classList.remove("translate-x-full");
    document.body.classList.add("overflow-hidden");
  });

  const closeDrawer = () => {
    mobileDrawer.classList.add("translate-x-full");
    document.body.classList.remove("overflow-hidden");
  };

  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* ==========================================================================
   9. UTILITY HELPERS
   ========================================================================== */

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined && text !== null) el.innerText = text;
}

function setHref(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}

function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#1B365D] text-white px-5 py-2.5 rounded-full shadow-2xl text-xs font-semibold flex items-center gap-2 transition-opacity duration-300 pointer-events-none opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>${message}</span>
  `;
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
  }, 2600);
}
