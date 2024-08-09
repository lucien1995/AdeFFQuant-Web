import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/sections/inner/TeamDetails"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/inner/Contact.js";
import Map from "@/components/sections/Map.js";
export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Team Details" />
                <TeamDetails />
                <Map />
            </Layout>
        </>
    )
}