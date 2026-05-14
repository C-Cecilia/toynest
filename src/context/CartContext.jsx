import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])   // [{ product, qty }]
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 加入购物车（已存在则叠加数量）
  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        )
      }
      return [...prev, { product, qty }]
    })
    setIsModalOpen(true)
  }

  // 修改某件商品数量（qty <= 0 时自动删除）
  const updateQty = (productId, qty) => {
    if (qty <= 0) {
      removeItem(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, qty } : item
      )
    )
  }

  // 删除某件商品
  const removeItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }

  // 购物车总件数（badge 显示）
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  // 购物车小计金额
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty, 0
  )

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, updateQty, removeItem,
      totalCount, subtotal,
      isModalOpen, setIsModalOpen,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
