
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import {
  Box, Container, Section, SectionAngled, Subhead,
  Text
} from "../components/ui"

const MembershipPage = () => {
  return (
    <Layout pageTitle="Membership">
      <Box center paddingY={4}>
        <StaticImage
          width={700}
          alt="Our Community Title"
          src='../images/ourCommunity.png'
        />
        <Container>
          <Text variant="body">
            As of 2022, we are actively seeking to expand the membership of Belfast Cohousing.
            You do not need any specific skills or abilities to join Belfast Cohousing, just a passion to develop a cohousing community and have a willingness to learn new things!
            Please contact us [HYPERLINK CONTACT PAGE] if you think our project might be something you are interested in. Since all of our community members have a key role in project development and decision-making, we strongly encourage anyone interested to join us ASAP!
          </Text>
        </Container>
      </Box>
      <SectionAngled background="angledInv" />
      <Section background="redish">
        <Container>
          <Subhead as="h1">The Journey to Membership</Subhead>
          <Text variant="body">
            People that are interested in joining Belfast Cohousing usually meet with a current member for an informal coffee meeting / zoom call to get to know each other a little.
            <hr style={{ borderTop: "3px dashed white ", marginLeft: 10, marginRight: 500 }} />
            At this meeting, you can discuss any questions you might have about cohousing and our project to see if it will be a good fit for you.
            <hr style={{ borderTop: "3px dashed white ", marginLeft: 10, marginRight: 500 }} />
            Following this meeting, you may attend up to 3 of our General (or Management) Circle meetings before making the final decision on whether or not you will become a member of Belfast Cohousing.
            <hr style={{ borderTop: "3px dashed white ", marginLeft: 10, marginRight: 500 }} />
            All members of Belfast Cohousing have an equal say in decision-making. We use consent based decision-making, applying the principles of sociocracy to ensure everyone has their say. You can find more information about how sociocracy works on the Cohousing [HYPERLINK] page of the website.
          </Text>
        </Container>
      </Section>
      <Box center paddingY={4}>
        <StaticImage
          width={1000}
          alt="membership journey diagram"
          src='../images/membershipJourney.png'
        />
      </Box>
    </Layout>
  )
}

export default MembershipPage

//    <hr style={{color: "red"}}></hr>
////     <hr style={{border-top: "3px dashed #bbb"}}></hr>