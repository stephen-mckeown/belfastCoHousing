import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
// import  Intro  from '../components/intro'
import BasicTimeline from '../components/timelineComp'

const TimelinePage = () => {
  return (
    <Layout pageTitle="FAQ">
        <BasicTimeline/>
    </Layout>
  )
}

export default TimelinePage