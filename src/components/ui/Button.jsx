import { colors, radius } from '../../styles/tokens'

const variants = {
  primary: { background:colors.green,  color:colors.white, border:'none' },
  ghost:   { background:colors.white,  color:colors.text,  border:'none' },
  outline: { background:'transparent', color:colors.green, border:`1px solid ${colors.green}` },
}

const Button = ({ children, variant = 'primary', style = {}, ...props }) => (
  <button
    style={{
      ...variants[variant],
      borderRadius: radius.pill,
      padding:      '9px 24px',
      fontSize:     14,
      fontWeight:   600,
      cursor:       'pointer',
      fontFamily:   'inherit',
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
)

export default Button
