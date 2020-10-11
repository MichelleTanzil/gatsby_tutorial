import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      {/* Use Link for internal links only */}
      <h1 style={{ color: "green", textTransform: "uppercase" }}>
        hello from gatsby
      </h1>
      <h1>hello world</h1>
      <h1>hello people</h1>
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}
