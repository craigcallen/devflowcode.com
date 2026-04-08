import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemBar from './components/ProblemBar'
import StatsBar from './components/StatsBar'
import ProductOverview from './components/ProductOverview'
import MCPDeepDive from './components/MCPDeepDive'
import TokenComparison from './components/TokenComparison'
import Dogfooding from './components/Dogfooding'
import FeatureGrid from './components/FeatureGrid'
import PricingPreview from './components/PricingPreview'
import FooterCTA from './components/FooterCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <ProblemBar />
      <StatsBar />
      <ProductOverview />
      <MCPDeepDive />
      <TokenComparison />
      <Dogfooding />
      <FeatureGrid />
      <PricingPreview />
      <FooterCTA />
    </div>
  )
}
