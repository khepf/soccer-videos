import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoCard from "../components/videocard"


const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1 style={{ textAlign: "center" }}>Coach Ashley</h1>

    <section>
      <h2 style={{ textAlign: "center" }}>Week of 3/30</h2>
      <VideoCard owner="Coach Ashley" releasedate="Week of 3/30" />
    </section>
    <section>
      <h2 style={{ textAlign: "center" }}>Week of 4/6</h2>
      <VideoCard owner="Coach Ashley" releasedate="Week of 4/6" />
    </section>
  </Layout>
)

export default ThirdPage
