import { reasons } from '@/constants/data'
import './Why.css'

const Why = () => {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="section-title">
          <h2>Mengapa Memilih Baboo Parfume?</h2>
          <p>
            Kami tidak hanya menjual parfum, kami memberikan pengalaman wangi
            yang berbeda
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="why-icon">
                <i className={reason.icon}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why
