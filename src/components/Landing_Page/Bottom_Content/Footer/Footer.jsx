import React from "react";
import styles from './footer.module.css'; // Add custom styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <button className={styles.footer_get_started}>Get started</button>
        <p>Create or restart your membership</p>
      </div>
      <div className={styles.footer_links}>
        <div className={styles.footer_column}>
          <a href="#faq">FAQ</a>
          <a href="#investor-relations">Investor Relations</a>
          <a href="#gift-cards">Buy Gift Cards</a>
          <a href="#cookie-preferences">Cookie Preferences</a>
          <a href="#legal-guarantee">Legal Guarantee</a>
        </div>
        <div className={styles.footer_column}>
          <a href="#help-center">Help Centre</a>
          <a href="#jobs">Jobs</a>
          <a href="#ways-to-watch">Ways to Watch</a>
          <a href="#corporate-info">Corporate Information</a>
          <a href="#legal-notices">Legal Notices</a>
        </div>
        <div className={styles.footer_column}>
          <a href="#account">Account</a>
          <a href="#netflix-shop">Netflix Shop</a>
          <a href="#terms-of-use">Terms of Use</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#only-on-netflix">Only on Netflix</a>
        </div>
        <div className={styles.footer_column}>
          <a href="#media-center">Media Centre</a>
          <a href="#redeem-gift-cards">Redeem Gift Cards</a>
          <a href="#privacy">Privacy</a>
          <a href="#speed-test">Speed Test</a>
          <a href="#advert-choices">Advert Choices</a>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className="language-selector">
          <select>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <p>Netflix United Kingdom</p>
      </div>
    </footer>
  );
};

export default Footer;
