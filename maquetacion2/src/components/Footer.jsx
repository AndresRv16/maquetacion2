const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">URBAN THREADS</h2>
        <p className="footer-copy">
          &copy; {currentYear} Urban Threads. Todos los derechos reservados. Diseñado por [Andres Ruiz].
        </p>
      </div>
    </footer>
  );
};

export default Footer;