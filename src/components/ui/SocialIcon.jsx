const SocialIcon = ({ src, label, size = 16 }) => (
  <img
    src={src}
    alt={label}
    width={size}
    height={size}
    title={label}
    style={{ display:'block', cursor:'pointer', opacity:0.9 }}
  />
)

export default SocialIcon
