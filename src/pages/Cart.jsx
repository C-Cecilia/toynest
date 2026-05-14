import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Breadcrumb  from '../components/ui/Breadcrumb'
import { cartPage as S } from '../styles/components'

const Cart = () => {
  const { cartItems, updateQty, removeItem, subtotal } = useCart()

  return (
    <div style={S.page}>
      <Breadcrumb items={[{ label:'Home', path:'/' }, { label:'Cart' }]} />
      <h1 style={S.title}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div style={S.empty}>
          <p>Your cart is empty.</p>
          <Link to="/catalog" style={{ color:'#7cb342', fontWeight:600 }}>
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Image</th>
                <th style={S.th}>Product</th>
                <th style={S.th}>Price</th>
                <th style={S.th}>Quantity</th>
                <th style={S.th}>Total</th>
                <th style={S.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ product, qty }) => (
                <tr key={product.id}>
                  <td style={S.td}>
                    <img src={product.imgUrl} alt={product.name} style={S.itemImg} />
                  </td>
                  <td style={S.td}>
                    <p style={S.itemName}>{product.name}</p>
                    <p style={S.itemPrice}>${product.price.toFixed(2)} USD</p>
                  </td>
                  <td style={S.td}>${product.price.toFixed(2)}</td>
                  <td style={S.td}>
                    <div style={S.qtyBox}>
                      <button style={S.qtyBtn} onClick={() => updateQty(product.id, qty - 1)}>−</button>
                      <span style={{ minWidth:24, textAlign:'center', fontWeight:600 }}>{qty}</span>
                      <button style={S.qtyBtn} onClick={() => updateQty(product.id, qty + 1)}>+</button>
                    </div>
                  </td>
                  <td style={S.td}>${(product.price * qty).toFixed(2)}</td>
                  <td style={S.td}>
                    <button style={S.removeLink} onClick={() => removeItem(product.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 合计 + 结算 */}
          <div style={S.totalRow}>
            <span style={S.totalLabel}>Subtotal</span>
            <span style={S.totalVal}>${subtotal.toFixed(2)} USD</span>
            <button style={S.checkoutBtn}>Continue to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
