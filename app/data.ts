export interface Clothes {
  id: number;
  name: string;
  slug: string; // Add this field
  image: string;
  description: string;
  ratings: number;
  category: string; // Add this field
  brand: string; // Add this field
  price: number; // Add this field
  listPrice: number; // Add this field
  countInStock: number; // Add this field
  tags?: string[]; // Optional field
  colors?: string[]; // Optional field
  sizes?: string[]; // Optional field
  avgRating?: number; // Optional field
  numReviews?: number; // Optional field
  ratingDistribution?: { rating: number; count: number }[]; // Optional field
  numSales?: number; // Optional field
  isPublished?: boolean; // Optional field
  reviews?: string[]; // Optional field
}

export const clothesData: Clothes[] = [
  {
    id: 1,
    name: "Classic White Tee",
    slug: "classic-white-tee", // Unique slug
    image: "/images/cloths/cloth.jpeg",
    description: "A timeless classic, perfect for any casual outfit.",
    ratings: 4.5,
    category: "T-Shirts", // Added category
    brand: "Generic Brand", // Added brand
    price: 20, // Added price
    listPrice: 25, // Added list price
    countInStock: 10, // Added stock count
    tags: ["new arrival"], // Optional
    colors: ["White"], // Optional
    sizes: ["S", "M", "L"], // Optional
    avgRating: 4.5, // Optional
    numReviews: 10, // Optional
    ratingDistribution: [{ rating: 5, count: 8 }, { rating: 4, count: 2 }], // Optional
    numSales: 5, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 2,
    name: "Black Leather Jacket",
    slug: "black-leather-jacket", // Unique slug
    image: "/images/cloths/cloth1.jpeg",
    description: "Stylish and durable, this leather jacket is a must-have for your wardrobe.",
    ratings: 4.8,
    category: "Jackets", // Added category
    brand: "Fashion Co.", // Added brand
    price: 150, // Added price
    listPrice: 200, // Added list price
    countInStock: 5, // Added stock count
    tags: ["premium"], // Optional
    colors: ["Black"], // Optional
    sizes: ["M", "L", "XL"], // Optional
    avgRating: 4.8, // Optional
    numReviews: 15, // Optional
    ratingDistribution: [{ rating: 5, count: 12 }, { rating: 4, count: 3 }], // Optional
    numSales: 8, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 3,
    name: "Blue Denim Jeans",
    slug: "blue-denim-jeans", // Unique slug
    image: "/images/cloths/cloth2.jpeg",
    description: "Comfortable and versatile, these jeans are perfect for everyday wear.",
    ratings: 4.2,
    category: "Jeans", // Added category
    brand: "Denim World", // Added brand
    price: 50, // Added price
    listPrice: 60, // Added list price
    countInStock: 20, // Added stock count
    tags: ["casual"], // Optional
    colors: ["Blue"], // Optional
    sizes: ["S", "M", "L", "XL"], // Optional
    avgRating: 4.2, // Optional
    numReviews: 25, // Optional
    ratingDistribution: [{ rating: 5, count: 18 }, { rating: 4, count: 7 }], // Optional
    numSales: 12, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 4,
    name: "Red Plaid Shirt",
    slug: "red-plaid-shirt", // Unique slug
    image: "/images/cloths/cloth3.jpeg",
    description: "A bold and trendy shirt that adds a pop of color to your outfit.",
    ratings: 4.0,
    category: "Shirts", // Added category
    brand: "Trendy Wear", // Added brand
    price: 35, // Added price
    listPrice: 40, // Added list price
    countInStock: 15, // Added stock count
    tags: ["trendy"], // Optional
    colors: ["Red"], // Optional
    sizes: ["S", "M", "L"], // Optional
    avgRating: 4.0, // Optional
    numReviews: 20, // Optional
    ratingDistribution: [{ rating: 5, count: 10 }, { rating: 4, count: 10 }], // Optional
    numSales: 10, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 5,
    name: "Gray Hoodie",
    slug: "gray-hoodie", // Unique slug
    image: "/images/cloths/cloth4.jpeg",
    description: "Soft and cozy, this hoodie is perfect for chilly days.",
    ratings: 4.7,
    category: "Hoodies", // Added category
    brand: "Cozy Wear", // Added brand
    price: 45, // Added price
    listPrice: 50, // Added list price
    countInStock: 12, // Added stock count
    tags: ["comfort"], // Optional
    colors: ["Gray"], // Optional
    sizes: ["S", "M", "L", "XL"], // Optional
    avgRating: 4.7, // Optional
    numReviews: 30, // Optional
    ratingDistribution: [{ rating: 5, count: 25 }, { rating: 4, count: 5 }], // Optional
    numSales: 15, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 6,
    name: "Striped Summer Dress",
    slug: "striped-summer-dress", // Unique slug
    image: "/images/cloths/cloth5.jpeg",
    description: "Light and breezy, this dress is ideal for summer outings.",
    ratings: 4.6,
    category: "Dresses", // Added category
    brand: "Summer Style", // Added brand
    price: 60, // Added price
    listPrice: 70, // Added list price
    countInStock: 8, // Added stock count
    tags: ["summer"], // Optional
    colors: ["Blue", "White"], // Optional
    sizes: ["S", "M"], // Optional
    avgRating: 4.6, // Optional
    numReviews: 18, // Optional
    ratingDistribution: [{ rating: 5, count: 15 }, { rating: 4, count: 3 }], // Optional
    numSales: 7, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 7,
    name: "Brown Suede Boots",
    slug: "brown-suede-boots", // Unique slug
    image: "/images/cloths/cloth6.jpeg",
    description: "Elegant and durable, these boots are perfect for any season.",
    ratings: 4.4,
    category: "Footwear", // Added category
    brand: "Boots & Co.", // Added brand
    price: 120, // Added price
    listPrice: 150, // Added list price
    countInStock: 6, // Added stock count
    tags: ["premium"], // Optional
    colors: ["Brown"], // Optional
    sizes: ["8", "9", "10"], // Optional
    avgRating: 4.4, // Optional
    numReviews: 22, // Optional
    ratingDistribution: [{ rating: 5, count: 18 }, { rating: 4, count: 4 }], // Optional
    numSales: 9, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 8,
    name: "Green Parka Jacket",
    slug: "green-parka-jacket", // Unique slug
    image: "/images/cloths/cloth7.jpeg",
    description: "Stay warm and stylish with this waterproof parka jacket.",
    ratings: 4.3,
    category: "Jackets", // Added category
    brand: "Outdoor Gear", // Added brand
    price: 180, // Added price
    listPrice: 200, // Added list price
    countInStock: 4, // Added stock count
    tags: ["winter"], // Optional
    colors: ["Green"], // Optional
    sizes: ["M", "L", "XL"], // Optional
    avgRating: 4.3, // Optional
    numReviews: 14, // Optional
    ratingDistribution: [{ rating: 5, count: 10 }, { rating: 4, count: 4 }], // Optional
    numSales: 6, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 9,
    name: "White Sneakers",
    slug: "white-sneakers", // Unique slug
    image: "/images/cloths/cloth8.jpeg",
    description: "Comfortable and trendy, these sneakers go with any outfit.",
    ratings: 4.9,
    category: "Footwear", // Added category
    brand: "Sneaker World", // Added brand
    price: 80, // Added price
    listPrice: 100, // Added list price
    countInStock: 15, // Added stock count
    tags: ["casual"], // Optional
    colors: ["White"], // Optional
    sizes: ["7", "8", "9", "10"], // Optional
    avgRating: 4.9, // Optional
    numReviews: 40, // Optional
    ratingDistribution: [{ rating: 5, count: 35 }, { rating: 4, count: 5 }], // Optional
    numSales: 20, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 10,
    name: "Pink Scarf",
    slug: "pink-scarf", // Unique slug
    image: "/images/cloths/cloth9.jpeg",
    description: "A soft and warm scarf to keep you cozy in winter.",
    ratings: 4.1,
    category: "Accessories", // Added category
    brand: "Winter Comfort", // Added brand
    price: 15, // Added price
    listPrice: 20, // Added list price
    countInStock: 25, // Added stock count
    tags: ["winter"], // Optional
    colors: ["Pink"], // Optional
    sizes: ["One Size"], // Optional
    avgRating: 4.1, // Optional
    numReviews: 12, // Optional
    ratingDistribution: [{ rating: 5, count: 8 }, { rating: 4, count: 4 }], // Optional
    numSales: 5, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
  {
    id: 11,
    name: "Pink Scarf",
    slug: "pink-scarf-2", // Unique slug
    image: "/images/cloths/cloth10.jpeg",
    description: "A soft and warm scarf to keep you cozy in winter.",
    ratings: 4.1,
    category: "Accessories", // Added category
    brand: "Winter Comfort", // Added brand
    price: 15, // Added price
    listPrice: 20, // Added list price
    countInStock: 25, // Added stock count
    tags: ["winter"], // Optional
    colors: ["Pink"], // Optional
    sizes: ["One Size"], // Optional
    avgRating: 4.1, // Optional
    numReviews: 12, // Optional
    ratingDistribution: [{ rating: 5, count: 8 }, { rating: 4, count: 4 }], // Optional
    numSales: 5, // Optional
    isPublished: true, // Optional
    reviews: [], // Optional
  },
];
