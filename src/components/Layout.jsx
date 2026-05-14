import { Link, NavLink } from 'react-router-dom'
import SocialIcon from './ui/SocialIcon'
import { topBar, navbar, footer } from '../styles/components'
import { colors } from '../styles/tokens'
import { CONTACT_INFO, SOCIAL_ICONS, NAV_LINKS, FOOTER_LINKS, IMGS } from '../constants'
import { useCart } from '../context/CartContext'

// ─── TopBar ───────────────────────────────────────────────────────────────────
export const TopBar = () => (
  <div style={topBar.wrapper}>
    <span>
      Call Us: {CONTACT_INFO.phone} &nbsp;&nbsp; Email: {CONTACT_INFO.email}
    </span>
    <div style={topBar.icons}>
      {SOCIAL_ICONS.map(({ src, label }) => (
        <SocialIcon key={label} src={src} label={label} />
      ))}
    </div>
  </div>
)

// ─── Navbar ───────────────────────────────────────────────────────────────────
export const Navbar = () => {
  const { totalCount, setIsModalOpen } = useCart()
  return (
    <header style={navbar.wrapper}>
      <div style={navbar.left}>
        <Link to="/" style={navbar.logo}>ToyNest</Link>
        <nav style={navbar.nav}>
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) => ({
                ...navbar.link,
                color: isActive ? colors.green : colors.text,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* 购物车图标：点击打开弹窗 */}
      <button style={navbar.cartBtn} onClick={() => setIsModalOpen(true)}>
        <img src={IMGS.icons.cart} alt="Cart" width={20} height={20} />
        Cart
        <span style={navbar.badge}>{totalCount}</span>
      </button>
    </header>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export const Footer = () => (
  <footer style={footer.wrapper}>
    <div style={footer.top}>
      <span style={footer.logo}>ToyNest</span>
      <nav style={footer.nav}>
        {FOOTER_LINKS.map(({ label, path }) => (
          <Link key={path} to={path} style={footer.link}>{label}</Link>
        ))}
      </nav>
      <div style={footer.icons}>
        {SOCIAL_ICONS.map(({ src, label }) => (
          <SocialIcon key={label} src={src} label={label} />
        ))}
      </div>
    </div>
    <div style={footer.bottom}>
      <span style={footer.copy}>Create beauty with heart</span>
      <span style={footer.copy}>Let every child find his or her own happiness</span>
    </div>
  </footer>
)
