import { useState } from 'react'
import { categoryCards as S } from '../../styles/components'
import { colors } from '../../styles/tokens'
import { IMGS } from '../../constants'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'


const CategoryCard = ({ title, color, toyImg, side }) => {
  const [hov, setHov] = useState(false)
  const img = (
    <img
      src={toyImg}
      alt={title}
      style={{
        ...S.toyImg(hov),
        marginLeft:  side === 'right' ? 24 : 0,
        marginRight: side === 'left'  ? 24 : 0,
      }}
    />
  )
  return (
    <div
      style={{ ...S.card(hov), background: color }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {side === 'left'  && img}
      <div>
        <h3 style={S.title}>{title}</h3>
        <Link 
          to={`/catalog?category=${title === 'Wooden Toys' ? 'wooden' : 'stuffed'}`}
          style={{ textDecoration: 'none' }}
          >
          <Button variant="ghost" style={S.shopBtn}>Shop Now</Button>
        </Link>
      </div>
      {side === 'right' && img}
    </div>
  )
}

const CategoryCards = () => (
  <section style={S.wrapper}>
    <CategoryCard title="Stuffed Animals" color={colors.yellow} toyImg={IMGS.plushToy}  side="left"  />
    <CategoryCard title="Wooden Toys"     color={colors.pink}   toyImg={IMGS.woodenToy} side="right" />
  </section>
)

export default CategoryCards
