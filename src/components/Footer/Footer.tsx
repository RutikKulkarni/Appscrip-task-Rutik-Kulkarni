import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>ShopNow</h3>
                        <p className={styles.description}>
                            Your one-stop shop for all your needs. Quality products at the best prices.
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 6.75C21.7574 7.14172 20.9539 7.41276 20.1199 7.55625C20.9897 7.05535 21.6374 6.2647 21.9449 5.3325C21.1356 5.80003 20.2521 6.12838 19.3289 6.30375C18.577 5.52015 17.5242 5.04132 16.3846 5.04132C14.1953 5.04132 12.4141 6.8225 12.4141 9.0125C12.4141 9.36763 12.4497 9.70938 12.5339 10.035C9.31323 9.85375 6.43648 8.26488 4.52798 5.9025C4.13798 6.56687 3.91273 7.33238 3.91273 8.145C3.91273 9.69 4.70873 11.0538 5.91148 11.8425C5.24273 11.8288 4.58948 11.6512 4.02448 11.3625V11.415C4.02448 13.3537 5.39973 14.9625 7.24548 15.3713C6.87873 15.4737 6.48373 15.525 6.06973 15.525C5.77598 15.525 5.48223 15.5025 5.20373 15.435C5.79373 16.9987 7.24548 18.16 8.97598 18.2012C7.64373 19.2562 5.96223 19.8862 4.13798 19.8862C3.77123 19.8862 3.42523 19.8638 3.07373 19.8188C4.82998 20.9638 6.91598 21.6163 9.15673 21.6163C16.3709 21.6163 20.3249 15.6062 20.3249 10.4088C20.3249 10.2075 20.3112 10.0175 20.2974 9.8275C21.1261 9.26213 21.8449 8.56012 22.4499 7.74375L22.5 6.75Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Shop</h4>
                        <ul className={styles.links}>
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Featured</a></li>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Discounts</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.links}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Support</h4>
                        <ul className={styles.links}>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} ShopNow. All rights reserved.
                    </p>
                    <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;