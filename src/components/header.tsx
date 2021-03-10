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
        <h1 className="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          <Link to="/" style={MenuStyle}>
            {siteTitle}
          </Link>
        </h1>

        {/* <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          <Link to="/blog" style={MenuStyle}>
            My blogs
          </Link>
        </h1> */}
      </div>
    </header>
  )
}

export default Header
