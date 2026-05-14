import { useCart } from '../../context/CartContext'
import { cartModal as S } from '../../styles/components'
import { useNavigate } from 'react-router-dom'

const QtySpinner = ({ qty, onUp, onDown }) => (
  <div style={S.qtyBox}>
    <span style={S.qtyNum}>{qty}</span>
    <div style={S.qtyBtn}>
      <button style={S.qtyBtn} onClick={onUp}>▲</button>
      <button style={S.qtyBtn} onClick={onDown}>▼</button>
    </div>
  </div>
)

const CartModal = () => {
  const { cartItems, updateQty, removeItem, subtotal, isModalOpen, setIsModalOpen } = useCart()
  const navigate = useNavigate()

  if (!isModalOpen) return null

  const handleCheckout = () => {
    setIsModalOpen(false)
    navigate('/cart')
  }

  return (
    <div style={S.overlay} onClick={() => setIsModalOpen(false)}>
      <div style={S.box} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={S.header}>
          <h2 style={S.title}>Your Cart</h2>
          <button style={S.closeBtn} onClick={() => setIsModalOpen(false)}>×</button>
        </div>

        {/* Items */}
        {cartItems.length === 0 ? (
          <p style={S.emptyMsg}>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(({ product, qty }) => (
              <div key={product.id} style={S.item}>
                <img src={product.imgUrl} alt={product.name} style={S.itemImg} />
                <div style={S.itemInfo}>
                  <p style={S.itemName}>{product.name}</p>
                  <p style={S.itemPrice}>${product.price.toFixed(2)} USD</p>
                  <button style={S.removeBtn} onClick={() => removeItem(product.id)}>
                    Remove
                  </button>
                </div>
                <div style={S.qtyBox}>
                  <span style={S.qtyNum}>{qty}</span>
                  <div style={{ display:'flex', flexDirection:'column', gap:1 }}>
                    <button style={S.qtyBtn} onClick={() => updateQty(product.id, qty + 1)}>▲</button>
                    <button style={S.qtyBtn} onClick={() => updateQty(product.id, qty - 1)}>▼</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div style={S.footer}>
              <div style={S.subtotal}>
                <span style={S.subtotalLabel}>Subtotal</span>
                <span style={S.subtotalVal}>${subtotal.toFixed(2)} USD</span>
              </div>
              <button style={S.checkoutBtn} onClick={handleCheckout}>
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal
