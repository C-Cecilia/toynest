import { feature as S } from '../../styles/components'
import { IMGS } from '../../constants'
import Button from '../ui/Button'

const FeatureSection = () => (
  <section style={S.wrapper}>
    <div style={S.header}>
      <p style={S.label}>Designed for kids</p>
      <h2 style={S.title}>Find the Perfect Toy for Every Child</h2>
    </div>
    <div style={S.body}>
      <div style={{ flex: 1 }}>
        <h3 style={S.subtitle}>Make childhood more wonderful!</h3>
        <div style={S.underline} />
        <p style={S.desc}>
          From educational games to superhero figures, we offer a world of fun
          and creativity! Safe, colorful, and full of imagination — our toys are
          more than play, they're adventure.
        </p>
        <Button style={S.cta}>GET IT NOW!</Button>
      </div>
      <div style={S.imgBox}>
        <img src={IMGS.childImg} alt="Children playing" style={S.img} />
      </div>
    </div>
  </section>
)

export default FeatureSection
