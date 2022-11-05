import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import {
  Text,
  Container,
  Box
} from "../components/ui"

const timelineColor = '#b10c0c'

export default function BasicTimeline() {
  return (
    <Container width="tight">
      <Box className="PUNK" center>    
      <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: timelineColor }}>2015</Text>
            <Text variant="lead" >First public meeting</Text>
            <Text variant="small">Following a public meeting held by Stephen Hill, Chair of Cohousing Networks UK, to discuss the idea of cohousing in Northern Ireland,  a group of local people came together and called themselves Cohousing NI. They met on a regular basis to set out values and a vision for a cohousing community in Northern Ireland.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: timelineColor }}>2015 - 2019</Text>
            <Text variant="lead" >Creation of   Cohousing Connections</Text>
            <Text variant="small">Later the group became known as Cohousing Connections, advocating for both a rural and an urban cohousing community here in Northern Ireland. Cohousing Connections still exists as an umbrella organisation, you can find it at http://www.cohousingconnections.org.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: timelineColor }}>2019</Text>
            <Text variant="lead" >Focus on urban cohousing</Text>
            <Text variant="small">Cohousing Connections has largely been superseded by two cohousing projects; Cohousing Portaferry and Belfast Cohousing, the latter being committed to creating an urban cohousing community here in Belfast.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: timelineColor }}>2019 - 2021</Text>
            <Text variant="lead" >Regular Meetings</Text>
            <Text variant="small">The Belfast Cohousing steering group met on a regular basis to start working towards the creation of a cohousing community in Belfast. The group obtained vouchers from an EU scheme in 2019 which helped fund work towards the development of a financial model, architectural designs, marketing and in creating a feasibility study for the project.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: timelineColor }}>September 2021</Text>
            <Text variant="lead" >Registered as a Cooperative</Text>
            <Text variant="small">Belfast Cohousing officially registered under the Co-operative and Community Benefit Societies Act (Northern Ireland) 1969 as Belfast Co-housing Mutual Home Ownership Society Limited.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: timelineColor }}>March 2022</Text>
            <Text variant="lead" >Feasibility Study</Text>
            <Text variant="small">We published our Belfast Cohousing Feasibility Study and have used it to communicate our project to others outside of the cooperative.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: '#b10c0c' }}>April 2022</Text>
            <Text variant="lead" >Creation of "Circles"</Text>
            <Text variant="small">We created and divided the group into smaller working groups known as "Circles". These groups meet independently from the management circle. To date we have established circles on Membership, Governance, Finance & Fundraising, Lobbying and Communication.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: '#b10c0c' }}>Setpember 2022</Text>
            <Text variant="lead" >First Annual General Meeting</Text>
            <Text variant="small">We had our first AGM since registering formally as a Cooperative. We produced our annual report and elected roles for the management circle including Leader, Secretary, Facilitator etc.
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: '#b10c0c' }}>Autumn/Winter 2022</Text>
            <Text variant="lead" >Website Launch & Membership Campaign</Text>
            <Text variant="small">Over the coming months we will have launched this very website and started a campaign to expand our membership - if you are interested please get in touch!
            </Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: timelineColor }} />
            <TimelineConnector sx={{ backgroundColor: timelineColor }} />
          </TimelineSeparator>
          <TimelineContent>
            <Text variant="bold" style={{ color: '#b10c0c' }}>Early 2023</Text>
            <Text variant="lead" >Members' Training</Text>
            <Text variant="small">Our members will also participate in sociocracy training sessions with Cohousing Connections in early 2023.
            </Text>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Box>
    </Container>
  );
}
