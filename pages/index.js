import { About,Footer, Header, Work, Testimonials, Skills } from "../container"
import { Navbar } from "../Components"

export default function Home() {
  return (
    <div className="bg-slate-200 ">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
