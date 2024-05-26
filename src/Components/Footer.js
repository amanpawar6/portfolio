const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="social-links">
          {/* <a href="https://twitter.com/amanpawar6" class="twitter">
            <i class="bx bxl-twitter"></i>
          </a> */}
          <a
            href="https://www.instagram.com/ig.amanrajput6/"
            target="_blank"
            rel="noreferrer"
            class="instagram"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/amanpawar6/"
            target="_blank"
            rel="noreferrer"
            class="google-plus">
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amanpawar/"
            target="_blank"
            rel="noreferrer"
            class="linkedin"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:aman.pawar.7.1997@gmail.com">
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <div class="credits" style={{ color: "#74808a" }}>
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
          React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
