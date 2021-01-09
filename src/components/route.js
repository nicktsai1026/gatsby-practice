import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"

export default function Route() {
  return (
        <Container>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/developer/">Developer</Link></li>
                <li><Link to="/contact/">Contact</Link></li>
            </ul>
        </Container>
  )
}