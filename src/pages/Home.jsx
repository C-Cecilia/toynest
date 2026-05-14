import Hero           from '../components/sections/Hero'
import CategoryCards  from '../components/sections/CategoryCards'
import ProductSection from '../components/sections/ProductSection'
import StorySection   from '../components/sections/StorySection'
import FeatureSection from '../components/sections/FeatureSection'
import Newsletter     from '../components/sections/Newsletter'
import InstagramGrid  from '../components/sections/InstagramGrid'
import { stuffedAnimals, woodenToys } from '../data/products'

const Home = () => (
  <main>
    <Hero />
    <CategoryCards />
    <ProductSection title="Stuffed Animals" data={stuffedAnimals} />
    <ProductSection title="Wooden Toys"     data={woodenToys}     />
    <StorySection />
    <FeatureSection />
    <Newsletter />
    <InstagramGrid />
  </main>
)

export default Home
