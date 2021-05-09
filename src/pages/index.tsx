import { PageProps } from "gatsby";
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home - Tap</h1>
    <p>Aca va la ruleta</p>
    <p>
      <Link to="/ruleta/">Pasar a la ruleta</Link> <br />
    </p>
  </Layout>
);

export default IndexPage;
