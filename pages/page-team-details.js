import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/sections/inner/TeamDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Team Details" />
                <TeamDetails />
            </Layout>
        </>
    )
}