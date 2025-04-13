import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  //   onClick,
  fullWidth = false,
  icon,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      //   onClick={onClick}
      className={`${styles.button} ${
        fullWidth ? styles.fullWidth : ""
      } ${className}`}
      aria-label={ariaLabel}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
