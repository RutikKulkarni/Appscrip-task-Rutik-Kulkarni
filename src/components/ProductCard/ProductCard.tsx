import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.image}
                        priority={false}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>

                <div className={styles.rating}>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.round(product.rating.rate) ? styles.starFilled : styles.star}>★</span>
                        ))}
                    </div>
                    <span className={styles.ratingCount}>({product.rating.count})</span>
                </div>

                <div className={styles.price}>
                    ${product.price.toFixed(2)}
                </div>

                <button className={styles.addToCart}>
                    Add to Cart
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;