
import HeroSection from './components/HeroSection/HeroSection'
import MouseFollower from './components/MouseGlow/MouseFollower'
import MouseGlow from './components/MouseGlow/MouseFollower'
import ProductSection from './components/ProductSection/ProductSection'
import VideoSection from './components/VideoSection/VideoSection'

function App() {
  return (
    <div>
      <main>
        <MouseFollower />
        <HeroSection/>
        <VideoSection />
        <ProductSection />
      </main>

    </div>
  )
}

export default App
