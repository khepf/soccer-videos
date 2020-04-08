import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoCard from "../components/videocard"



const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 style={{ textAlign: "center" }}>Coach Kevin</h1>
    <p style={{ textAlign: "center" }}>Click on each embedded video to play.</p>
    <VideoCard owner="Coach Kevin" releasedate="March 26th" />
    <VideoCard owner="Coach Kevin" releasedate="April 1st" />
    <VideoCard owner="Coach Kevin" releasedate="April 4th" />
  </Layout>
)

export default SecondPage
