import React from 'react'
import { Grid } from "semantic-ui-react"
import CandidateList from '../pages/User/Candidate/CandidateList.jsx'
import EmployerList from '../pages/User/Employer/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import UserCard from './UserCard'
import { Route } from 'react-router'

import UnapprovedJobAdvertisements from '../pages/JobAdvertisement/UnapprovedJobAdvertisements'
import JobAdvertisementDetail from '../pages/JobAdvertisement/JobAdvertisementDetail.jsx'
import AddJobAdvertisement from '../pages/JobAdvertisement/AddJobAdvertisement.jsx'
import CurriculumVitae from '../pages/User/Candidate/CurriculumVitae/CurriculumVitae.jsx'
import EmployerDetails from '../pages/User/Employer/EmployerDetails.jsx'
import EmployeeDetails from '../pages/User/Employee/EmployeeDetails.jsx'
import CandidateDetails from '../pages/User/Candidate/CandidateDetails.jsx'
import EmployerUpdatesList from '../pages/User/Employer/EmployerUpdate/EmployerUpdatesList.jsx'
import EmployerUpdateDetails from '../pages/User/Employer/EmployerUpdate/EmployerUpdateDetails'
import JobAdvertisementFavorites from '../pages/JobAdvertisement/JobAdvertisementFavorites.jsx'


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

            <Route exact path="/candidates/" component={CandidateList}/>
            <Route exact path="/candidates/:candidateId" component={CandidateDetails}/>
            <Route exact path="/employers/" component={EmployerList}/>
            <Route exact path="/jobAdvertisements/" component={JobAdvertisementList}/>
            <Route exact path="/jobAdvertisements/favorites/:candidateId/" component={JobAdvertisementFavorites}/>
            <Route exact path="/jobAdvertisements/:id" component={JobAdvertisementDetail}/>
            <Route exact path="/jobAdvertisements/requests/jobAdvertisements/" component={UnapprovedJobAdvertisements}/>
            <Route exact path = "/create/jobAdvertisements/" component = {AddJobAdvertisement}/>
            <Route exact path="/candidates/curriculumVitae/:candidateId/" component={CurriculumVitae} />
            <Route exact path="/employers/:employerId/" component={EmployerDetails} />
            <Route exact path="/employees/:employeeId/" component={EmployeeDetails} />
            <Route exact path="/requests/updates/" component={EmployerUpdatesList} />
            <Route exact path="/requests/updates/:employerUpdateId/" component={EmployerUpdateDetails} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}