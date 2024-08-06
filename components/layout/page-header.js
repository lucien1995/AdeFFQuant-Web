import React from "react";
import Link from "next/link";
import pageHeaderBg from "public/images/background/page-title.jpg";




const PageHeader = ({ title, crumbTitle }) => {
  return (
    <section className="page-header">
      <div
        className="page-title"
        style={{ backgroundImage: `url(${pageHeaderBg.src})` }}
      >
        
        <div className="auto-container">
          <h2 className="title-react">{title}</h2>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/index-2">
                Home
              </Link>
            </li>
            <li>Pages</li>
            <li>
              <span>{crumbTitle}</span>
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default PageHeader;
