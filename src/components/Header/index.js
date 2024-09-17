import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <Link className="link-style" to="/">
      <li className="home-link-logo-card">
        <img
          className="home-logo-nxt"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <p className="para-style">wave</p>
      </li>
    </Link>

    <ul className="nav-link-card">
      <Link className="link-style" to="/">
        <li className="li-style para-style">Home</li>
      </Link>
      <Link className="link-style" to="/about">
        <li className="li-style para-style">About</li>
      </Link>
      <Link className="link-style" to="/contact">
        <li className="li-style para-style">Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
