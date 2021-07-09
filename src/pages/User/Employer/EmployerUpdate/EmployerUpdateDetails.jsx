import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Table , Label} from 'semantic-ui-react'
import EmployerUpdateService from '../../../../services/employerUpdateService'

export default function EmployerUpdateDetails() {
    
    
    let employerUpdateService = new EmployerUpdateService()
    
    let {employerUpdateId} = useParams()

    const [employerUpdate, setEmployerUpdate] = useState({})

    useEffect(() => {
        employerUpdateService.getById(employerUpdateId).then((result) => (setEmployerUpdate(result.data.data)))
    }, [])
    
    
    return (
        <div>
           <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Informations</Table.HeaderCell>
        <Table.HeaderCell>Before</Table.HeaderCell>
        <Table.HeaderCell>After</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Email</Table.Cell>
        <Table.Cell>{employerUpdate.employer?.email}</Table.Cell>
        <Table.Cell >{employerUpdate.employerUpdateDto?.email} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Password</Table.Cell>
        <Table.Cell>{employerUpdate.employer?.password}</Table.Cell>
        <Table.Cell >{employerUpdate.employerUpdateDto?.password} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Company Name</Table.Cell>
        <Table.Cell>{employerUpdate.employer?.companyName} </Table.Cell>
        <Table.Cell >{employerUpdate.employerUpdateDto?.companyName}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Web Address</Table.Cell>
        <Table.Cell>{employerUpdate.employer?.webAddress} </Table.Cell>
        <Table.Cell >{employerUpdate.employerUpdateDto?.webAddress}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Phone Number</Table.Cell>
        <Table.Cell>{employerUpdate.employer?.phoneNumber} </Table.Cell>
        <Table.Cell >{employerUpdate.employerUpdateDto?.phoneNumber}</Table.Cell>
      </Table.Row>
      
    </Table.Body>
  </Table> 
        </div>
    )
}
