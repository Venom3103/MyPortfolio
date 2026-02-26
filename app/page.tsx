import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <div className="space-y-12 py-12">
      <Hero />
      <Projects />
            <Experience />
      <About />
      <Contact />
    </div>
  )
}