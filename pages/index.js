import { About,Footer, Header, Work, Testimonials, Skills } from "../container"
import { Navbar } from "../components"
import Head from "next/head"

export default function Home() {


  return (
    <>
    <div>
    <Head>
      <title>Ajay's Portfolio</title>
    </Head>

    </div>
    <div className="bg-slate-200">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonials/> */}
      <Footer/>
    </div>
    </>
  )
}
