"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Footer from "@/components/Footer/Footer";
import styles from "./Home.module.css";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(fetchedProducts.map((product) => product.category))
      );
      setCategories(uniqueCategories);

      const maxPrice = Math.max(
        ...fetchedProducts.map((product) => product.price)
      );
      setPriceRange(Math.ceil(maxPrice));

      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategories, priceRange]);

  const applyFilters = () => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    result = result.filter((product) => product.price <= priceRange);

    setFilteredProducts(result);
  };

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    const maxPrice = Math.max(...products.map((product) => product.price));
    setPriceRange(Math.ceil(maxPrice));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  if (loading) {
    return (
      <div>
        <main className={styles.loadingContainer}>
          <LoadingSpinner />
        </main>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <div className={styles.mainLayout}>
          {/* Filter sidebar */}
          <aside
            className={`${styles.filterSidebar} ${
              showFilters ? styles.showFilters : styles.hideFilters
            }`}
          >
            <div className={styles.filterSection}>
              <h2>Filters</h2>
              <button className={styles.resetButton} onClick={resetFilters}>
                Reset Filters
              </button>

              <div className={styles.filterGroup}>
                <h3>Categories</h3>
                {categories.map((category) => (
                  <div key={category} className={styles.filterCheckbox}>
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <label htmlFor={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  </div>
                ))}
              </div>

              <div className={styles.filterGroup}>
                <h3>Price Range: ${priceRange}</h3>
                <input
                  aria-label="Price Range Slider"
                  type="range"
                  min="0"
                  max={Math.ceil(
                    Math.max(...products.map((product) => product.price))
                  )}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className={styles.priceSlider}
                />
                <div className={styles.priceLabels}>
                  <span>$0</span>
                  <span>
                    $
                    {Math.ceil(
                      Math.max(...products.map((product) => product.price))
                    )}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main
            className={`${styles.mainContent} ${
              showFilters ? styles.withFilters : styles.withoutFilters
            }`}
          >
            <div className={styles.headingRow}>
              <h1 className={styles.heading}>Our Products</h1>
              <button className={styles.filterToggle} onClick={toggleFilters}>
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>
            <p className={styles.resultCount}>
              {filteredProducts.length} products found
            </p>

            {filteredProducts.length === 0 ? (
              <div className={styles.noResults}>
                <p>No products match your filters.</p>
                <button className={styles.resetButton} onClick={resetFilters}>
                  Reset Filters
                </button>
              </div>
            ) : (
              <section className={styles.productGrid}>
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    onAddToCart={() => console.log("Add to cart clicked")}
                  />
                ))}
              </section>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
