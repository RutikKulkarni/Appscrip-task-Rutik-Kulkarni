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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    }

    fetchData();
  }, []);

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
      <main className={styles.mainContent}>
        <h1 className={styles.heading}>Our Products</h1>
        <section className={styles.productGrid}>
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              onAddToCart={() => console.log("Add to cart clicked")}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
