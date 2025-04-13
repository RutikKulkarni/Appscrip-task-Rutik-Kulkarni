import styles from "./Card.module.css";
import Button from "@/components/Button/Button";
import { FaShoppingCart } from "react-icons/fa";

interface CardProps {
  title: string;
  image: string;
  onAddToCart: () => void;
}

export default function Card({ title, image, onAddToCart }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          Please log in to view prices. In the meantime, you can add items to
          your cart.
        </p>
      </div>
      <Button
        text="Add to Cart"
        onClick={onAddToCart}
        icon={<FaShoppingCart />}
        fullWidth={true}
        ariaLabel={`Add ${title} to cart`}
        className={styles.button}
      />
    </div>
  );
}
