import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Table , Message , Button , Icon , Modal} from 'semantic-ui-react'
import EmployerService from '../../../services/employerService'
import EmployerUpdateService from '../../../services/employerUpdateService'
import UpdateEmployer from './UpdateEmployer'


export default function EmployerDetails() {
   
   

let {employerId} = useParams()

const [employer, setEmployer] = useState([])
const [employerUpdate, setEmployerUpdate] = useState({})

useEffect(() => {
    let employerService = new EmployerService()
    let employerUpdateService = new EmployerUpdateService

    employerService.getById(employerId).then(result => setEmployer(result.data.data))
    employerUpdateService.getUnapprovedUpdateByEmployerId(employerId).then(result => setEmployerUpdate(result.data.data))
}, [])

   
   
    return (
        
        <div>
        
        <Table celled>
    <Table.Header>
    <Table.HeaderCell colSpan='3'>Employer</Table.HeaderCell>
      <Table.Row>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.Cell>{employer.email}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Company Name</Table.HeaderCell>
      <Table.Cell>{employer.companyName}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Web Address</Table.HeaderCell>
      <Table.Cell>{employer.webAddress}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Phone Number</Table.HeaderCell>
      <Table.Cell>{employer.phoneNumber}</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.HeaderCell colSpan='3'>{employerUpdate ?  <Message color='yellow'>Last update is waiting for approvement</Message> : null}</Table.HeaderCell>
  </Table>

  <Modal
      trigger={<Button icon = 'edit' color = 'green' style = {{marginLeft:"18.5cm"}}></Button>}
      header='Update Your Informations!'
      content={<UpdateEmployer employer={employer}></UpdateEmployer>}
    />
  
    
  </div>
    
   
    )
}
