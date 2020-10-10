import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      {/* Use Link for internal links only */}
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        hello from gatsby
      </h1>
    </Layout>
  )
}
