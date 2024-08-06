import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Services2 from "@/components/sections/Services2"
import TeamInnerAbout from "@/components/sections/inner/TeamInnerAbout"
import Team from "@/components/sections/Team"
import PageTitle from "@/components/sections/PageTitle"
export default function About3() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="About Page" />
                <About2 addClass={"pt-100 pb-50"} />
                <Services2 />
                <Team />
            </Layout>
        </>
    )
}