import Layout from "@/components/layout/Layout"
import ServiceInner from "@/components/sections/inner/ServiceInner"
import PageTitle from "@/components/sections/PageTitle"
export default function Servicepage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Services" crumbTitle="Services" />
                <ServiceInner />
            </Layout>
        </>
    )
}