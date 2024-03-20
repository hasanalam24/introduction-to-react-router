import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a> */}

                {/* Anchor tag use korle page load dekhai, kinto Link use korle tokhon r load dekhabe na */}
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;