import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Text,
    Container,
    Box
  } from "../components/ui"

export default function FaqAccordion() {
  return (
    <Container width="tight">
    <Box className="PUNK" center>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Text bold>What is Cohousing?</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Cohousing is a type of community-led housing. It is an intentional community in which residents actively participate in the design and operation of their neighbourhood.
Cohousing communities are made up of private homes containing all the features of conventional homes, and also have use of extensive common facilities such as open space, courtyards, a playground and a common house.
For more information look at the UK Cohousing Network website: http://www.cohousing.org.uk/
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Text bold>What is a Mutual Home Ownership Society?</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          The Mutual Ownership model is an innovative concept, designed as an alternative to conventional home ownership. Instead of individuals owning their own homes, all the properties on a development are owned by a cooperative society. Residents pay a monthly charge to the cooperative society, in return for which they build up their share of the equity in the society.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Text bold>What is expected of the members of Belfast Cohousing?</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Members of Belfast Cohousing will all play a part in the development, construction and eventual running of the community. Members will be expected to attend meetings and be an active part of the project as it develops.
We do not require a specific set of skills or defined time commitment from our members but an ongoing interest in the project, willingness to learn, and participation in our circles and sociocratic decision-making model are important aspects.
Our General Management Circle currently meets monthly via zoom and members would be expected to attend regularly.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Text bold>How do I join Belfast Cohousing?</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          If you look at the Membership section of our website you can learn more about the journey to membership within Belfast Cohousing.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Text bold>What are the benefits of a cohousing community?</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Cohousing creates close knit communities who can benefit from shared resources like the community house and shared outdoor spaces, and activities like shared meals, childcare, carpooling, movie nights etc. Shared resources in the community saves residents time, money and space.
Cohousing allows for the provision of good quality housing to those who do not qualify for social housing and who struggle in the private housing market. Being able to access permanently affordable housing protects residents from unpredictable market fluctuations.
Cohousing communities have been linked to reducing loneliness and improving the well-being of the residents that live there. They also increase civic participation as residents are stakeholders in their community.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Text bold>Where will Belfast Cohousing be situated?</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          We are currently in the site identification phase of the project and do not yet have a specific location, our project is going to be urban and therefore is limited to the area covered by Belfast City Council. We intend to locate a site that can house 12-20 residential properties, a 200m2 community house and some shared outdoor space, and that is close to local amenities and transport links.
 
 
If you have any other questions about our community please contact us and we will be happy to respond, you can email us at belfastcohousing@gmail.com. 
           </Text>
        </AccordionDetails>
      </Accordion>
    </Box>   
    </Container>
  );
}
