import Image from 'next/image'
import Navebar from '../../components/navebar/page'
import Footer from '../../components/foorter/page'
import Hero from '../../components/hero/page'
import Promotion from '../../components/promotions/page'

export default function Home() {
  return (
    <div>
      <Navebar />
      <Hero />
      <Promotion />
      <Footer />
    </div>
  )
}
