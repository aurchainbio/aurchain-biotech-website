export const site = {
  name: "Aurchain Biotech",
  url: "https://www.aurchainbio.com",
  email: "nora@aurchainbio.com",
  whatsapp: "447724786175",
  location: "Global peptide supply · Serving US and international partners"
};

const defaultWhatsAppMessage = `Hello Aurchain Biotech,

I am interested in your peptide products.

Please send me:

• Product Catalog
• COA
• HPLC Report
• Latest Price List

Thank you.`;

export const whatsappUrl = (message = defaultWhatsAppMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
