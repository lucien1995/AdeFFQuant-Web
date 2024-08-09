import Layout from "@/components/layout/Layout"
import TeamInner from "@/components/sections/inner/TeamInner"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/inner/Contact.js";
import Map from "@/components/sections/Map.js";
export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Team Grid" crumbTitle="Team" />
                <TeamInner />
                <Contact />
                <Map />
            </Layout>
        </>
    )
}