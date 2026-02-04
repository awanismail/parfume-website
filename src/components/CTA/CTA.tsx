import { WHATSAPP_MESSAGES } from '@/constants'
import { createWhatsAppLink } from '@/lib/utils'
import './CTA.css'

const CTA = () => {
  const whatsappLink = createWhatsAppLink(WHATSAPP_MESSAGES.consultation)

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <span className="cta-badge">
            <i className="fas fa-gift"></i> Promo Spesial
          </span>
          <h2>Siap Untuk Tampil Berbeda?</h2>
          <p>
            Jangan lewatkan kesempatan untuk memiliki parfum dengan karakter
            unik yang mencerminkan kepribadianmu. Hubungi kami sekarang dan
            dapatkan rekomendasi parfum terbaik sesuai seleramu!
          </p>
          <div className="cta-features">
            <div className="cta-feature">
              <i className="fas fa-check-circle"></i>
              <span>Konsultasi Gratis</span>
            </div>
            <div className="cta-feature">
              <i className="fas fa-check-circle"></i>
              <span>Pengiriman Cepat</span>
            </div>
            <div className="cta-feature">
              <i className="fas fa-check-circle"></i>
              <span>Garansi Original</span>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-large"
          >
            <i className="fab fa-whatsapp"></i>
            Chat Sekarang via WhatsApp
          </a>
          <p className="cta-note">
            <i className="fas fa-bolt"></i>
            Respon cepat, langsung dilayani admin kami
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
