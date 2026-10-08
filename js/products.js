/*
 * Best Store Marmaris — product catalogue
 * - brand / category: an "id" from BRANDS / CATEGORIES.
 * - images: first is the cover, second shows on hover, all show on the product page.
 * - colors: swatches; "image" is the index in `images` shown when picked.
 * - sizes: "clothing", "shoes", or your own list.
 * - price: null shows "Contact for price".
 * - featured: true shows it on the home page.
 */
const IMG = "images/products/";

const SIZES = {
  clothing: ["S", "M", "L", "XL", "XXL", "3XL"],
  shoes: ["39", "40", "41", "42", "43", "44", "45", "46"]
};

const BRANDS = [
  { id: "moncler",      name: "Moncler",      blurb: "The iconic glossy down jacket, in every colour of the season." },
  { id: "canada-goose", name: "Canada Goose", blurb: "Fur-trimmed down bombers made for real winters." },
  { id: "burberry",     name: "Burberry",     blurb: "Hooded puffers with the signature check-lined hood." }
];

const CATEGORIES = [
  { id: "jackets", name: "Down Jackets",   cover: IMG + "moncler-2.jpg" },
  { id: "puffers", name: "Hooded Puffers", cover: IMG + "burberry-blue-1.jpg" },
  { id: "parkas",  name: "Fur-Trim",       cover: IMG + "cg-2.jpg" }
];

const COLOR = {
  Black: "#141414", Navy: "#1e2945", Brown: "#4a2a24", "Royal Blue": "#2650c4", "Steel Blue": "#6b85a6",
  Grey: "#8b8f96", "Grey / Blue": "linear-gradient(135deg,#b9b4a8 50%,#5d8fd6 50%)", "Black / White": "linear-gradient(135deg,#141414 50%,#f2f0ea 50%)",
  "Grey / Black": "linear-gradient(135deg,#9a9ea6 50%,#141414 50%)"
};

const PRODUCTS = [
  {
    id: 1, brand: "moncler", name: "Glossy Hooded Down Jacket", category: "jackets", price: null, badge: "Bestseller", featured: true,
    sizes: "clothing",
    colors: [{ name: "Black", image: 0 }, { name: "Navy", image: 1 }, { name: "Brown", image: 2 }, { name: "Royal Blue", image: 3 }, { name: "Steel Blue", image: 4 }],
    images: [IMG + "moncler-1.jpg", IMG + "moncler-2.jpg", IMG + "moncler-3.jpg", IMG + "moncler-4.jpg", IMG + "moncler-steel-1.jpg", IMG + "moncler-steel-2.jpg"]
  },
  {
    id: 2, brand: "canada-goose", name: "Fur-Trim Down Bomber", category: "parkas", price: null, badge: "New Season", featured: true,
    sizes: "clothing",
    description: "A heavyweight down bomber with a detachable fur-trimmed hood, rib-knit cuffs and the Arctic Program disc on the sleeve. Available with the black or red disc.",
    colors: [{ name: "Black", image: 0 }, { name: "Grey", image: 2 }],
    finishes: ["Black disc", "Red disc"],
    images: [IMG + "cg-1.jpg", IMG + "cg-2.jpg", IMG + "cg-3.jpg", IMG + "cg-4.jpg", IMG + "cg-rack.jpg"]
  },
  {
    id: 3, brand: "burberry", name: "Check-Hood Down Puffer", category: "puffers", price: null, badge: "New", featured: true,
    sizes: "clothing",
    description: "Quilted down puffer with a removable hood lined in the house check, snap storm placket and logo patch on the sleeve.",
    colors: [{ name: "Black", image: 0 }, { name: "Grey", image: 4 }],
    images: [IMG + "burberry-black-1.jpg", IMG + "burberry-black-2.jpg", IMG + "burberry-black-4.jpg", IMG + "burberry-black-3.jpg", IMG + "burberry-grey-1.jpg", IMG + "burberry-grey-3.jpg", IMG + "burberry-grey-2.jpg"]
  },
  {
    id: 4, brand: "burberry", name: "Hooded Down Puffer — Royal Blue", category: "puffers", price: null, featured: true,
    sizes: "clothing",
    description: "A bold royal-blue down puffer with a check-lined hood, embossed logo patch on the sleeve and hidden zip pockets.",
    colors: [{ name: "Royal Blue" }],
    images: [IMG + "burberry-blue-1.jpg", IMG + "burberry-blue-4.jpg", IMG + "burberry-blue-3.jpg", IMG + "burberry-blue-2.jpg"]
  }
];

const INSTAGRAM = [];
