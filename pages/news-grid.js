import Layout from "@/components/layout/Layout"
import NewsInner from "@/components/sections/inner/NewsInner"
import PageTitle from "@/components/sections/PageTitle"
export default function Newspage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="News Grid" />
                <NewsInner />
            </Layout>
        </>
    )
}