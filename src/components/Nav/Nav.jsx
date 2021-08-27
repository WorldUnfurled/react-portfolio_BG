import logo from '../../assets/images/bg_logo_final.png';
import './Nav.css';
// import handleCollapse from '../../assets/js/collapse';
import { Link } from 'react-router-dom';

export default function Nav() {
    function handleCollapse() {
        const nav = document.querySelector('.menu');
        const navLinks = document.querySelectorAll('.menu li');
    
        nav.addEventListener('click', (e) => {
            nav.classList.toggle('nav-active');
    
            navLinks.forEach((link, index) => {
                link.style.animation ? link.style.animation = ''
                : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .35}s`
            });
        });
    }
    return (

        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <Link to="/" className="logo-text">
                    Brooks Gunn
                </Link>
                <ul className="menu">
                    <li><Link to="/bio">About Me</Link></li>
                    <li><Link to="/work">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://pdfhost.io/v/~L8SK8G0d_Resume_0.pdf">Resume</a></li>
                </ul>
                <div className="collapse" onClick={handleCollapse}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
        
    );

}