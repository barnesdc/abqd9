import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <section className="hero">
            <h1>Albuquerque Divine Nine</h1>
            <p>
                Uniting the historically Black Greek-letter organizations of the Divine Nine in Albuquerque
                to serve, uplift, and celebrate our community.
            </p>
            <div className="cta">
                <Link className="btn primary" to="/organizations">Explore Organizations</Link>
                <Link className="btn accent" to="/calendar">See Upcoming Events</Link>
            </div>

            <div className="grid" style={{marginTop: '1.5rem'}}>
                <div className="card">
                    <h3>What We Do</h3>
                    <p>Service projects, scholarships, mentorship, civic engagement, and cultural events.</p>
                </div>
                <div className="card">
                    <h3>Get Involved</h3>
                    <p>Join an event, volunteer, or partner with us to make an impact in ABQ.</p>
                </div>
                <div className="card">
                    <h3>Stay Informed</h3>
                    <p>Check our calendar and follow along on social media for the latest updates.</p>
                </div>
            </div>
        </section>
    )
}