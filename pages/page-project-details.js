import Layout from "@/components/layout/Layout"
import ProjectsDetails from "@/components/sections/inner/ProjectsDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function Projectpage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Project Details" />
                <ProjectsDetails />
            </Layout>
        </>
    )
}