export default function Calendar() {
    return (
    <section>
        <h1>Community Calendar</h1>
        <p className="muted">Embed your Google Calendar here for automatic updates.</p>
        <div style={{marginTop: '1rem'}}>
            {/* Replace the src with your public Google Calendar embed link */}
            <iframe
            title="ABQD9 Calendar"
            // src="https://calendar.google.com/calendar/embed?src=YOUR_PUBLIC_CAL_ID&ctz=America%2FDenver"
            src="https://calendar.google.com/calendar/embed?src=iotapsilambda%40gmail.com&ctz=America%2FDenver"
            style={{ border: 0, width: '100%', height: '70vh' }}
            frameBorder="0"
            scrolling="no"
            />
        </div>
    </section>
    )
}