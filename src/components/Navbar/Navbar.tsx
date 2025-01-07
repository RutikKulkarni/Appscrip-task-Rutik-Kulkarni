"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <nav className={styles.mainNav}>
        <div className={styles.logoContainer}>
          <FaBars
            className={`${styles.icon} ${styles.mobileMenuIcon}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <span className={styles.logo}>LOGO</span>
        </div>
        <ul
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.mobileNavOpen : ""
          }`}
        >
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
        <div className={styles.iconContainer}>
          <FaSearch className={styles.icon} />
          <FaHeart className={styles.icon} />
          <FaShoppingBag className={styles.icon} />
          <FaUser className={styles.icon} />
          <span>ENG</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
