import React from 'react';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <div className={styles.grid}>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className={styles.gridItem}>
                        <ProductCard product={product} />
                    </div>
                ))
            ) : (
                <div className={styles.noProducts}>
                    <p>No products found.</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;