import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Infamous Soupy Rook</title>
        <meta property="og:title" content="Page - Infamous Soupy Rook" />
      </Helmet>
    </div>
  )
}

export default Page
