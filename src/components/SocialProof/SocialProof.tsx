import { testimonials } from '@/constants/data'
import './SocialProof.css'

const SocialProof = () => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ))
  }

  return (
    <section className="social-proof" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Apa Kata Mereka?</h2>
          <p>
            Bergabung dengan ratusan pelanggan puas yang telah merasakan
            keunikan Baboo Parfume
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">
                <i className="fas fa-quote-left quote-icon"></i>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
        <div className="trust-badges">
          <div className="trust-badge">
            <i className="fas fa-shield-alt"></i>
            <span>100% Original</span>
          </div>
          <div className="trust-badge">
            <i className="fas fa-truck"></i>
            <span>Pengiriman Cepat</span>
          </div>
          <div className="trust-badge">
            <i className="fas fa-undo"></i>
            <span>Garansi Kepuasan</span>
          </div>
          <div className="trust-badge">
            <i className="fas fa-headset"></i>
            <span>Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
