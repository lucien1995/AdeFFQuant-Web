import Layout from "@/components/layout/Layout"
import TeamInner from "@/components/sections/inner/TeamInner"
import PageTitle from "@/components/sections/PageTitle"
export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Team Grid" crumbTitle="Team" />
                <TeamInner />
            </Layout>
        </>
    )
}