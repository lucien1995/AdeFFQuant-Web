import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/sections/inner/ServiceDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Service Details" />
                <ServiceDetails />
            </Layout>
        </>
    )
}