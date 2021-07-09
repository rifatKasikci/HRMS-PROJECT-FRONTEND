import React,{useState , useEffect} from 'react'
import { Card , Button } from 'semantic-ui-react'
import { Link, useHistory} from "react-router-dom";
import EmployeeService from '../../../../services/employeeService'



export default function EmployerUpdatesList() {
    
  let history = useHistory()

    let employeeService = new EmployeeService()

    const [employerUpdates, setEmployerUpdates] = useState([])

useEffect(() => {
     employeeService.getUnapprovedUpdateRequests().then(result => setEmployerUpdates(result.data.data))
}, [])
    
    const handleApprove = (employerUpdateId) => {
        employeeService.confirmEmployerUpdate(employerUpdateId).then(response => console.log(response))
        //window.location.reload()
    }

    const handleUnapprove = (employerUpdateId) => {
        employeeService.unapproveEmployerUpdate(employerUpdateId).then(response => console.log(response))
        //window.location.reload()
    }
    
    return (
        <div>
            <Card.Group>
            {employerUpdates.map((employerUpdate) => (
                <Card onClick = {() => (history.push(`/requests/updates/${employerUpdate.id}`))}>
                  <Card.Content >
                    <Card.Header>{employerUpdate.employer.companyName}</Card.Header>
                    <Card.Meta>{employerUpdate.employer.email}</Card.Meta>
                    <Card.Description>
                    <a href={employerUpdate.employer.webAddress} target ='_blank' >{employerUpdate.employer.webAddress}</a>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green' onClick = {()=>(handleApprove(employerUpdate.employer.id))}>
                        Approve
                      </Button>
                      <Button basic color='red' onClick = {()=>(handleUnapprove(employerUpdate.employer.id))}>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
            ))}
            </Card.Group>
        </div>
    )
}
