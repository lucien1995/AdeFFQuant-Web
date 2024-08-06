import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation">
                <li ><Link href="/index-2">Home</Link>
                {/*<li className="current dropdown"><Link href="/index-2">Home</Link>*/}
                    {/*<ul>*/}
                    {/*    <li><Link href="/">Home page 01</Link></li>*/}
                    {/*    <li><Link href="/index-2">Home page 02</Link></li>*/}
                    {/*</ul>*/}
                </li>
                <li ><Link href="/page-about">About</Link>
                {/*<li className="dropdown"><Link href="/page-about">About</Link>*/}
                    {/*<ul>*/}
                    {/*    <li><Link href="/page-about">About</Link></li>*/}
                    {/*    <li className="dropdown"><Link href="/page-team">Team</Link>*/}
                    {/*        <ul>*/}
                    {/*            <li><Link href="/page-team">Team Grid</Link></li>*/}
                    {/*            <li><Link href="/page-team-details">Team Details</Link></li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </li>
                <li className="dropdown"><Link href="/page-team">Team</Link>
                    <ul>
                        <li><Link href="/page-team">Team Grid</Link></li>
                        <li><Link href="/page-team-details">Team Details</Link></li>
                    </ul>
                </li>
                {/*<li className="dropdown"><Link href="/page-projects">Projects</Link>*/}
                {/*    <ul>*/}
                {/*        <li><Link href="/page-projects">Projects Grid</Link></li>*/}
                {/*        <li><Link href="/page-project-details">Project Details</Link></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li className="dropdown"><Link href="/news-grid">News</Link>*/}
                {/*    <ul>*/}
                {/*        <li><Link href="/news-grid">News Grid</Link></li>*/}
                {/*        <li><Link href="/news-details">News Details</Link></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>
        </>
    )
}
