import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import YouTube from "react-youtube"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>2010 Girls</h1>
    <p>Click on each embedded video to play.</p>
    <Link to="/">Go back to the homepage</Link>
    <section>
      <h3>Remote Training Session 1</h3>
      <YouTube videoId="klj15Nrtak4"></YouTube>
    </section>
    <section>
      <h3>Remote Training Session 2</h3>
      <YouTube videoId="cvBA9rL4dVQ"></YouTube>
    </section>
    <section>
      <h3>Remote Training Session 3</h3>
      <YouTube videoId="sYgOeQd5xyI"></YouTube>
    </section>
  </Layout>
)

export default SecondPage
