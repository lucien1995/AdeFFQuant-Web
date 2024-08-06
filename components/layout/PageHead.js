import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Adelaide FF Quant Tech"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead