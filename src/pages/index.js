import Acomplishments from '../components/Acomplishments/Acomplishments'
import ImgRight from '../components/ImgRight/ImgRight'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <ImgRight />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  )
}

export default Home
