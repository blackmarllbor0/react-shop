export const Footer = () => {
    return (
        <footer className="page-footer cyan darken-2">
            <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/blackmarllbor0/react-shop" target="_blank" rel="noreferrer"> Repo </a>
            </div>
            </div>
      </footer>
    );
};