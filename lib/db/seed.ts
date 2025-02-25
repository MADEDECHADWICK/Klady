import mongoose from 'mongoose';
import Product from './models/product.model';
import { config } from 'dotenv';  // Import dotenv's config function
import { cwd } from 'process';
import { clothesData } from '@/lib/data';

// Load environment variables from a .env file in the root directory
config({ path: `${cwd()}/.env.local` });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected successfully');

    await Product.deleteMany();
    console.log('Existing products removed');

    const transformedData = clothesData.map((item) => ({
      name: item.name,
      slug: item.slug,
      category: item.category,
      images: [item.image],
      brand: item.brand,
      description: item.description,
      price: item.price,
      listPrice: item.listPrice,
      countInStock: item.countInStock,
      tags: item.tags || ['new arrival'],
      colors: item.colors || ['White', 'Red', 'Black'],
      sizes: item.sizes || ['S', 'M', 'L'],
      avgRating: item.avgRating || 0,
      numReviews: item.numReviews || 0,
      ratingDistribution: item.ratingDistribution || [],
      numSales: item.numSales || 0,
      isPublished: item.isPublished || false,
      reviews: item.reviews || [],
    }));

    await Product.insertMany(transformedData);
    console.log('Clothes data seeded successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedDatabase();