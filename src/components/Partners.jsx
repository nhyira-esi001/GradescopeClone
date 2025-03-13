const Partners = () => {
  const partners = [
    { name: "Harvard", logo: "/placeholder.svg?height=40&width=40" },
    { name: "MIT", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Stanford", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Washington", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Berkeley", logo: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm font-medium mb-8">Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

