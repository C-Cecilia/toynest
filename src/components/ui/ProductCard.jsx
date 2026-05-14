import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productCard as S } from '../../styles/components'

const ProductCard = ({ product }) => {
  const [hov, setHov] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      style={S.wrapper(hov)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => navigate(`/detail/${product.id}`)}
    >
      <div style={S.imgBox}>
        <img src={product.imgUrl} alt={product.name} style={S.img} />
      </div>
      <p style={S.name}>{product.name}</p>
      <button
        style={S.priceBtn}
        onClick={e => { e.stopPropagation(); navigate(`/detail/${product.id}`) }}
      >
        ${product.price.toFixed(2)}USD
      </button>
    </div>
  )
}

export default ProductCard
