"use client";

import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaGooglePay,
  FaCcMastercard,
  FaCcAmex,
  FaApplePay,
} from "react-icons/fa";
import { SiOpencollective } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.input}
            />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4 style={{ marginTop: "2rem" }}>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>metta muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>FOLLOW US</h4>
            <div className={styles.socialIcons}>
              <FaInstagram />
              <FaLinkedin />
            </div>
            <h4 style={{ marginTop: "2rem" }}>metta muse ACCEPTS</h4>
            <div className={styles.paymentIcons}>
              <FaGooglePay
                size={40}
                className="text-black"
                title="Google Pay"
              />
              <FaCcMastercard
                size={40}
                className="text-red-500"
                title="MasterCard"
              />
              <FaCcAmex
                size={40}
                className="text-blue-600"
                title="American Express"
              />
              <FaApplePay size={40} className="text-black" title="Apple Pay" />
              <SiOpencollective
                size={40}
                className="text-green-500"
                title="Opay"
              />
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
