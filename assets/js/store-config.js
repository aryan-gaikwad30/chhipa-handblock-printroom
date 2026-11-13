/**
 * Chhipa Handblock Printroom - Centralized Dynamic Data Engine
 * Zero-Cost CMS Architecture with 3-Tier Fallback:
 * 1. Live Google Sheets CSV/JSON Cloud Sync (if configured)
 * 2. Browser localStorage overrides (Owner Admin edits)
 * 3. Default Fallback Data (Original heritage catalog & rates)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ChhipaStore = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const STORAGE_KEY = "CHHIPA_SITE_DATA_V1";
  const PIN_KEY = "CHHIPA_ADMIN_PIN";
  const DEFAULT_PIN = "1965";

  /**
   * ==========================================================================
   * 🌟 DEVELOPER CONFIGURATION: DEFAULT PUBLISHED GOOGLE SHEET CSV URL
   * ==========================================================================
   * To make sure EVERY new customer across the world automatically fetches
   * your live prices, stock status, and products without needing to enter
   * anything in localStorage, paste your published Google Sheet CSV link below:
   * 
   * Example:
   * const DEFAULT_GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pub?output=csv";
   * ==========================================================================
   */
  const DEFAULT_GOOGLE_SHEET_CSV_URL = "";

  // Default Fallback Data - Comprehensive, realistic 1965 heritage catalog
  const DEFAULT_SITE_DATA = {
    version: "1.1",
    lastUpdated: new Date().toISOString(),
    
    // Header, Footer & Global Workshop Business Info
    business: {
      name: "Chhipa Handblock Printroom",
      tagline: "Hand Block Printroom Since 1965 — Living Legacy of Pioneers in Sanganeri Hand Block Printing",
      address: "Plot No. 9, Miya Bajaj Gali, Near Kanwar Ka Bag, Dinesh Colony, Sanganer, Jaipur, Rajasthan 302029",
      whatsappNumber: "919024856205",
      displayPhone: "+91 90248 56205",
      hours: "Open Daily, 9:00 AM – 8:00 PM",
      instagram: "https://instagram.com/chhipahandblockprintroom",
      facebook: "https://facebook.com/chhipahandblockprintroom",
      email: "chhipahandblock@gmail.com",
      announcement: "Direct Manufacturer Pricing • 60+ Years in Sanganer (Est. 1965) • Pan-India & Global Export"
    },

    // Swatch Box Banner Offer (Dynamically bound & toggleable)
    swatchBanner: {
      show: true,
      price: 499,
      title: "Curating a New Apparel Line? Order Our Sanganer Swatch Box.",
      description: "Receive 10 tactile fabric swatches (60x60 Cambric, Mulmul, Dabu Indigo, Chanderi, and Duck Canvas) plus our printed motif catalogue delivered to your design studio within 48 hours.",
      ctaText: "Request Swatch Box (₹499)"
    },

    // B2B Wholesale Yardage & Price Calculator Settings
    wholesaleCalculator: {
      customSurcharge: 15, // +₹15/meter for custom block / color matching
      tiers: [
        { minMeters: 100, maxMeters: 499, discountPercent: 5, label: "Boutique Starter Tier (100m – 499m) • 5% Off" },
        { minMeters: 500, maxMeters: 999, discountPercent: 12, label: "Production Volume Tier (500m – 999m) • 12% Off" },
        { minMeters: 1000, maxMeters: 99999, discountPercent: 18, label: "Export & Mega Batch Tier (1,000m+) • 18% Off" }
      ],
      fabrics: [
        {
          id: "cambric",
          name: "60x60 Cambric Cotton",
          baseRate: 120,
          gsm: 85,
          weightPerM: 0.11,
          subtitle: "Most Popular for Kurtis & Shirts"
        },
        {
          id: "mulmul",
          name: "Mulmul Cotton",
          baseRate: 135,
          gsm: 65,
          weightPerM: 0.08,
          subtitle: "Ultra-Soft Sheer Summer Drape"
        },
        {
          id: "chanderi",
          name: "Chanderi Silk Blend",
          baseRate: 260,
          gsm: 95,
          weightPerM: 0.12,
          subtitle: "Festive Lustre with Gold Borders"
        },
        {
          id: "dabu",
          name: "Natural Indigo Dabu Print",
          baseRate: 165,
          gsm: 110,
          weightPerM: 0.14,
          subtitle: "Organic Mud-Resist Craft"
        },
        {
          id: "sheeting",
          name: "Heavy Sheeting Cotton",
          baseRate: 180,
          gsm: 210,
          weightPerM: 0.23,
          subtitle: "20s Count Bed Linen & Decor"
        }
      ]
    },

    // Collections Grid (All 12 authentic textile products)
    products: [
      {
        id: "fabric-6060-cotton",
        title: "Sanganeri Hand Block Print 60x60 Cotton Fabric",
        category: "running-fabrics",
        categoryName: "Running Fabrics (Bulk)",
        price: 120,
        priceUnit: "/ meter",
        tag: "Best for Boutiques | MOQ 20m",
        inStock: true,
        isUnitMeter: true,
        minOrder: 20,
        step: 5,
        defaultQty: 20,
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-blue-900 text-amber-100",
        fabricSubtitle: "100% Pure Cambric 60s",
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
        categoryName: "Apparel & Suit Sets",
        price: 750,
        priceUnit: "/ piece",
        tag: "Ready to Wear",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-emerald-900 text-emerald-100",
        fabricSubtitle: "100% Textured Waffle Cotton",
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
        categoryName: "Apparel & Suit Sets",
        price: 800,
        priceUnit: "/ saree",
        tag: "Artisan Edition",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-amber-900 text-amber-100",
        fabricSubtitle: "Fine Chanderi Mulmul (6.5m)",
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
        categoryName: "Apparel & Suit Sets",
        price: 450,
        priceUnit: "/ piece",
        tag: "Bestseller",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-rose-900 text-rose-100",
        fabricSubtitle: "Breathable Mulmul with Concealed Zips",
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
        categoryName: "Home Linen & Bags",
        price: 500,
        priceUnit: "/ piece",
        tag: "Home Decor",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-teal-900 text-teal-100",
        fabricSubtitle: "Heavy 20s Sheeting (60x90 in)",
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
        categoryName: "Home Linen & Bags",
        price: 450,
        priceUnit: "/ piece",
        tag: "Export Favorite",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-purple-900 text-purple-100",
        fabricSubtitle: "Hand-Quilted Pure Cotton Canvas",
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
        categoryName: "Running Fabrics (Bulk)",
        price: 165,
        priceUnit: "/ meter",
        tag: "Heritage Craft | MOQ 20m",
        inStock: true,
        isUnitMeter: true,
        minOrder: 20,
        step: 5,
        defaultQty: 20,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-indigo-900 text-indigo-100",
        fabricSubtitle: "Patan Mud-Resist & Fermented Indigo",
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
        categoryName: "Running Fabrics (Bulk)",
        price: 135,
        priceUnit: "/ meter",
        tag: "Summer Essential | MOQ 20m",
        inStock: true,
        isUnitMeter: true,
        minOrder: 20,
        step: 5,
        defaultQty: 20,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-cyan-900 text-cyan-100",
        fabricSubtitle: "Ultra-Fine 100s Gossamer Yarn",
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
        categoryName: "Apparel & Suit Sets",
        price: 1350,
        priceUnit: "/ set (3-Piece)",
        tag: "Festive Collection",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-yellow-900 text-yellow-100",
        fabricSubtitle: "Chanderi Silk with Zari + Cotton Bottom",
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
        categoryName: "Apparel & Suit Sets",
        price: 850,
        priceUnit: "/ piece",
        tag: "Export Bestseller",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        // REPLACED generic stock image with authentic handblock apparel image
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-blue-800 text-blue-100",
        fabricSubtitle: "Pure Cambric Loungewear with Sash",
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
        categoryName: "Home Linen & Bags",
        price: 380,
        priceUnit: "/ pair (2 pcs)",
        tag: "Home Decor",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-stone-800 text-stone-100",
        fabricSubtitle: "Heavy 280 GSM Cotton Canvas (16x16 in)",
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
        categoryName: "Home Linen & Bags",
        price: 1450,
        priceUnit: "/ quilt",
        tag: "Artisan Edition",
        inStock: true,
        isUnitMeter: false,
        minOrder: 1,
        step: 1,
        defaultQty: 1,
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        badgeColor: "bg-red-900 text-red-100",
        fabricSubtitle: "Carded Cotton (800g) with Hand Tagaai",
        specs: {
          size: "Single: 60 x 90 inches (Double available on request)",
          filling: "100% Pure Carded Surgical Cotton (Super warm, yet only 800g)",
          outer: "Double layer sheer Mulmul cotton with Sanganeri booti",
          quilting: "Fine artisanal hand 'Tagaai' running stitches throughout",
          moq: "1 pc for retail | 10 pcs for wholesale"
        },
        description: "The world-famous Jaipuri cotton quilt. Masterfully carded by traditional 'Dhunia' artisans, layered inside cloud-soft mulmul, and hand-quilted with microscopic stitches. Unbelievably lightweight yet delightfully warm for AC or winter comfort."
      }
    ],

    // Client Testimonials
    testimonials: [
      {
        id: "test-1",
        name: "Ananya Sen",
        role: "Founder, Tara Ethical Pret (Bengaluru)",
        badge: "Verified B2B Buyer",
        stars: 5,
        quote: "We have been sourcing 60x60 Cambric and Dabu prints for our summer kurtis from Chhipa Handblock since 2018. Their consistency, wash-fastness, and prompt dispatch on WhatsApp have helped our brand scale to 4 retail stores across Bengaluru."
      },
      {
        id: "test-2",
        name: "Clara Jenkins",
        role: "Creative Director, Jenkins & Co. (UK)",
        badge: "Export Client",
        stars: 5,
        quote: "The custom teak block development service was remarkable. Within 8 days they carved our custom floral motifs and dispatched 650 meters of mulmul cotton to our London studio. Outstanding authentic Sanganeri craftsmanship."
      },
      {
        id: "test-3",
        name: "Rajesh Mehta",
        role: "Retailer & Wholesaler (Surat & Mumbai)",
        badge: "Workshop Visitor",
        stars: 5,
        quote: "Visiting their workshop in Dinesh Colony was an unforgettable experience. Being able to see our fabrics being hand-stamped on 20-meter long tables gave us complete confidence in their authentic roots."
      }
    ],

    // Cloud Sync Configuration (Google Sheets CSV URL)
    cloudSync: {
      googleSheetCsvUrl: DEFAULT_GOOGLE_SHEET_CSV_URL,
      lastSyncedAt: null,
      autoSyncOnLoad: true
    }
  };

  /**
   * Deep merge helper to merge source into target
   */
  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    const output = Object.assign({}, target);
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object && !Array.isArray(source[key]) && key in target) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    }
    return output;
  }

  /**
   * RFC 4180 CSV Parser
   */
  function parseCSV(text) {
    const lines = [];
    let row = [""];
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      const next = text[i + 1];

      if (c === '"') {
        if (inQuotes && next === '"') {
          row[row.length - 1] += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === ',' && !inQuotes) {
        row.push('');
      } else if ((c === '\r' || c === '\n') && !inQuotes) {
        if (c === '\r' && next === '\n') {
          i++;
        }
        lines.push(row);
        row = [''];
      } else {
        row[row.length - 1] += c;
      }
    }
    if (row.length > 1 || row[0] !== '') {
      lines.push(row);
    }
    return lines;
  }

  /**
   * Core Store Object
   */
  const ChhipaStore = {
    // Current in-memory state
    _data: null,
    _initialized: false,

    /**
     * Initialize store: Load Tier 2 (localStorage) or Tier 3 (Default).
     * Then, if cloudSync URL is set and autoSync is true, attempt Tier 1 (Google Sheets).
     */
    async init() {
      if (this._initialized) return this._data;

      // 1. Try localStorage (Tier 2)
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          this._data = deepMerge(DEFAULT_SITE_DATA, parsed);
        } else {
          this._data = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
        }
      } catch (err) {
        console.warn("ChhipaStore: localStorage read error, using fallback data", err);
        this._data = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
      }

      this._initialized = true;

      // Prioritize DEFAULT_GOOGLE_SHEET_CSV_URL if configured in code and not set in cache
      if (DEFAULT_GOOGLE_SHEET_CSV_URL && (!this._data.cloudSync || !this._data.cloudSync.googleSheetCsvUrl)) {
        if (!this._data.cloudSync) this._data.cloudSync = {};
        this._data.cloudSync.googleSheetCsvUrl = DEFAULT_GOOGLE_SHEET_CSV_URL;
      }

      // 2. Try Google Sheets (Tier 1) if configured and enabled
      if (this._data.cloudSync && this._data.cloudSync.googleSheetCsvUrl && this._data.cloudSync.autoSyncOnLoad) {
        try {
          // Timeout to avoid blocking initial UI render
          const syncPromise = this.syncGoogleSheet(this._data.cloudSync.googleSheetCsvUrl);
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000));
          await Promise.race([syncPromise, timeoutPromise]);
        } catch (syncErr) {
          console.warn("ChhipaStore: Live Google Sheet sync skipped or timed out, continuing with cached data.", syncErr);
        }
      }

      return this._data;
    },

    /**
     * Get active site data synchronously
     */
    get() {
      if (!this._data) {
        try {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (stored) {
            this._data = deepMerge(DEFAULT_SITE_DATA, JSON.parse(stored));
          } else {
            this._data = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
          }
        } catch (e) {
          this._data = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
        }
      }
      return this._data;
    },

    /**
     * Save updated data to localStorage (Tier 2)
     */
    save(newData) {
      if (!newData) return false;
      this._data = deepMerge(this._data || DEFAULT_SITE_DATA, newData);
      this._data.lastUpdated = new Date().toISOString();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
        window.dispatchEvent(new CustomEvent('chhipa-store-updated', { detail: this._data }));
        return true;
      } catch (e) {
        console.error("ChhipaStore: Error saving to localStorage", e);
        return false;
      }
    },

    /**
     * Reset everything back to original 1965 factory defaults
     */
    reset() {
      this._data = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
      try {
        localStorage.removeItem(STORAGE_KEY);
        window.dispatchEvent(new CustomEvent('chhipa-store-updated', { detail: this._data }));
      } catch (e) {
        console.error("ChhipaStore: Reset error", e);
      }
      return this._data;
    },

    /**
     * Fetch & parse Published Google Sheet CSV Feed
     */
    async syncGoogleSheet(sheetCsvUrl) {
      if (!sheetCsvUrl || !sheetCsvUrl.trim()) {
        throw new Error("No Google Sheet CSV URL provided");
      }

      let url = sheetCsvUrl.trim();
      // Auto-correct standard edit links into publish/export CSV links if user pasted standard sheet link
      if (url.includes("docs.google.com/spreadsheets") && !url.includes("output=csv") && !url.includes("pub?output=csv")) {
        if (url.includes("/edit")) {
          url = url.replace(/\/edit.*$/, "/export?format=csv");
        }
      }

      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`Google Sheet request failed with HTTP ${response.status}`);
      }

      const text = await response.text();
      const parsedRows = parseCSV(text);

      if (!parsedRows || parsedRows.length < 2) {
        throw new Error("CSV sheet appears empty or missing data rows");
      }

      const headers = parsedRows[0].map(h => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ''));
      const rows = parsedRows.slice(1);

      let updatedCount = 0;
      const currentProducts = this.get().products;

      rows.forEach(row => {
        if (row.length < 2 || !row[0]) return;

        const rowData = {};
        headers.forEach((h, idx) => {
          rowData[h] = row[idx] ? row[idx].trim() : '';
        });

        // Match product by ID or title
        const prodId = rowData.id || rowData.productid || '';
        const title = rowData.title || rowData.name || '';

        const product = currentProducts.find(p => 
          (prodId && p.id.toLowerCase() === prodId.toLowerCase()) || 
          (title && p.title.toLowerCase() === title.toLowerCase())
        );

        if (product) {
          if (rowData.price) {
            const p = parseFloat(rowData.price.replace(/[^0-9.]/g, ''));
            if (!isNaN(p)) product.price = p;
          }
          if (rowData.tag) product.tag = rowData.tag;
          if (rowData.instock !== undefined && rowData.instock !== '') {
            const val = rowData.instock.toLowerCase();
            product.inStock = !(val === 'false' || val === '0' || val === 'no' || val === 'out');
          }
          if (rowData.image || rowData.imageurl) {
            product.image = rowData.image || rowData.imageurl;
          }
          if (rowData.moq) {
            const moq = parseInt(rowData.moq.replace(/[^0-9]/g, ''));
            if (!isNaN(moq)) product.minOrder = moq;
          }
          if (rowData.description) {
            product.description = rowData.description;
          }
          updatedCount++;
        }
      });

      // Update sync state
      this._data.cloudSync.googleSheetCsvUrl = sheetCsvUrl;
      this._data.cloudSync.lastSyncedAt = new Date().toISOString();
      this.save(this._data);

      return {
        success: true,
        updatedProducts: updatedCount,
        totalRows: rows.length,
        syncedAt: this._data.cloudSync.lastSyncedAt
      };
    },

    /**
     * Download full site configuration JSON backup
     */
    exportJSON() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.get(), null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `chhipa-store-backup-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    },

    /**
     * Restore from JSON string
     */
    importJSON(jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        if (!parsed || !parsed.business || !Array.isArray(parsed.products)) {
          throw new Error("Invalid Chhipa SITE_DATA schema");
        }
        this.save(parsed);
        return true;
      } catch (err) {
        console.error("ChhipaStore: import error", err);
        throw err;
      }
    },

    /**
     * Check Owner Admin Access PIN
     */
    verifyPIN(inputPIN) {
      const storedPIN = (typeof localStorage !== 'undefined' ? localStorage.getItem(PIN_KEY) : null) || DEFAULT_PIN;
      return String(inputPIN).trim() === storedPIN.trim();
    },

    /**
     * Change Owner Admin PIN
     */
    changePIN(currentPIN, newPIN) {
      if (!this.verifyPIN(currentPIN)) {
        return { success: false, message: "Current PIN is incorrect." };
      }
      if (!newPIN || String(newPIN).trim().length < 4) {
        return { success: false, message: "New PIN must be at least 4 digits." };
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(PIN_KEY, String(newPIN).trim());
      }
      return { success: true, message: "PIN changed successfully!" };
    },

    /**
     * Build standard WhatsApp URL using dynamic business phone
     */
    getWhatsAppUrl(customText) {
      const phone = this.get().business.whatsappNumber || "919024856205";
      const text = customText ? encodeURIComponent(customText) : "";
      return `https://wa.me/${phone}${text ? '?text=' + text : ''}`;
    }
  };

  return ChhipaStore;
}));
