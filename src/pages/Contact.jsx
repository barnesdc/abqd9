export default function Contact() {
    return (
    <section>
        <h1>Contact Us</h1>
        <p className="muted">Use the form below or email us at contact@abqd9.com</p>


        {/* For production on HostPapa shared hosting, use a simple PHP handler or a service like Formspree */}
        <form className="card" method="POST" action="https://formspree.io/f/your-id">
            <label>
                Name
                <input name="name" required />
            </label>
            <label>
                Email
                <input type="email" name="email" required />
            </label>
            <label>
                Message
                <textarea name="message" rows="5" required />
            </label>
            <button className="btn accent" type="submit">Send</button>
        </form>


        <style>{`
            form.card { display: grid; gap: 0.8rem; max-width: 640px; margin-top: 1rem; }
            label { display: grid; gap: 0.4rem; color: var(--muted); }
            input, textarea {
            width: 100%; padding: 0.7rem 0.8rem; border-radius: 10px; border: 1px solid #2a2d37;
            background: #1b1e25; color: var(--text);
            }
            button { width: fit-content; }
        `}</style>
    </section>
    )
}