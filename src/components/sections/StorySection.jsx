import { story as S } from '../../styles/components'
import { IMGS } from '../../constants'

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const StorySection = () => (
  <section style={S.wrapper}>
    <img src={IMGS.storyBg} alt="Our story" style={S.img} />
    <div style={S.overlay} />
    <div style={S.content}>
      <p style={S.label}>About The Shop</p>
      <h2 style={S.title}>Watch Our Story</h2>
      <p style={S.desc}>
        There is no universal formula to make children smile.
        Behind every toy, there is a story and dream of childhood.
      </p>
      <button style={S.playBtn}>
        <PlayIcon />
      </button>
    </div>
  </section>
)

export default StorySection
