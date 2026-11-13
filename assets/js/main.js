/**
 * Chhipa Handblock Printroom - Main Interactive JavaScript
 * Heritage Sanganeri Hand Block Print Manufacturer & Wholesaler (Est. 1965)
 * Direct WhatsApp: +919024856205
 */

// Global Business Configuration
const BUSINESS_CONFIG = {
  name: "Chhipa Handblock Printroom",
  tagline: "Hand Block Printroom Since 1965 — Living Legacy of Pioneers in Sanganeri Hand Block Printing",
  whatsappNumber: "919024856205",
  displayPhone: "+91 90248 56205",
  address: "Plot No. 9, Miya Bajaj Gali, Near Kanwar Ka Bag, Dinesh Colony, Sanganer, Jaipur, Rajasthan 302029",
  hours: "Open Daily, 9:00 AM – 8:00 PM",
  instagram: "https://instagram.com/chhipahandblockprintroom",
  facebook: "https://facebook.com/chhipahandblockprintroom"
};

// Realistic authentic product catalogue data
const PRODUCTS = [
  {
    id: "fabric-6060-cotton",
    title: "Sanganeri Hand Block Print 60x60 Cotton Fabric",
    category: "running-fabrics",
    price: 120,
    priceUnit: "/ meter",
    tag: "Best for Boutiques | MOQ 20m",
    isUnitMeter: true,
    minOrder: 20,
    step: 5,
    defaultQty: 20,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-blue-900 text-amber-100",
    specs: {
      fabric: "100% Pure Cambric Cotton (60s x 60s)",
      width: "44 inches (112 cm)",
      gsm: "85 GSM (Lightweight, Breathable)",
      technique: "Traditional Hand Block Printing (Rekh & Datta blocks)",
      dyes: "Azo-free Natural & Rapid Fast Dyes",
      usage: "Ideal for Kurtis, Tunics, Men's Shirts, Dresses, & Babywear",
      moq: "20 meters per colorway / design"
    },
    description: "Our signature Sanganeri print crafted on high-density 60x60 cambric cotton. Features intricate Mughal floral booti stamped by master artisans in Sanganer using hand-carved teakwood blocks. Washed in natural river water for enduring colorfastness."
  },
  {
    id: "apparel-waffle-kurti",
    title: "Hand Block Printed Waffle Cotton Kurti / Dress",
    category: "apparel",
    price: 750,
    priceUnit: "/ piece",
    tag: "Ready to Wear",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-emerald-900 text-emerald-100",
    specs: {
      fabric: "100% Textured Waffle Cotton (Zero Shrinkage)",
      sizes: "XS, S, M, L, XL, XXL, 3XL (Custom sizing for bulk)",
      technique: "Dabu Indigo Mud-Resist Handblock Stamping",
      details: "Artisan wooden coconut shell buttons, side pockets",
      washCare: "Cold gentle machine wash with mild detergent",
      moq: "1 pc for retail | 15 pcs assorted sizes for wholesale"
    },
    description: "Contemporary comfort meets Sanganeri heritage. Crafted in breathable waffle honeycomb cotton with natural indigo geometric block printing. Features a relaxed silhouette, Mandarin collar, and functional wooden buttons."
  },
  {
    id: "apparel-cotton-saree",
    title: "Hand Block Printed Cotton Saree (Indigo & Black)",
    category: "apparel",
    price: 800,
    priceUnit: "/ saree",
    tag: "Artisan Edition",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-amber-900 text-amber-100",
    specs: {
      fabric: "100% Fine Chanderi Mulmul Cotton",
      length: "6.5 Meters (Includes 0.8m running blouse piece)",
      technique: "Syahi-Begar & Natural Indigo Block Printing",
      pallu: "Elaborate Tree of Life / Mor Boota Pallu with Zari Border",
      feel: "Ultra-drapey, feather-light, becomes softer with each wash",
      moq: "1 pc for retail | 10 pcs assorted for boutiques"
    },
    description: "An authentic heirloom piece. Hand-stamped in deep natural Indigo and Syahi iron-black on ultra-soft Mulmul cotton. The saree displays rhythmic floral jal in the body and a dramatic multi-block printed border and pallu."
  },
  {
    id: "apparel-maternity-gown",
    title: "Maternity & Feeding Hand Block Gown",
    category: "apparel",
    price: 450,
    priceUnit: "/ piece",
    tag: "Bestseller",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-rose-900 text-rose-100",
    specs: {
      fabric: "100% Breathable Malmal Cotton (Chemical-Free)",
      features: "Concealed dual side zippers for easy breastfeeding",
      silhouette: "Empire waist with adjustable drawstring back tie",
      sizes: "Free Size (Comfortably fits Bust 34\" to 44\")",
      dyes: "Skin-safe certified vegetable & non-toxic dyes",
      moq: "1 pc for retail | 25 pcs for wholesale retailers"
    },
    description: "Designed for new and expecting mothers who value natural softness. Made with airy Sanganeri printed mulmul that stays gentle on sensitive skin. Equipped with discrete nursing zippers and an adjustable waist for all trimesters."
  },
  {
    id: "home-floral-tablecover",
    title: "Floral Sanganeri Table Cover / Single Bed Sheet",
    category: "home-linen",
    price: 500,
    priceUnit: "/ piece",
    tag: "Home Decor",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-teal-900 text-teal-100",
    specs: {
      dimensions: "60 x 90 inches (150 x 225 cm)",
      fabric: "Heavy Sheeting 20s Cotton (210 GSM)",
      border: "Triple-layer hand-stamped Sanganeri bel border",
      multiuse: "Suitable as 6-seater dining table cover, single bed sheet, or sofa throw",
      washCare: "Colorfast guaranteed, machine washable",
      moq: "1 pc for retail | 20 pcs for export/wholesalers"
    },
    description: "Transform any dining or living room with authentic Rajasthani royal charm. Stamped on heavy count cotton that lays flat without slipping. Features centered Mughal floral medallions framed by crisp architectural border patterns."
  },
  {
    id: "home-quilted-tote",
    title: "Handmade Quilted Floral Tote Bag",
    category: "home-linen",
    price: 450,
    priceUnit: "/ piece",
    tag: "Export Favorite",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-purple-900 text-purple-100",
    specs: {
      dimensions: "16\" Height x 18\" Width x 4\" Gusset Bottom",
      construction: "Triple-layer hand-quilted with cotton batting inside",
      handles: "12\" Drop reinforced padded shoulder straps",
      pockets: "Zippered interior pocket + 2 slip organizers",
      lining: "Reversible complementary block print cotton lining",
      moq: "1 pc for retail | 30 pcs assorted for export buyers"
    },
    description: "Our viral export tote loved by ethical boutiques in Europe, USA, and Australia. Crafted from sturdy hand-block printed cotton and hand-quilted with meticulous parallel stitches. Machine washable, foldable, and durable for everyday use."
  },
  {
    id: "fabric-dabu-indigo",
    title: "Natural Dabu Mud-Resist Indigo Cotton Fabric",
    category: "running-fabrics",
    price: 165,
    priceUnit: "/ meter",
    tag: "Heritage Craft | MOQ 20m",
    isUnitMeter: true,
    minOrder: 20,
    step: 5,
    defaultQty: 20,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-indigo-900 text-indigo-100",
    specs: {
      fabric: "100% Pure Cotton Sheeting (40s count)",
      width: "44 inches",
      process: "Patan mud-resist hand stamping & multi-dip fermented Indigo vats",
      character: "Organic crackle lines & earthy scent characteristic of true Dabu",
      color: "Deep Natural Mineral Indigo with ivory resist motifs",
      moq: "20 meters per design"
    },
    description: "Traditional mud-resist printing using natural clay, gum, and lime (*Dabu*). Hand-dipped into our 8-foot-deep indigo ground vats in Sanganer. Yields a rich, organic indigo blue with signature artisan crackle textures."
  },
  {
    id: "fabric-mulmul-cotton",
    title: "Pure Mulmul Cotton Running Fabric (Jaipuri Floral Buti)",
    category: "running-fabrics",
    price: 135,
    priceUnit: "/ meter",
    tag: "Summer Essential | MOQ 20m",
    isUnitMeter: true,
    minOrder: 20,
    step: 5,
    defaultQty: 20,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-cyan-900 text-cyan-100",
    specs: {
      fabric: "100% Gossamer Mulmul Cotton (Super Fine 100s yarn)",
      width: "44 inches",
      weight: "65 GSM (Cloud-soft featherweight)",
      dyes: "Safe vegetable & eco-reactive dyes",
      application: "Flowing Anarkalis, summer resortwear, dupattas, and scarves",
      moq: "20 meters per print"
    },
    description: "Renowned for its sheer, feather-soft drape. Ideal for warm climates and luxury summer collections. Stamped with delicate marigold and jasmine sprigs using heirloom Sanganeri wooden blocks."
  },
  {
    id: "apparel-chanderi-suit",
    title: "Hand Block Chanderi Silk Blend Suit Set with Dupatta",
    category: "apparel",
    price: 1350,
    priceUnit: "/ set (3-Piece)",
    tag: "Festive Collection",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-yellow-900 text-yellow-100",
    specs: {
      kurta: "2.5 Meters Pure Chanderi Silk Blend (with subtle gold zari border)",
      bottom: "2.5 Meters Soft 60x60 Cambric Cotton solid/printed",
      dupatta: "2.5 Meters Chanderi Silk with traditional Sanganeri palla",
      craft: "Gold Foil + Madder Red Sanganeri Hand Block Printing",
      moq: "1 set for retail | 12 sets assorted for boutiques"
    },
    description: "An opulent 3-piece unstitched festive suit fabric set. Features rich Chanderi silk fabric with subtle zari weaves, hand-stamped with intricate gold and madder terracotta motifs. Comes with a matching lightweight statement dupatta."
  },
  {
    id: "apparel-kimono-robe",
    title: "Artisan Hand-Block Cotton Kimono Robe",
    category: "apparel",
    price: 850,
    priceUnit: "/ piece",
    tag: "Export Bestseller",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-blue-800 text-blue-100",
    specs: {
      fabric: "100% Breathable Cambric Cotton",
      length: "48 inches (Midi / Full Length)",
      features: "Wide kimono sleeves, removable matching waist sash, 2 front pockets",
      size: "One-Size-Fits-Most (US 2 - 16 / UK 6 - 20)",
      moq: "1 pc for retail | 20 pcs assorted prints for wholesale"
    },
    description: "Loved by boutique resorts and luxury loungewear brands worldwide. Combining classic Japanese kimono proportions with authentic Sanganeri botanical block prints. Perfect for morning coffee, poolside lounging, or evening relaxation."
  },
  {
    id: "home-canvas-cushions",
    title: "Hand-Block Cotton Canvas Cushion Covers (Set of 2)",
    category: "home-linen",
    price: 380,
    priceUnit: "/ pair (2 pcs)",
    tag: "Home Decor",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-stone-800 text-stone-100",
    specs: {
      size: "16 x 16 inches (40 x 40 cm)",
      fabric: "Heavy 280 GSM Pure Cotton Duck Canvas",
      closure: "Hidden premium YKK zippered flap on back",
      finishing: "Pre-shrunk, color-locked, piped edges",
      moq: "1 pair for retail | 25 pairs for wholesale"
    },
    description: "Heavyweight architectural block print cushion covers that elevate any sofa or accent chair. Printed on dense canvas using earth-derived dyes with geometric Jaipuri jaal borders. Tailored with concealed zipper closures."
  },
  {
    id: "home-jaipuri-razai",
    title: "Pure Mulmul Hand-Quilted Jaipuri Razai (Single)",
    category: "home-linen",
    price: 1450,
    priceUnit: "/ quilt",
    tag: "Artisan Edition",
    isUnitMeter: false,
    minOrder: 1,
    step: 1,
    defaultQty: 1,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    badgeColor: "bg-red-900 text-red-100",
    specs: {
      size: "Single: 60 x 90 inches (Double available on request)",
      filling: "100% Pure Carded Surgical Cotton (Super warm, yet only 800g)",
      outer: "Double layer sheer Mulmul cotton with Sanganeri booti",
      quilting: "Fine artisanal hand 'Tagaai' running stitches throughout",
      moq: "1 pc for retail | 10 pcs for wholesale"
    },
    description: "The world-famous Jaipuri cotton quilt. Masterfully carded by traditional 'Dhunia' artisans, layered inside cloud-soft mulmul, and hand-quilted with microscopic stitches. Unbelievably lightweight yet delightfully warm for AC or winter comfort."
  }
];

