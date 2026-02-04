import { SOCIAL_LINKS, CONTACT_INFO } from '@/constants'
import { getCurrentYear } from '@/lib/utils'
import './Footer.css'

const Footer = () => {
  const currentYear = getCurrentYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              <i className="fas fa-spray-can"></i>
              Baboo Parfume
            </h3>
            <p>
              Menghadirkan parfum premium dengan karakter unik yang mencerminkan
              kepribadian Anda. Wangi berbeda untuk mereka yang berbeda.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#why">Mengapa Kami</a>
              </li>
              <li>
                <a href="#products">Produk</a>
              </li>
              <li>
                <a href="#testimonials">Testimoni</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Hubungi Kami</h4>
            <ul>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a
                  href={`https://wa.me/62${CONTACT_INFO.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href={SOCIAL_LINKS.instagram} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={SOCIAL_LINKS.tiktok} aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Baboo Parfume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
