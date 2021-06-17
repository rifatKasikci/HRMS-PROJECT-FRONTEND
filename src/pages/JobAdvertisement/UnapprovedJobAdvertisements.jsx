import React, { useState, useEffect } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Button, Card, Image, Form } from 'semantic-ui-react'
import { Link, useHistory } from "react-router-dom";
import EmployeeService from '../../services/employeeService';

export default function UnapprovedJobAdvertisements() {

    const history = useHistory()
 
    const [jobAdvertisements, setJobAdvertisements] = useState([])


    

    let handleApproveJobAdvertisement = (id) => {
        let employeeService = new EmployeeService()
        employeeService.confirmJobAdvertisement(id)
        window.location.reload()
    }

    let handleUnapproveJobAdvertisement = (id) => {
        let employeeService = new EmployeeService()
        employeeService.deleteJobAdvertisement(id)
        window.location.reload()      
    } 

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getUnapprovedAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <div>

            <Card.Group>
                {jobAdvertisements.map((jobAdvertisement) => (
                   
                   <Card>
                        <Card.Content key={jobAdvertisement.id}>
                            <Card.Header><Link to={`/jobAdvertisements/${jobAdvertisement.id}`}>{jobAdvertisement.employer.companyName}</Link></Card.Header>
                            <Card.Meta>{jobAdvertisement.releaseDate}/{jobAdvertisement.applicationDeadline}</Card.Meta>
                            <Card.Description>
                                {jobAdvertisement.description}</Card.Description>
                        </Card.Content>
                        
                        <Card.Content extra>
                            <Button basic color='green' onClick={()=> handleApproveJobAdvertisement(jobAdvertisement.id)}>
                                Approve
                            </Button>
                            <Button basic color='red' onClick = {() => handleUnapproveJobAdvertisement(jobAdvertisement.id)}>
                                Decline
                            </Button>
                        </Card.Content>
                       
                    </Card>
                ))}

            </Card.Group>

        </div>
    )
}
