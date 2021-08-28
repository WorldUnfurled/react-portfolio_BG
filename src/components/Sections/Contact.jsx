import './Contact.css'

export default function Contact() {
    return (
        <div id="contact">
            <section className="contact-section">
            <h1 className="contact-h1">
                Contact
            </h1>
            <form className="form">
                <h1>Contact Me</h1>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    required
                />
                <label htmlFor="user">Username</label>
                <input 
                    type="text" 
                    name="user"
                    required
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    name="pass"
                    required
                />
    
                <button type="button">
    
                    Submit
    
                </button>
            </form>
            </section>
        </div>
    );
}