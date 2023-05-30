import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import styles from './product-details.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Star } from '@mui/icons-material';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductDetails: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const responseData = response.data;
        const products: Product[] = responseData.products;
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        setProduct(randomProduct);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-star-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half-star" sx={{ color: '#FFD700' }} />);
    }

    return stars;
  };

  return (
    <div>
      <Head>
        <title>{product?.title} - Product Details</title>
        <meta name="description" content={product?.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        />
        <style>
          {`
    @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
    /* Additional styles or font imports can be added here */
  `}
        </style>
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Product Details - {product.title}</h1>

        <div className={styles.contentWrapper}>
          <div className={styles.imageCarousel}>
            <Carousel showArrows={true}>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Product Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className={styles.productInfo}>
            <section>
              <h2 className={styles.subtitle}>Product Description</h2>
              <p>{product.description}</p>
            </section>

            <section>
              <h2 className={styles.subtitle}>Product Information</h2>
              <div className={styles.productInfo}>
                <div className={styles.infoItem}>
                  <p className={styles.infoLabel}>Price:</p>
                  <p className={styles.infoValue}>{product.price}</p>
                </div>
                <div className={styles.infoItem}>
                  <p className={styles.infoLabel}>Discount Percentage:</p>
                  <p className={styles.infoValue}>{product.discountPercentage}</p>
                </div>
                <div className={styles.infoItem}>
                  <p className={styles.infoLabel}>Rating:</p>
                  <div className={styles.ratingStars}>{renderRatingStars(product.rating)}</div>
                </div>
                <div className={styles.infoItem}>
                  <p className={styles.infoLabel}>Stock:</p>
                  <p className={styles.infoValue}>{product.stock}</p>
                </div>
                <div className={styles.infoItem}>
                  <p className={styles.infoLabel}>Brand:</p>
                  <p className={styles.infoValue}>{product.brand}</p>
                </div>
                <div className={styles.infoItem}>
                  <p className={styles.infoLabel}>Category:</p>
                  <p className={styles.infoValue}>{product.category}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className={styles.subtitle}>Product Reviews</h2>
              {/* Display product reviews here */}
            </section>

            <section>
            <button className={styles.addToCartButton} >
              Add to Cart
            </button>

            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
