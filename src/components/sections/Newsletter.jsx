import { useState } from 'react'
import { newsletter as S } from '../../styles/components'
import { IMGS } from '../../constants'

const Newsletter = () => {
  const [email, setEmail]           = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) setSubscribed(true)
  }

  return (
    <section style={S.section}>
      <div style={S.wrapper}>
        <div style={S.left}>
          <div style={S.iconBox}>
            <img src={IMGS.icons.paperplane} alt="" width={28} height={28} />
          </div>
          <p style={S.text}>
            Subscribe to our newsletter &amp; get{' '}
            <span style={S.accent}>10% discount!</span>
          </p>
        </div>

        {subscribed ? (
          <p style={S.success}>✓ You're subscribed!</p>
        ) : (
          <div style={S.form}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={S.input}
            />
            <button onClick={handleSubscribe} style={S.btn}>Subscribe</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Newsletter
