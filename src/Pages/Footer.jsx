const Footer = () => {
  return (
    <div className="mt-10" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">About us</h6>
          <p>Welcome to Our resturan garden where culinary excellence meets exceptional hospitality. Established in [Year], we pride ourselves on offering a delightful dining experience that tantalizes your taste buds and leaves you craving for more.</p>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <a className="link link-hover">www/mimran/facebook.com</a>
          <a className="link link-hover">www/instagram.com</a>
          <a className="link link-hover">www/twiter.com</a>
          <a className="link link-hover">www/teligram.com</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover">123 citty ville Dhaka</a>
          <a className="link link-hover">gmaim:chacha@chachi.gmail.com</a>
          <a className="link link-hover">Phone : 700-800</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
