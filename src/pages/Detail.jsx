import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProducts }  from '../context/ProductContext'
import { useCart }      from '../context/CartContext'
import Breadcrumb       from '../components/ui/Breadcrumb'
import { detail as S }  from '../styles/components'

const specs = [
  { label:'Width',  value:'38 in' },
  { label:'Height', value:'32 in' },
  { label:'Length', value:'21.5 in' },
  { label:'Weight', value:'24 in' },
]

const Detail = () => {
  const { id }       = useParams()
  const { products } = useProducts()
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  const product = products.find(p => p.id === Number(id))

  if (!product) return (
    <div style={{ padding:'80px 60px', textAlign:'center', color:'#666' }}>
      Product not found. <Link to="/catalog">Back to Catalog</Link>
    </div>
  )

  const handleAdd = () => {
    if (qty > 0) addToCart(product, qty)
  }

  return (
    <div style={S.page}>
      <Breadcrumb items={[{ label:'Home', path:'/' }, { label:'Detail' }]} />

      {/* 主卡片 */}
      <div style={S.card}>
        {/* 上半：名称 / 描述 / 价格 / 数量 + 图片 */}
        <div style={S.top}>
          <div style={S.left}>
            <h1 style={S.name}>{product.name}</h1>
            <p style={S.desc}>{product.describe}</p>
            <p style={S.price}>${product.price.toFixed(2)}USD</p>
            <div style={S.qtyRow}>
              {/* 数量 spinner */}
              <div style={S.qtyBox}>
                <span style={S.qtyNum}>{qty}</span>
                <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
                  <button style={S.qtyBtn} onClick={() => setQty(q => q + 1)}>▲</button>
                  <button style={S.qtyBtn} onClick={() => setQty(q => Math.max(0, q - 1))}>▼</button>
                </div>
              </div>
              <button style={S.addBtn(qty === 0)} onClick={handleAdd} disabled={qty === 0}>
                Add to Cart
              </button>
            </div>
          </div>
          <div style={S.imgBox}>
            <img src={product.imgUrl} alt={product.name} style={S.img} />
          </div>
        </div>

        {/* 下半：Product Details */}
        <div style={S.detailSec}>
          <div style={S.skuRow}>
            <span /> <span style={S.sku}>SKU:35009</span>
          </div>
          <div style={S.detailRow}>
            {/* 左：文本描述 */}
            <div style={S.detailLeft}>
              <h2 style={S.detailH1}>Product Details</h2>
              <div style={S.detailLine} />

              <h3 style={S.detailH2}>Add Your Product Description</h3>
              <p style={S.detailP}>
                The rich text element allows you to create and format headings, paragraphs,
                blockquotes, images, and video all in one place instead of having to add and
                format them individually. Just double-click and easily create content. A rich
                text element can be used with static or dynamic content.
              </p>

              <h3 style={S.detailH2}>Simple &amp; Elegant Template</h3>
              <p style={S.detailP}>
                Headings, paragraphs, blockquotes, figures, images, and figure captions can
                all be styled after a class is added to the rich text element.
              </p>
              <ul>
                <li style={S.detailLi}>Beautifully Designed</li>
                <li style={S.detailLi}>Fully Responsive</li>
                <li style={S.detailLi}>CMS Content</li>
                <li style={S.detailLi}>Smooth Animations</li>
              </ul>
              <p style={{ ...S.detailP, marginTop:16 }}>
                A successful marketing plan relies heavily on the pulling-power of advertising
                copy. Writing result-oriented ad copy is difficult, as it must appeal to,
                entice, and convince consumers to take action.
              </p>
              <p style={S.detailP}>Perfect Choice for Your Business</p>
              <p style={S.detailP}>
                Grabbing the consumer's attention isn't enough; you have to keep that
                attention for at least a few seconds. This is where your benefits come into
                play or a product description that sets your offer apart from the others.
              </p>
            </div>

            {/* 右：规格卡片 */}
            <div style={S.specCard}>
              {specs.map((s, i) => (
                <div key={s.label} style={{
                  ...S.specRow,
                  borderBottom: i < specs.length - 1 ? undefined : 'none',
                }}>
                  <span style={S.specLabel}>{s.label}</span>
                  <span style={S.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 留出底部空间 */}
      <div style={{ height:48 }} />
    </div>
  )
}

export default Detail
