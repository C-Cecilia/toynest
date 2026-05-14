import { createContext, useContext, useState } from 'react'
import defaultProducts from '../data/products'

const ProductContext = createContext(null)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultProducts)

  // 新增商品，ID 从现有最大值 +1 开始
  const addProduct = (product) => {
    const maxId = products.reduce((max, p) => Math.max(max, p.id), 0)
    setProducts(prev => [...prev, { ...product, id: maxId + 1 }])
  }

  // 编辑商品（前 16 条不可改）
  const editProduct = (id, updates) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updates } : p))
    )
  }

  // 删除商品（前 16 条不可删）
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
