export type ProductCategory = "Research Peptides" | "Cosmetic Peptides" | "Peptide Raw Materials";
export type Product = { name: string; catalog: string; category: ProductCategory; cas: string; purity: string; format: string; };

export const categories: ("All Products" | ProductCategory)[] = ["All Products", "Research Peptides", "Cosmetic Peptides", "Peptide Raw Materials"];

// Add future catalog entries here. The search and category filters update automatically.
export const products: Product[] = [
  { name: "Tirzepatide", catalog: "AUR-RP-001", category: "Research Peptides", cas: "2023788-19-2", purity: "≥98%", format: "Lyophilized powder" },
  { name: "Semaglutide", catalog: "AUR-RP-002", category: "Research Peptides", cas: "910463-68-2", purity: "≥98%", format: "Lyophilized powder" },
  { name: "BPC-157", catalog: "AUR-RP-003", category: "Research Peptides", cas: "137525-51-0", purity: "≥98%", format: "Lyophilized powder" },
  { name: "CJC-1295", catalog: "AUR-RP-004", category: "Research Peptides", cas: "863288-34-0", purity: "≥98%", format: "Lyophilized powder" },
  { name: "GHK-Cu", catalog: "AUR-CP-001", category: "Cosmetic Peptides", cas: "49557-75-7", purity: "≥98%", format: "Powder / solution" },
  { name: "Acetyl Hexapeptide-8", catalog: "AUR-CP-002", category: "Cosmetic Peptides", cas: "616204-22-9", purity: "≥98%", format: "Powder" },
  { name: "Palmitoyl Pentapeptide-4", catalog: "AUR-CP-003", category: "Cosmetic Peptides", cas: "214047-00-4", purity: "≥95%", format: "Powder" },
  { name: "Copper Tripeptide-1", catalog: "AUR-CP-004", category: "Cosmetic Peptides", cas: "89030-95-5", purity: "≥98%", format: "Powder" },
  { name: "Fmoc Amino Acids", catalog: "AUR-RM-001", category: "Peptide Raw Materials", cas: "Various", purity: "Specification based", format: "Bulk powder" },
  { name: "Protected Amino Acids", catalog: "AUR-RM-002", category: "Peptide Raw Materials", cas: "Various", purity: "Specification based", format: "Bulk powder" },
  { name: "Peptide Resins", catalog: "AUR-RM-003", category: "Peptide Raw Materials", cas: "Various", purity: "Specification based", format: "Bulk material" },
  { name: "Custom Peptide API Intermediates", catalog: "AUR-RM-004", category: "Peptide Raw Materials", cas: "Project specific", purity: "Custom", format: "Project specific" }
];
