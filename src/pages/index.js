import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Just a basic site built for quick access to soccer tutorial videos.</p>
    <p>I'll continue to improve and add to this site as I have time, but I wanted to get something up as quickly as possible.</p>
    <p>Thank you Ashley, and thank you Kevin for putting them together.</p>
    <p>Click on your team below to access their tutorial videos.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <Link to="/page-2/">2010 Girls - Coach Kevin</Link>
    </div>
    <div>
      <Link to="/page-3/">2012 Girls - Coach Ashley</Link>
    </div>
  </Layout>
)

export default IndexPage
