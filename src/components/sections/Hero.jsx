import { hero } from '../../styles/components'
import { IMGS } from '../../constants'

const Hero = () => (
  <section style={hero.wrapper}>
    <img src={IMGS.heroBg} alt="ToyNest banner" style={hero.img} />
  </section>
)

export default Hero
