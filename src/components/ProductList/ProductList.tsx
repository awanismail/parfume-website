import { useParfumes } from '@/hooks/useParfumes'
import { WHATSAPP_MESSAGES } from '@/constants'
import { createWhatsAppLink, formatPrice } from '@/lib/utils'
import './ProductList.css'

const ProductList = () => {
  const { products, loading } = useParfumes()

  const handleOrder = (productName: string) => {
    const whatsappLink = createWhatsAppLink(WHATSAPP_MESSAGES.order(productName))
    window.open(whatsappLink, '_blank')
  }

  if (loading) {
    return (
      <section className="products" id="products">
        <div className="container">
          <div className="section-title">
            <h2>Koleksi Parfum Kami</h2>
            <p>Temukan wangi yang sempurna untuk mencerminkan kepribadianmu</p>
          </div>
          <div className="products-loading">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Memuat produk...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Koleksi Parfum Kami</h2>
          <p>Temukan wangi yang sempurna untuk mencerminkan kepribadianmu</p>
        </div>

        {products.length === 0 ? (
          <div className="products-empty">
            <i className="fas fa-box-open"></i>
            <p>
              Produk sedang dalam proses update. Silakan hubungi kami untuk info
              lebih lanjut.
            </p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card fade-in-up ${product.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.featured && (
                  <span className="product-badge">
                    <i className="fas fa-fire"></i> Best Seller
                  </span>
                )}
                <div className="product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="product-placeholder">
                      <i className="fas fa-spray-can"></i>
                    </div>
                  )}
                </div>
                <div className="product-info">
                  {product.category && (
                    <span className="product-category">{product.category}</span>
                  )}
                  <h3>{product.name || 'Parfum'}</h3>
                  {product.description && <p>{product.description}</p>}
                  <div className="product-footer">
                    <span className="product-price">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      className="btn btn-primary btn-small"
                      onClick={() => handleOrder(product.name)}
                    >
                      <i className="fab fa-whatsapp"></i>
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductList
