import './Bio.css'
import me from '../../assets/images/dog_and_me.jpg'

export default function Bio() {
    return (
        <div id="bio">
            <section className="bio-section">
            <h1 className="main-h1">
                About Me
            </h1>
            <div className="container">
                <h1 className="name-h1">Brooks Gunn</h1>
                <h2 className="title-h2">Web Developer</h2>
                <div className="me-image">
                    <img src={me} alt="Me and Dyson the Dog" />
                </div>
                <p className="desc-p">Hi there! I'm Brooks Gunn, an eager web developer that hails from North Georgia. I've loved computers from a young age, and software is definitely my favorite part. If I'm on a team, I strive to be a leader, not just an asset. I want to create things people will remember, so I put maximum effort into projects, and it is always so worth it!</p>
            </div>
            </section>
        </div>
    );
}