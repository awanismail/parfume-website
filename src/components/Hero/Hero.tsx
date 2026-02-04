import { WHATSAPP_MESSAGES } from '@/constants'
import { createWhatsAppLink } from '@/lib/utils'
import './Hero.css'

const Hero = () => {
  const whatsappLink = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">
            <i className="fas fa-star"></i> Premium Collection
          </span>
          <h1>
            Wangi yang <span className="highlight">Mencerminkan</span> Karaktermu
          </h1>
          <p className="hero-subtitle">
            Baboo Parfume menghadirkan koleksi parfum eksklusif dengan aroma unik
            yang tidak akan kamu temukan di tempat lain. Setiap tetes adalah
            pernyataan tentang siapa dirimu.
          </p>
          <div className="hero-cta">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
              Pesan Sekarang
            </a>
            <a href="#products" className="btn btn-secondary">
              <i className="fas fa-search"></i>
              Lihat Koleksi
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Pelanggan Puas</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Varian Aroma</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Original</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <i className="fas fa-spray-can"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
