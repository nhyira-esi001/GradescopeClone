import "./Partners.css"

const Partners = () => {
  const partners = [
    { id: 1, name: "Princeton", logo: "/partners/princeton.svg" },
    { id: 2, name: "Harvard", logo: "/partners/harvard.svg" },
    { id: 3, name: "Washington", logo: "/partners/washington.svg" },
    { id: 4, name: "MIT", logo: "/partners/mit.svg" },
    { id: 5, name: "Stanford", logo: "/partners/stanford.svg" },
  ]

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

