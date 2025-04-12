import React, { useState } from 'react';
import styles from './ProductFilter.module.css';

interface ProductFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onSortChange: (sortBy: string) => void;
  selectedCategory: string;
  selectedSort: string;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  onCategoryChange,
  onSortChange,
  selectedCategory,
  selectedSort
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'name-asc', label: 'Name: A-Z' },
    { value: 'name-desc', label: 'Name: Z-A' },
  ];

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <h2>Products</h2>
        <div className={styles.sortContainer}>
          <label htmlFor="sort">Sort by:</label>
          <select 
            id="sort" 
            className={styles.sortSelect}
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          className={styles.mobileFilterButton}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          Filters
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 12H9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className={`${styles.filterSidebar} ${isFilterOpen ? styles.open : ''}`}>
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Categories</h3>
          <ul className={styles.categoryList}>
            <li 
              className={`${styles.categoryItem} ${selectedCategory === '' ? styles.active : ''}`}
              onClick={() => { 
                onCategoryChange(''); 
                setIsFilterOpen(false);
              }}
            >
              All Products
            </li>
            {categories.map((category) => (
              <li 
                key={category} 
                className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => { 
                  onCategoryChange(category); 
                  setIsFilterOpen(false);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Price Range</h3>
          <div className={styles.priceRange}>
            <input type="range" min="0" max="1000" className={styles.priceSlider} />
            <div className={styles.priceInputs}>
              <div className={styles.priceInput}>
                <label>Min</label>
                <input type="number" placeholder="0" min="0" />
              </div>
              <div className={styles.priceInput}>
                <label>Max</label>
                <input type="number" placeholder="1000" min="0" />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Rating</h3>
          <div className={styles.ratingFilter}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className={styles.ratingOption}>
                <input type="checkbox" id={`rating-${rating}`} />
                <label htmlFor={`rating-${rating}`}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < rating ? styles.starFilled : styles.star}>★</span>
                  ))}
                  {rating === 1 ? ' & Up' : ' & Up'}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button className={styles.closeFilterButton} onClick={() => setIsFilterOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;