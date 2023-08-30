import React from 'react'

import { Helmet } from 'react-helmet'
import resume from '../public/ResumeDentonSun.pdf'
import './page.css'
const Page = (props) => {
  return (
    <div>
      <embed src={resume} type="application/pdf"  style={{ width: '100%', height: '100vh' }} />
    </div>
  )
}

export default Page
