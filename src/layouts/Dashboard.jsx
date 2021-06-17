import React from 'react'
import { Grid } from "semantic-ui-react"
import CandidateList from '../pages/User/Candidate/CandidateList.jsx'
import EmployerList from '../pages/User/Employer/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import Section from './Section'
import UserCard from './UserCard'
import { Route } from 'react-router'
import UnapprovedJobAdvertisements from '../pages/JobAdvertisement/UnapprovedJobAdvertisements.jsx'
import JobAdvertisementDetail from '../pages/JobAdvertisement/JobAdvertisementDetail.jsx'
import AddJobAdvertisement from '../pages/JobAdvertisement/AddJobAdvertisement.jsx'

export default function Dashboard() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
           <UserCard/>
          </Grid.Column>
          <Grid.Column width={13}>
            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/candidates" component={CandidateList}/>
            <Route exact path="/employers" component={EmployerList}/>
            <Route exact path="/jobAdvertisements/" component={JobAdvertisementList}/>
            <Route exact path="/jobAdvertisements/:id" component={JobAdvertisementDetail}/>
            <Route exact path="/unapprovedJobAdvertisements/" component={UnapprovedJobAdvertisements}/>
            <Route exact path = "/createJobAdvertisement" component = {AddJobAdvertisement}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}