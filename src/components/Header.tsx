import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4">
      <nav className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 text-sm">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/number-maps" className="hover:text-primary transition-colors">Number Maps</Link>
        <Link to="/learning" className="hover:text-primary transition-colors">Learning Modules</Link>
      </nav>
    </header>
  );
};

export default Header;
