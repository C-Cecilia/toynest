import { Link } from 'react-router-dom'
import { breadcrumb as S } from '../../styles/components'

const Breadcrumb = ({ items }) => (
  <div style={S.bar}>
    <div style={S.pill}>
      {items.map((item, i) => (
        <span key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
          {i > 0 && <span style={S.sep}>→</span>}
          {item.path
            ? <Link to={item.path} style={S.link}>{item.label}</Link>
            : <span style={S.cur}>{item.label}</span>
          }
        </span>
      ))}
    </div>
  </div>
)

export default Breadcrumb
