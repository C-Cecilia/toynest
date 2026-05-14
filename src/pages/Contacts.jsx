import { useState } from 'react'
import Breadcrumb    from '../components/ui/Breadcrumb'
import InstagramGrid from '../components/sections/InstagramGrid'
import Newsletter    from '../components/sections/Newsletter'
import { contacts as S } from '../styles/components'
import { SOCIAL_ICONS }  from '../constants'

const socialColors = ['#1da1f2', '#1877f2', '#e1306c', '#e60023', '#ff0000']
const socialLinks  = SOCIAL_ICONS.map((icon, i) => ({ ...icon, bg: socialColors[i] }))


const Contacts = () => {
  const [form, setForm]     = useState({ name:'', email:'', message:'' })
  const [sent, setSent]     = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true)
  }

  return (
    <div style={S.page}>
      <Breadcrumb items={[{ label:'Home', path:'/' }, { label:'Contacts' }]} />

      {/* Google Map */}
      <div style={S.mapBox}>
        <iframe
          title="ToyNest Location"
          src="https://maps.google.com/maps?q=London&output=embed"
          width="100%"
          height="280"
          style={{ border:0, display:'block' }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* 主体：表单 + 联系信息 */}
      <div style={S.body}>
        {/* 左侧留言表单 */}
        <div style={S.formSide}>
          <h2 style={S.formTitle}>Leave a Message</h2>

          {sent ? (
            <p style={{ color:'#7cb342', fontWeight:600, fontSize:15 }}>
              ✓ Message sent! We'll get back to you soon.
            </p>
          ) : (
            <>
              <label style={S.label}>Full Name</label>
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Enter your name" style={S.input}
              />
              <label style={S.label}>Email Address</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Enter your email" style={S.input}
              />
              <label style={S.label}>Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Enter your message" style={S.textarea}
              />
              <button style={S.sendBtn} onClick={handleSubmit}>Send Message</button>
            </>
          )}
        </div>

        {/* 右侧联系信息 */}
        <div style={S.infoSide}>
          <h2 style={S.infoTitle}>Contact Info</h2>
          <p style={S.infoText}>4293 Euclid Avenue, Los Angeles, CA 90012</p>
          <p style={S.infoText}>+1 213 974-3898</p>
          <a href="mailto:toystore@template.com" style={S.infoLink}>toystore@template.com</a>

          <p style={S.followTitle}>Follow Us</p>
          <div style={S.socialRow}>
            {socialLinks.map(({ label, bg, src }) => (
              <button key={label} style={S.socialBtn(bg)} title={label}>
                <img src={src} alt={label} width={18} height={18} style={{ filter:'brightness(0) invert(1)' }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <InstagramGrid />
      <Newsletter />
    </div>
  )
}

export default Contacts