// Wholesale Calculator Configuration
const FABRIC_RATES = {
  cambric: { name: "60x60 Cambric Cotton", baseRate: 120, gsm: 85, weightPerM: 0.11 },
  mulmul: { name: "Mulmul Cotton", baseRate: 135, gsm: 65, weightPerM: 0.08 },
  chanderi: { name: "Chanderi Silk Blend", baseRate: 260, gsm: 95, weightPerM: 0.12 },
  dabu: { name: "Natural Indigo Dabu Print", baseRate: 165, gsm: 110, weightPerM: 0.14 },
  sheeting: { name: "Heavy Sheeting (Home Decor)", baseRate: 180, gsm: 210, weightPerM: 0.23 }
};

// Application State
let currentCategory = "all";
let searchQuery = "";
let currentProductQuantities = {};
let selectedProductForModal = null;

// Initialize quantities
PRODUCTS.forEach(p => {
  currentProductQuantities[p.id] = p.defaultQty;
});

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  initCatalogue();
  initWholesaleCalculator();
  initWhatsAppAssistant();
  initMobileNavigation();
  initQuickModals();
});

/* ==========================================================================
   1. CATALOGUE & FILTERING SYSTEM
   ========================================================================== */

function initCatalogue() {
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

  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  const filtered = PRODUCTS.filter(item => {
    const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) ||
      item.tag.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);
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
        <p class="text-sm text-stone-600 mt-2">Try searching for cotton, kurti, saree, dabu, or table cover.</p>
        <button onclick="resetCatalogueFilter()" class="mt-4 px-6 py-2 bg-[#1B365D] text-white text-sm font-semibold rounded-md hover:bg-[#12243F]">
          View All Collections
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const qty = currentProductQuantities[item.id] || item.defaultQty;
    const itemTotal = item.price * qty;
    const unitLabel = item.isUnitMeter ? "Meters" : "Pcs";

    // Build pre-filled WhatsApp message URL
    const waText = encodeURIComponent(
      `Hello Chhipa Handblock Printroom,\n` +
      `I would like to inquire about this item from your website:\n\n` +
      `• Product: ${item.title}\n` +
      `• Rate: ₹${item.price} ${item.priceUnit}\n` +
      `• Requested Quantity: ${qty} ${unitLabel}\n` +
      `• Approx Total: ₹${itemTotal.toLocaleString('en-IN')}\n\n` +
      `Please let me know current availability, dispatch time, and delivery charges to my location.`
    );
    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${waText}`;

    return `
      <div class="product-card bg-white rounded-xl overflow-hidden border border-[#E8DECE] shadow-sm flex flex-col justify-between group">
        <!-- Image & Badges -->
        <div class="relative overflow-hidden bg-stone-100 aspect-[4/3] product-image-container cursor-pointer" onclick="openProductModal('${item.id}')">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'"
          />
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm ${item.badgeColor}">
              ${item.tag}
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
              <span class="text-xs text-stone-600 font-medium">${item.specs.fabric ? item.specs.fabric.split('(')[0] : 'Pure Cotton'}</span>
            </div>
            
            <h3 
              class="font-serif-heading text-lg font-bold text-[#1E1E1E] leading-snug line-clamp-2 hover:text-[#1B365D] cursor-pointer transition-colors"
              onclick="openProductModal('${item.id}')"
            >
              ${item.title}
            </h3>

            <p class="text-xs text-stone-600 mt-2 line-clamp-2">
              ${item.description}
            </p>

            <!-- Price Display -->
            <div class="mt-3.5 pt-3 border-t border-[#F3ECE1] flex items-baseline justify-between">
              <div>
                <span class="text-xs text-stone-600 uppercase font-medium">Wholesale Rate</span>
                <div class="flex items-baseline gap-1">
                  <span class="font-serif-heading text-2xl font-bold text-[#1B365D]">₹${item.price}</span>
                  <span class="text-xs text-stone-600 font-semibold">${item.priceUnit}</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-[11px] text-stone-600 block">Est. Total (${qty} ${unitLabel})</span>
                <span class="text-sm font-bold text-[#B84A39]">₹${itemTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <!-- Quantity Stepper & Order Buttons -->
          <div class="mt-4 pt-3 border-t border-[#F3ECE1]">
            <div class="flex items-center justify-between mb-3 bg-[#FAF6F0] p-1.5 rounded-lg border border-[#E8DECE]">
              <span class="text-xs font-medium text-stone-700 ml-2">Order Quantity:</span>
              <div class="flex items-center gap-1">
                <button 
                  type="button"
                  onclick="updateProductQty('${item.id}', -${item.step})"
                  class="w-7 h-7 rounded bg-white hover:bg-stone-200 border border-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="Decrease quantity"
                >−</button>
                <span class="w-12 text-center text-xs font-bold text-[#1B365D]">${qty} ${unitLabel}</span>
                <button 
                  type="button"
                  onclick="updateProductQty('${item.id}', ${item.step})"
                  class="w-7 h-7 rounded bg-white hover:bg-stone-200 border border-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>

            <!-- Smart WhatsApp Button -->
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
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function updateProductQty(productId, delta) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const current = currentProductQuantities[productId] || product.defaultQty;
  const next = current + delta;

  if (next >= product.minOrder) {
    currentProductQuantities[productId] = next;
    renderProducts();
  } else {
    showToast(`Minimum order for this product is ${product.minOrder} ${product.isUnitMeter ? 'meters' : 'pcs'}`);
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
   2. INTERACTIVE B2B WHOLESALE YARDAGE & PRICE CALCULATOR
   ========================================================================== */

function initWholesaleCalculator() {
  const fabricSelect = document.getElementById("calc-fabric");
  const meterSlider = document.getElementById("calc-meters");
  const meterInput = document.getElementById("calc-meters-input");
  const customToggle = document.getElementById("calc-custom-toggle");
  const quoteWaBtn = document.getElementById("calc-whatsapp-btn");
  const copyBtn = document.getElementById("calc-copy-btn");
  const chipButtons = document.querySelectorAll(".calc-meter-chip");

  if (!fabricSelect || !meterSlider || !meterInput) return;

  // Sync Slider -> Number Input
  meterSlider.addEventListener("input", (e) => {
    meterInput.value = e.target.value;
    updateCalculatorResults();
  });

  // Sync Number Input -> Slider
  meterInput.addEventListener("input", (e) => {
    let val = parseInt(e.target.value) || 20;
    if (val < 20) val = 20;
    if (val > 5000) val = 5000;
    meterSlider.value = val;
    updateCalculatorResults();
  });

  // Fabric change
  fabricSelect.addEventListener("change", updateCalculatorResults);

  // Customization Toggle
  if (customToggle) {
    customToggle.addEventListener("change", updateCalculatorResults);
  }

  // Preset Chips
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

  // WhatsApp Quote button handler
  if (quoteWaBtn) {
    quoteWaBtn.addEventListener("click", sendWholesaleQuoteToWhatsApp);
  }

  // Copy Quote button
  if (copyBtn) {
    copyBtn.addEventListener("click", copyWholesaleQuoteSummary);
  }

  // Initial calculation
  updateCalculatorResults();
}

function updateCalculatorResults() {
  const fabricKey = document.getElementById("calc-fabric")?.value || "cambric";
  const meters = parseInt(document.getElementById("calc-meters-input")?.value) || 20;
  const isCustom = document.getElementById("calc-custom-toggle")?.checked || false;

  const fabricInfo = FABRIC_RATES[fabricKey] || FABRIC_RATES.cambric;
  let baseRate = fabricInfo.baseRate;

  // Add custom design / color matching surcharge if active (+₹15/m)
  const customSurcharge = isCustom ? 15 : 0;
  baseRate += customSurcharge;

  // Tiered Wholesale Discounts
  let discountPercent = 0;
  let tierLabel = "Standard Wholesale (20m - 99m)";
  let tierBadge = "bg-stone-200 text-stone-800";

  if (meters >= 1000) {
    discountPercent = 18;
    tierLabel = "Export & Mega Batch Tier (1,000m+) • 18% Off";
    tierBadge = "bg-emerald-100 text-emerald-800 border-emerald-300";
  } else if (meters >= 500) {
    discountPercent = 12;
    tierLabel = "Production Volume Tier (500m - 999m) • 12% Off";
    tierBadge = "bg-blue-100 text-blue-800 border-blue-300";
  } else if (meters >= 100) {
    discountPercent = 5;
    tierLabel = "Boutique Starter Tier (100m - 499m) • 5% Off";
    tierBadge = "bg-amber-100 text-amber-800 border-amber-300";
  }

  const discountAmountPerMeter = (baseRate * discountPercent) / 100;
  const netRatePerMeter = baseRate - discountAmountPerMeter;
  const subtotalPrice = netRatePerMeter * meters;
  const originalTotalPrice = baseRate * meters;
  const totalSavings = originalTotalPrice - subtotalPrice;

  // Dispatch timeline calculation
  let timeline = isCustom ? "7 – 10 Working Days (Lab Dips & Fresh Stamping)" : (meters > 500 ? "4 – 6 Working Days" : "2 – 3 Working Days (Ready Stock Rolls)");
  let estWeightKg = Math.round(meters * fabricInfo.weightPerM * 10) / 10;

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
  const fabricKey = document.getElementById("calc-fabric")?.value || "cambric";
  const meters = parseInt(document.getElementById("calc-meters-input")?.value) || 20;
  const isCustom = document.getElementById("calc-custom-toggle")?.checked || false;

  const fabricInfo = FABRIC_RATES[fabricKey] || FABRIC_RATES.cambric;
  let baseRate = fabricInfo.baseRate + (isCustom ? 15 : 0);

  let discountPercent = 0;
  if (meters >= 1000) discountPercent = 18;
  else if (meters >= 500) discountPercent = 12;
  else if (meters >= 100) discountPercent = 5;

  const netRate = baseRate * (1 - discountPercent / 100);
  const totalVal = Math.round(netRate * meters);
  const timeline = isCustom ? "7-10 Days (Custom Block/Color)" : (meters > 500 ? "4-6 Days" : "2-3 Days");

  const message = 
    `Namaste Chhipa Handblock Team,\n` +
    `I generated this B2B Wholesale Yardage Quote on your website:\n\n` +
    `📌 *Wholesale Order Estimate*\n` +
    `• Fabric Base: ${fabricInfo.name}\n` +
    `• Quantity: ${meters} meters\n` +
    `• Production Mode: ${isCustom ? 'Custom Block / Pantone Matching (+₹15/m)' : 'Ready Stock Designs'}\n` +
    `• Tier Discount: ${discountPercent}% applied\n` +
    `• Net Wholesale Rate: ₹${netRate.toFixed(2)} / meter\n` +
    `• Estimated Order Value: ₹${totalVal.toLocaleString('en-IN')}\n` +
    `• Est. Dispatch: ${timeline}\n\n` +
    `Please share your current fabric swatch catalogue and confirm current running stock.`;

  const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function copyWholesaleQuoteSummary() {
  const fabricName = document.getElementById("res-fabric-name")?.innerText || "";
  const meters = document.getElementById("res-total-meters")?.innerText || "";
  const netRate = document.getElementById("res-net-rate")?.innerText || "";
  const totalPrice = document.getElementById("res-total-price")?.innerText || "";
  const timeline = document.getElementById("res-timeline")?.innerText || "";

  const textToCopy = `Chhipa Handblock Printroom Wholesale Quote\nFabric: ${fabricName}\nQuantity: ${meters}\nNet Rate: ${netRate}/m\nEstimated Total: ${totalPrice}\nTimeline: ${timeline}\nContact: +91 90248 56205 | Sanganer, Jaipur`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast("Wholesale quote copied to clipboard!");
  }).catch(() => {
    showToast("Quote details ready to share!");
  });
}

/* ==========================================================================
   3. FLOATING SMART WHATSAPP ASSISTANT WIDGET
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

  // Click outside to close assistant card
  document.addEventListener("click", (e) => {
    if (!widgetCard.contains(e.target) && !toggleBtn.contains(e.target)) {
      widgetCard.classList.add("hidden");
    }
  });

  // Custom text submission
  if (customSubmitBtn && customInput) {
    const handleSend = () => {
      const query = customInput.value.trim();
      const text = query ? query : "Hello Chhipa Handblock Printroom, I would like to inquire about your Sanganeri hand block prints.";
      const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
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

// Function called by quick-action chips
window.sendWhatsAppChip = function(type) {
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
      message = `Hello Chhipa Handblock, I am planning to visit your Sanganer workshop at Plot No. 9, Miya Bajaj Gali, Dinesh Colony, Sanganer. Please share visitor timings and landmarks.`;
      break;
    default:
      message = "Hello Chhipa Handblock Printroom, I would like to connect regarding your Sanganeri hand block prints.";
  }

  const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  const widgetCard = document.getElementById("wa-widget-card");
  if (widgetCard) widgetCard.classList.add("hidden");
};

/* ==========================================================================
   4. QUICK VIEW MODAL
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

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalBackdrop.classList.add("hidden");
      const widgetCard = document.getElementById("wa-widget-card");
      if (widgetCard) widgetCard.classList.add("hidden");
    }
  });
}

window.openProductModal = function(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  selectedProductForModal = item;
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  const currentQty = currentProductQuantities[item.id] || item.defaultQty;
  const unitLabel = item.isUnitMeter ? "Meters" : "Pieces";

  // Populate Modal Fields
  const imgEl = document.getElementById("modal-img");
  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.title;
  }

  setText("modal-title", item.title);
  setText("modal-tag", item.tag);
  setText("modal-desc", item.description);
  setText("modal-price", `₹${item.price} ${item.priceUnit}`);

  // Build Specs Table
  const specsContainer = document.getElementById("modal-specs");
  if (specsContainer) {
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

  let current = parseInt(input.value) || selectedProductForModal.defaultQty;
  let next = current + delta;
  if (next < selectedProductForModal.minOrder) {
    showToast(`Minimum order is ${selectedProductForModal.minOrder} ${selectedProductForModal.isUnitMeter ? 'meters' : 'pcs'}`);
    return;
  }
  input.value = next;
  currentProductQuantities[selectedProductForModal.id] = next;
  updateModalWhatsAppLink();
  renderProducts();
};

function updateModalWhatsAppLink() {
  if (!selectedProductForModal) return;
  const input = document.getElementById("modal-qty-input");
  const qty = parseInt(input?.value) || selectedProductForModal.defaultQty;
  const unitLabel = selectedProductForModal.isUnitMeter ? "Meters" : "Pcs";
  const total = selectedProductForModal.price * qty;

  const waText = encodeURIComponent(
    `Hello Chhipa Handblock Printroom,\n` +
    `I am looking at ${selectedProductForModal.title} on your website.\n\n` +
    `• Product: ${selectedProductForModal.title}\n` +
    `• Rate: ₹${selectedProductForModal.price} ${selectedProductForModal.priceUnit}\n` +
    `• Quantity: ${qty} ${unitLabel}\n` +
    `• Approx Total: ₹${total.toLocaleString('en-IN')}\n\n` +
    `Please share current stock availability, color options, and dispatch timeline.`
  );

  const orderBtn = document.getElementById("modal-order-btn");
  if (orderBtn) {
    orderBtn.href = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${waText}`;
  }
}

/* ==========================================================================
   5. MOBILE NAVIGATION & DRAWER
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
   6. UTILITY HELPERS
   ========================================================================== */

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
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

