import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Clients2 from "@/components/sections/Clients2"
import Contact2 from "@/components/sections/Contact2"
import Map from "@/components/sections/Map"
import Marquee2 from "@/components/sections/Marquee2"
import News2 from "@/components/sections/News2"
import Projects2 from "@/components/sections/Projects2"
import Services2 from "@/components/sections/Services2"
import Slider2 from "@/components/sections/Slider2"
import Team from "@/components/sections/Team"
import Testimonial2 from "@/components/sections/Testimonial2"
import Whychoose2 from "@/components/sections/Whychoose2"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Slider2 />
                <Services2 />
                {/*<Marquee2 />*/}
                <About2 />
                {/*<Projects2 />*/}
                <Whychoose2 />
                {/*<Testimonial2 />*/}
                <Team />
                {/*<Clients2 />*/}
                <Contact2 />
                {/*<News2 />*/}
                <Map />
            </Layout>
        </>
    )
}