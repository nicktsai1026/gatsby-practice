import React from "react"
import Route from "../components/route"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h3>Gatsby starter template!!</h3>
      <p>Hello world!!</p>
      <img src="https://source.unsplash.com/random/400x300" alt="" />
      <br></br>
      <button class="primary-button">Click me</button>
      <Route></Route>
    </div>
  ) 
}
