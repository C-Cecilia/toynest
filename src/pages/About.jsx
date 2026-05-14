import Breadcrumb    from '../components/ui/Breadcrumb'
import StorySection  from '../components/sections/StorySection'
import Newsletter    from '../components/sections/Newsletter'
import InstagramGrid from '../components/sections/InstagramGrid'
import Button        from '../components/ui/Button'
import { about as S } from '../styles/components'
import { IMGS } from '../constants'

// 图左文右区块（100% Responsive）
const DualRow = ({ imgSrc, imgLeft = true, title, desc }) => (
  <div style={{ ...S.dualRow, flexDirection: imgLeft ? 'row' : 'row-reverse' }}>
    <div style={S.dualImg}>
      <img src={imgSrc} alt={title} style={{ width:'100%', height:320, objectFit:'cover', display:'block', borderRadius:12 }} />
    </div>
    <div style={S.dualText}>
      <h3 style={S.dualTitle}>{title}</h3>
      <div style={S.dualLine} />
      <p style={S.dualDesc}>{desc}</p>
      <Button style={S.dualBtn}>GET IT NOW</Button>
    </div>
  </div>
)

const About = () => (
  <div style={S.page}>
    <Breadcrumb items={[{ label:'Home', path:'/' }, { label:'About' }]} />

    {/* 简介 */}
    <div style={{ padding:'56px 60px 32px', textAlign:'center' }}>
      <p style={S.label}>All You Need is Fun!</p>
      <h1 style={S.title}>Introducing ToyStore</h1>
      <p style={{ ...S.desc, maxWidth:640, margin:'0 auto 20px' }}>
        At ToyNest, we believe every child deserves imagination. We have accumulated to
        bringing joy, creativity and learning into everyone's head through carefully crafted toys
        that gradually grow through you. From classic wooden blocks to modern interactive toy
        and helps children grow through play, we are a series of.
      </p>
      <a href="#" style={S.moreLink}>More About Us</a>
    </div>

    {/* 固定背景图（视差效果）*/}
    <div style={{
      ...S.fixedBg,
      backgroundImage: `url(${IMGS.heroBg})`,
    }} />

    {/* Find the Perfect Toy（复用首页文案）*/}
    <div style={{ padding:'56px 60px 0', textAlign:'center' }}>
      <p style={{ color:'#7cb342', fontSize:13, fontWeight:600, textTransform:'uppercase', letterSpacing:1, margin:'0 0 10px' }}>
        Designed for kids
      </p>
      <h2 style={{ fontSize:28, fontWeight:700, margin:0 }}>Find the Perfect Toy for Every Child</h2>
    </div>

    {/* 双栏 1：图右文左 */}
    <DualRow
      imgSrc={IMGS.childImg}
      imgLeft={false}
      title="Make childhood more wonderful!"
      desc="From educational games to superhero figures, we offer a world of fun and creativity! Safe, colorful, and full of imagination — our toys are more than play, they're adventure."
    />

    {/* 双栏 2：图左文右 */}
    <DualRow
      imgSrc={IMGS.ig[4]}
      imgLeft={true}
      title="100% Responsive"
      desc="A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy."
    />

    {/* Watch Our Story（固定背景复用）*/}
    <StorySection />

    <Newsletter />
    <InstagramGrid />
  </div>
)

export default About
