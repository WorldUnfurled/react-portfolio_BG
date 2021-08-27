import logo from '../../assets/images/bg_logo_final.png';
import handleCollapse from '../../assets/js/collapse';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (

        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="logo-text">
                    Brooks Gunn
                </div>
                <ul className="menu">
                    <li><Link to="/bio" id="bio-jump" href="#bio">Bio</Link></li>
                    <li><Link to="/work" id="work-jump" href="#work">Work</Link></li>
                    <li><Link to="/contact" id="contact-jump" href="#contact">Contact</Link></li>
                    <li><Link id="contact-jump" href="https://pdfhost.io/v/~L8SK8G0d_Resume_0.pdf">Resume</Link></li>
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