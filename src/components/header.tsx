import * as React from "react"
import { Link } from "gatsby"

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  const MenuStyle = {
    color: "lightcolor",
    textDecoration: "none",
  }
  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={MenuStyle}>
            {siteTitle}
          </Link>
        </h1>
        <h4 style={{ margin: 0 }}>
          <Link to="/blog" style={MenuStyle}>
            My blogs
          </Link>
        </h4>
      </div>
    </header>
  )
}

export default Header
