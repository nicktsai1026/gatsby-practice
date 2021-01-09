import React from "react"
import Header from "../components/header"
import Route from "../components/route"

export default function Developer() {
  return (
    <div style={{ color: `teal` }}>
        <Header headerText="About Nick" arbitraryPhrase="web developer" />
        <Header headerText="Learning Gatsby" />

        <h1>About Developer</h1>
        <p>Such wow. Very React.</p>

        <Route></Route>
    </div>
  )
}