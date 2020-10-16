import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to products</Link>
        <h1>single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetOneProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
        title
      }
      price
      info {
        info
      }
    }
  }
`

export default ComponentName
