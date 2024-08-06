import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Clients1 from "@/components/sections/Clients1"
import Contact1 from "@/components/sections/Contact1"
import Cta from "@/components/sections/Cta"
import Faqs from "@/components/sections/Faqs"
import Funfact from "@/components/sections/Funfact"
import Marquee1 from "@/components/sections/Marquee1"
import News1 from "@/components/sections/News1"
import Projects1 from "@/components/sections/Projects1"
import Services1 from "@/components/sections/Services1"
import Slider1 from "@/components/sections/Slider1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Whychoose1 from "@/components/sections/Whychoose1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider1 />
                <Services1 />
                <About1 addClass={"pt-0"} />
                <Marquee1 />
                <Cta />
                <Faqs />
                <Whychoose1 />
                <Testimonial1 />
                <Projects1 />
                <Funfact />
                <News1 />
                <Contact1 />
                <Clients1 />
            </Layout>
        </>
    )
}