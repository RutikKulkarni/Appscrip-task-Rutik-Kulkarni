"use Client";
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Footer from "@/components/Footer/Footer";
import styles from "./Home.module.css";

async function getProducts() {
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

export default async function Home() {
  const products = await getProducts();

  if (!products || products.length === 0) {
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
          {products.map(
            (product: { id: number; title: string; image: string }) => (
              <Card
                key={product.id}
                title={product.title}
                image={product.image}
                onAddToCart={() => console.log("Add to cart clicked")}
              />
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
