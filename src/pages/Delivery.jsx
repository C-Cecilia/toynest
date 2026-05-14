import Breadcrumb    from '../components/ui/Breadcrumb'
import Newsletter    from '../components/sections/Newsletter'
import InstagramGrid from '../components/sections/InstagramGrid'
import { delivery as S } from '../styles/components'

const specs = [
  { label: 'Width',  value: '38 in' },
  { label: 'Height', value: '32 in' },
  { label: 'Length', value: '21.5 in' },
  { label: 'Weight', value: '24 in' },
]

const Delivery = () => (
  <div style={S.page}>
    <Breadcrumb items={[{ label:'Home', path:'/' }, { label:'Delivery' }]} />

    <div style={S.inner}>
      {/* 左栏：文字内容 */}
      <div style={S.left}>
        <h1 style={S.pageTitle}>Delivery Info</h1>
        <div style={S.divider} />

        <h2 style={S.h2}>How do we deliver your toys?</h2>
        <p style={S.p}>
          At ToyNest, we know that every toy is not just a commodity, but a surprise that
          children look forward to. To this end, we carefully design every delivery link to
          ensure that the toys are delivered to you safely, quickly and intact.
        </p>

        <h2 style={S.h2}>Packaging and toy protection</h2>
        <p style={S.p}>
          Each order is packed with environmentally friendly, pressure-proof and
          moisture-proof materials to prevent the toys from being damaged during
          transportation. For fragile and combined toys, we will use reinforced cushioning
          packaging to ensure that they are intact.
        </p>

        <h2 style={S.h2}>Package tracking service</h2>
        <p style={S.p}>
          We provide real-time package tracking service for all orders. After shipment,
          you will receive an email or SMS with the logistics tracking number and tracking
          link, and you can check the current delivery progress at any time.
        </p>

        <h2 style={S.h2}>Gift wrapping service</h2>
        <p style={S.p}>
          We support personalized gift packaging, suitable for birthdays, Christmas,
          Children's Day and other festivals
        </p>
        <ul>
          <li style={S.li}>Optional gift box packaging and greeting card</li>
          <li style={S.li}>Provide customized blessing service</li>
          <li style={S.li}>
            Please note when placing an order or contact customer service.
            Some services require additional charges.
          </li>
        </ul>
      </div>

      {/* 右栏：规格卡片 */}
      <div style={S.right}>
        <p style={S.sku}>SKU:35009</p>
        <div style={S.specCard}>
          {specs.map((s, i) => (
            <div
              key={s.label}
              style={{ ...S.specRow, borderBottom: i < specs.length - 1 ? undefined : 'none' }}
            >
              <span style={S.specLabel}>{s.label}</span>
              <span style={S.specValue}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Newsletter />
    <InstagramGrid />
  </div>
)

export default Delivery
