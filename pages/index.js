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
import Slider2 from "@/components/sections/Slider2";
import Services2 from "@/components/sections/Services2";
import About2 from "@/components/sections/About2";
import Whychoose2 from "@/components/sections/Whychoose2";
import Team from "@/components/sections/Team";
import Contact2 from "@/components/sections/Contact2";
import Map from "@/components/sections/Map";
// export async function getServerSideProps(context) {
//   return {
//     redirect: {
//       destination: '/index-2',
//       permanent: false,
//     },
//   };
// }

// export default function Home() {
//   return null; // 这个组件可以返回null，因为它会被重定向
// }
export default function Home() {

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
          {/*<Layout headerStyle={1} footerStyle={1}>*/}
          {/*      <Slider1 />*/}
          {/*      <Services1 />*/}
          {/*      <About1 addClass={"pt-0"} />*/}
          {/*      <Marquee1 />*/}
          {/*      <Cta />*/}
          {/*      <Faqs />*/}
          {/*      <Whychoose1 />*/}
          {/*      <Testimonial1 />*/}
          {/*      <Projects1 />*/}
          {/*      <Funfact />*/}
          {/*      <News1 />*/}
          {/*      <Contact1 />*/}
          {/*      <Clients1 />*/}
          {/*  </Layout>*/}
        </>
    )
}
