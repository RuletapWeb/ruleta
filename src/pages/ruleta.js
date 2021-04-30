import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RuletaPage = () => (
  <Layout>
    <Seo title="Ruleta" />
    <h1>Ruleta</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/success/">Esto va al success</Link>
    </p>
  </Layout>
)

export default RuletaPage
