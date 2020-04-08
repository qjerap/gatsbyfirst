import React from "react"
import { Link } from "gatsby"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

// CSS
import headerStyles from "./header.module.scss"
// FontAwewsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faLinkedin,
  faGit,
} from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.title}>
        <TransitionLink
          exit={{
            length: 0.4,
          }}
          entry={{
            delay: 0.4,
          }}
          to="/"
        >
          Romain Pareja
        </TransitionLink>
      </div>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <TransitionLink
              exit={{
                length: 0.4,
              }}
              entry={{
                delay: 0.4,
              }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              About
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              exit={{
                length: 0.4,
              }}
              entry={{
                delay: 0.4,
              }}
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Portfolio
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              exit={{
                length: 0.4,
              }}
              entry={{
                delay: 0.4,
                trigger: async pages => {
                  // wait until we have access to both pages
                  const exit = await pages.exit
                  const entry = await pages.entry
                  // here we can access both pages

                  // You could measure the entry element here

                  // start exit animation based on measurements if you want
                  // wait for the entering page to become visible
                  await entry.visible
                  // the entering page is visible here.
                  // if you want you can animate it now!
                },
              }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </TransitionLink>
          </li>
          <li></li>
        </ul>
      </nav>

      <div className={headerStyles.media}>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                className={headerStyles.icon}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={headerStyles.icon}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGit} className={headerStyles.icon} />
            </a>
          </li>
        </ul>
      </div>

      <div className={headerStyles.burger}>
        <FontAwesomeIcon icon={faBars}  />
        
      </div>
    </header>
  )
}

export default Header
