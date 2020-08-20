import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  //if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  /*} else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }*/

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Consultoria e desenvolvimento de soluções em TI.' },
              { name: 'keywords', content: 'wise, studios, wise studios, desenvolvimento, agencia, site, consultoria, ti' },
              { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
            ]}
          >
            <html lang="pt-br" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
