import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import YouTube from 'react-youtube'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>2012 Girls</h1>
    <p>Click on each embedded video to play.</p>
    <Link to="/">Go back to the homepage</Link>
    <h2>Week of 3/30</h2>
    <section>
      <h3>Passing</h3>
      <YouTube videoId="LDATBX4NOSc"></YouTube>
    </section>
    <section>
      <h3>Dribbling</h3>
      <YouTube videoId="qP7fmMs4awE"></YouTube>
    </section>
    <section>
      <h3>Juggling</h3>
      <YouTube videoId="sruX3bPrqi4"></YouTube>
    </section>
    <h2>Week of 4/6</h2>
    <p>Equipment Needed:</p>
    <ul>
      <li>4 cones (or something similar) in a 1-yard by 1-yard square</li>
      <li>1 soccer ball</li>
    </ul>
    <section>
      <h3>Part I</h3>
      <YouTube videoId="hCZQUH-eCJg"></YouTube>
    </section>
    <section>
      <h3>Part II</h3>
      <YouTube videoId="pNGMjZzVf50"></YouTube>
    </section>
    <section>
      <h3>Part III</h3>
      <YouTube videoId="cuTM5sm8Onc"></YouTube>
    </section>
  </Layout>
)

export default ThirdPage
