import styles from "../styles/Footer.module.css";
import animations from "../styles/Animations.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${animations.slideUp}`}>
      <a href="https://wikram.in" title="Wikram Typing">
        {"</>"}Wikram
      </a>
    </footer>
  );
};

export default Footer;
