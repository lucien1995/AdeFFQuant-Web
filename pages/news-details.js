import Layout from "@/components/layout/Layout"
import NewsDetails from "@/components/sections/inner/NewsDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function newsdetailspage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="News Details" />
                <NewsDetails />
            </Layout>
        </>
    )
}