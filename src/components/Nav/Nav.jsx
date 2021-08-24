import logo from '../assets/images/bg_logo_final.png';

export default function Nav() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="logo-text">
                    Brooks "Bdog.js" Gunn
                </div>
                <ul className="menu">
                    <li><a id="bio-jump" href="#bio">Bio</a></li>
                    <li><a id="work-jump" href="#work">Work</a></li>
                    <li><a id="contact-jump" href="#contact">Contact</a></li>
                    <li><a id="contact-jump" href="https://pdfhost.io/v/~L8SK8G0d_Resume_0.pdf">Resume</a></li>
                </ul>
            </nav>
        </div>
    );
}