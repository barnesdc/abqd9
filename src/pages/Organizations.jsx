const orgs = [
  { name: 'Alpha Phi Alpha Fraternity, Inc.', url: 'https://apa1906.net/', logo: '/apa.jpg' },
  { name: 'Alpha Kappa Alpha Sorority, Inc.', url: 'https://aka1908.com/', logo: '/aka.jpg' },
  { name: 'Kappa Alpha Psi Fraternity, Inc.', url: 'https://kappaalphapsi1911.com/', logo: '/kapsi.jpg' },
  { name: 'Omega Psi Phi Fraternity, Inc.', url: 'https://oppf.org/', logo: '/qpsiphi.jpg' },
  { name: 'Delta Sigma Theta Sorority, Inc.', url: 'https://deltasigmatheta.org/', logo: '/dst.jpg' },
  { name: 'Phi Beta Sigma Fraternity, Inc.', url: 'https://phibetasigma1914.org/', logo: '/pbs.jpg' },
  { name: 'Zeta Phi Beta Sorority, Inc.', url: 'https://zphib1920.org/', logo: '/zphib.jpg' },
  { name: 'Sigma Gamma Rho Sorority, Inc.', url: 'https://www.sgrho1922.org/', logo: '/sgrho.jpg' },
  { name: 'Iota Phi Theta Fraternity, Inc.', url: 'https://iotaphitheta.org/', logo: '/iphit.jpg' },
]


export default function Organizations() {
    return (
    <section>
        <h1>Member Organizations</h1>
        <p className="muted">Click a logo or name to learn more.</p>
        <div className="grid" style={{marginTop: '1rem'}}>
            {orgs.map(o => (
                <a key={o.name} className="card org-card" href={o.url} target="_blank" rel="noreferrer">
                    <img
                        className="org-logo"
                        src={o.logo}
                        alt={`${o.name} logo`}
                        width="56"
                        height="56"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/placeholder.jpg'; }}
                    />
                    <div className="org-text">
                        <h3>{o.name}</h3>
                        <p>Official site</p>
                    </div>
                </a>
            ))}
        </div>
    </section>
    )
}