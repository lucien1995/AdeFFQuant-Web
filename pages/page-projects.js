import Layout from "@/components/layout/Layout"
import PageProjects from "@/components/sections/inner/PageProjects"
import PageTitle from "@/components/sections/PageTitle"
export default function Projectpage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Project"/>
                <PageProjects />
            </Layout>
        </>
    )
}