export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="footer-inner">
                <div>© {year} ABQD9 - Albuquerque Divine Nine</div>
                <div>Built with React + Vite. Community-first, service-driven.</div>
            </div>
        </footer>
    )
}