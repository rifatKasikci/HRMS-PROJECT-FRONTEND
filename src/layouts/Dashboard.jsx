import React from 'react'
import { Grid } from "semantic-ui-react"
import CandidateList from '../pages/User/Candidate/CandidateList.jsx'
import EmployerList from '../pages/User/Employer/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import Section from './Section'
import UserCard from './UserCard'

export default function Dashboard() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
           <UserCard/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Section/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}