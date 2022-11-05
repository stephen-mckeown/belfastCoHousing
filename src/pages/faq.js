
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import FaqAccordion from '../components/faqComponent'
import {
  Text
} from "../components/ui"

const FaqPage = () => {
  return (
    <Layout pageTitle="FAQ">
        <FaqAccordion/>
    </Layout>
  )
}

export default FaqPage

