import { instagram as S } from '../../styles/components'
import { IMGS } from '../../constants'
import Button from '../ui/Button'

const InstagramGrid = () => (
  <section style={S.wrapper}>
    <h2 style={S.title}>We're on Instagram</h2>
    <div style={S.grid}>
      {IMGS.ig.map((src, i) => (
        <div key={i} style={S.photoBox}>
          <img
            src={src}
            alt={`Instagram ${i + 1}`}
            style={S.photo}
            onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        </div>
      ))}
    </div>
    <Button style={S.moreBtn}>See More Photos</Button>
  </section>
)

export default InstagramGrid
