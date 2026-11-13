# Chhipa Handblock Printroom (Est. 1965)
### Heritage Sanganeri Hand Block Print Manufacturer & Wholesaler
**Zero-Cost Dynamic CMS & B2B Lookbook Platform**

A production-ready, mobile-first B2B & Retail E-Commerce Lookbook website for **Chhipa Handblock Printroom** (Sanganer, Jaipur, Rajasthan).

Designed with an authentic Rajasthani heritage luxury aesthetic: warm unbleached cotton background (`#FAF6F0`), deep natural indigo (`#1B365D`), madder terracotta red (`#B84A39`), and charcoal ink typography (`#1E1E1E`).

---

## 🏛️ Business Details (Dynamic & Centralized)

- **Brand Name**: Chhipa Handblock Printroom
- **Tagline**: Hand Block Printroom Since 1965 — Living Legacy of Pioneers in Sanganeri Hand Block Printing
- **Workshop Address**: Plot No. 9, Miya Bajaj Gali, Near Kanwar Ka Bag, Dinesh Colony, Sanganer, Jaipur, Rajasthan 302029
- **Direct WhatsApp & Phone**: `+91 90248 56205` (`+919024856205`)
- **Operating Hours**: Open Daily, 9:00 AM – 8:00 PM
- **Instagram**: [https://instagram.com/chhipahandblockprintroom](https://instagram.com/chhipahandblockprintroom)
- **Facebook**: [https://facebook.com/chhipahandblockprintroom](https://facebook.com/chhipahandblockprintroom)

---

## ⚡ Zero-Cost CMS Architecture (`store-config.js`)

100% of the site's data, products, prices, wholesale rates, testimonials, and contact links are dynamic. The workshop owner can manage everything directly from their mobile phone without touching code or paying monthly database fees.

### 3-Tier Priority Fallback System:
1. **Tier 1: Live Google Sheet Cloud Sync (CSV Feed)**:
   - The owner can link a Published Google Sheet CSV.
   - Updating prices or stock in Google Sheets from a smartphone automatically reflects across customer devices on load.
2. **Tier 2: Browser `localStorage` Overrides**:
   - Edits made via the built-in Owner Admin Panel (`admin.html`) persist instantly in the browser.
3. **Tier 3: Default Fallback Data**:
   - Complete, realistic 1965 heritage catalog (12 products, calculator rates, workshop info) so the site never shows a blank screen or breaks.

> [!TIP]
> **Crucial Setup Tip Before Production Deployment:**
> When you test the Google Sheet link inside `admin.html`, it is cached in your current browser's `localStorage`. To ensure **every new customer** who visits your website worldwide automatically fetches your live Google Sheet feed on load without needing manual setup, paste your published Google Sheet CSV link (`...pub?output=csv`) directly into `const DEFAULT_GOOGLE_SHEET_CSV_URL = ""` at line 22 of [assets/js/store-config.js](file:///d:/website/assets/js/store-config.js).

---

## 🔒 Built-In Owner Admin Dashboard (`admin.html`)

Access the admin dashboard at `admin.html` (or via the **🔒 Owner Desk** link in the footer).

- **Security PIN Lock**: Default PIN is `1965` (can be updated inside the panel).
- **Tab 1 — Products & Stock**:
  - Live stock summary (In Stock vs. Out of Stock).
  - One-click In Stock / Out of Stock toggle switches.
  - Add new products or edit existing prices, MOQs, units, and descriptions.
  - Live thumbnail image preview while typing image URLs.
  - Delete items with confirmation.
- **Tab 2 — Wholesale Calculator & Swatch Box**:
  - Edit per-meter fabric base rates (Cambric, Mulmul, Chanderi, Dabu, Heavy Sheeting) or add new fabric qualities.
  - Set custom printing surcharge (+₹15/m default).
  - Configure tiered volume discount rules (100m+ -> 5%, 500m+ -> 12%, 1,000m+ -> 18%).
  - Toggle the ₹499 Swatch Box offer banner on or off and edit its copy.
- **Tab 3 — Contact, WhatsApp & Social Links**:
  - Update the WhatsApp receiving phone number (automatically updates every `wa.me` order link and click-to-call link across the entire store).
  - Update operating hours, physical address, and Instagram/Facebook links.
  - Edit or add buyer testimonials.
  - Change the 4-digit security PIN.
- **Tab 4 — Google Sheets Live Sync & Backup**:
  - Paste a Published Google Sheet CSV URL and click "Test & Sync Now".
  - One-click "Copy Sample CSV Header Template" button.
  - "Download Backup JSON" to keep offline file backups.
  - "Restore from JSON File" to restore past snapshots.
  - "Reset to Factory Defaults" to reload original 1965 data.

---

## 🛍️ Collections Lookbook & Out-of-Stock Handling

All 12 authentic textile products are dynamically rendered:
1. *Sanganeri Hand Block Print 60x60 Cotton Fabric* — ₹120 / meter (MOQ 20m)
2. *Hand Block Printed Waffle Cotton Kurti / Dress* — ₹750
3. *Hand Block Printed Cotton Saree (Indigo & Black)* — ₹800
4. *Maternity & Feeding Hand Block Gown* — ₹450
5. *Floral Sanganeri Table Cover / Single Bed Sheet* — ₹500
6. *Handmade Quilted Floral Tote Bag* — ₹450
7. *Natural Dabu Mud-Resist Indigo Cotton Fabric* — ₹165 / meter (MOQ 20m)
8. *Pure Mulmul Cotton Running Fabric (Jaipuri Floral Buti)* — ₹135 / meter (MOQ 20m)
9. *Hand Block Chanderi Silk Blend Suit Set with Dupatta* — ₹1,350
10. *Artisan Hand-Block Cotton Kimono Robe* — ₹850 (Authentic textile imagery)
11. *Hand-Block Cotton Canvas Cushion Covers (Set of 2)* — ₹380
12. *Pure Mulmul Hand-Quilted Jaipuri Razai (Single)* — ₹1,450

- **Out of Stock State**: When an item is marked out of stock in Admin or Google Sheets, the product card displays an "Out of Stock" badge and changes the button to "Inquire for Restock", preventing accidental orders of unavailable fabrics.
- **Image Quality Fix**: Verified replacement of all generic stock images with authentic Indian hand-block printing and sun-curing workshop photography.

---

## 🧮 Dynamic B2B Wholesale Yardage Calculator

- **Fabric Quality Dropdown**: Populated dynamically from `store-config.js`.
- **Synchronized Slider & Inputs**: 20m to 2,000m+ yardage selection.
- **Dynamic Tier Calculation**: Automatically calculates tiered discounts, net effective rates, total order estimate, cargo weight, and dispatch timelines.
- **One-Click WhatsApp Quotation**: Encodes the exact calculation into a pre-formatted WhatsApp message sent directly to `+91 90248 56205`.

---

## 🚀 How to Run Locally & Deploy

### Run Locally:
```powershell
node serve.js
# Open http://localhost:3000 in your browser
# Open http://localhost:3000/admin.html for Owner Desk (PIN: 1965)
```

### GitHub Repository & Live Pages:
- **GitHub Repository**: [https://github.com/aryan-gaikwad30/chhipa-handblock-printroom](https://github.com/aryan-gaikwad30/chhipa-handblock-printroom)
- **Live GitHub Pages URL**: [https://aryan-gaikwad30.github.io/chhipa-handblock-printroom/](https://aryan-gaikwad30.github.io/chhipa-handblock-printroom/)
- **Live Admin Portal**: [https://aryan-gaikwad30.github.io/chhipa-handblock-printroom/admin.html](https://aryan-gaikwad30.github.io/chhipa-handblock-printroom/admin.html)
