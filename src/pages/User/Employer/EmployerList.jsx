import React , {useState , useEffect} from 'react'
import EmployerService from '../../../services/employerService'
import { Table } from 'semantic-ui-react'


export default function EmployerList() {
    
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
        
    }, [])
    
    return (
        <div>
             <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Web Address</Table.HeaderCell>
        <Table.HeaderCell>E-Mail</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
          employers.map((employer) => (
          <Table.Row key={employer.id}>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.webAddress}</Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>))
      }
      
    
    </Table.Body>
  </Table>
        </div>
    )
}