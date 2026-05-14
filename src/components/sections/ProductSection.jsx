import { Link } from "react-router-dom"
import { productSection as S } from '../../styles/components'
import { IMGS } from '../../constants'
import ProductCard from '../ui/ProductCard'

const ProductSection = ({ title, data }) => (
  <section style={S.wrapper}>
    <div style={S.header}>
      <h2 style={S.title}>{title}</h2>
      <Link to="/catalog" style={S.seeAll}>
        See All Toys
        <img src={IMGS.icons.arrowRight} alt="→" width={14} height={14} />
      </Link>
    </div>
    <div style={S.underline} />
    <div style={S.grid}>
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
)

export default ProductSection
