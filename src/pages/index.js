import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import CoachCard from "../components/coachcard"


export default class IndexPage extends React.Component {



  render() {
    
    return (
      <Layout>
        <SEO title="Home" />
        <h3 style={{ textAlign: "center" }}>
          Click on your team below to access
        </h3>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div> */}
        <div></div>
        <CoachCard />
      </Layout>
    )
  }
}






