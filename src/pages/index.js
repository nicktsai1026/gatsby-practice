import React from "react"
import Route from "../components/route"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h3>Gatsby starter template!!</h3>
      <p>Hello world!!</p>
      <img src="https://source.unsplash.com/random/400x300" alt="" />
      <br></br>
      <button className="primary-button">Click me</button>
      <Route></Route>
      <Layout>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Layout>
    </div>
  ) 
}
