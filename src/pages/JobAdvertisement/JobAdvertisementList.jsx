import React , {useState , useEffect} from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'


export default function JobAdvertisementList() {
    
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
       let jobAdvertisementService = new JobAdvertisementService()
       jobAdvertisementService.getJobAdvertisementsActiveTrue().then(result=>setJobAdvertisements(result.data.data))
       }, [])
    
    return (
        <div>
             <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employer</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Job Position</Table.HeaderCell>
        <Table.HeaderCell>Open Position</Table.HeaderCell>
        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
        <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Deadline Date</Table.HeaderCell>
        <Table.HeaderCell>Release Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
          jobAdvertisements.map((jobAdvertisement) => (
          <Table.Row key={jobAdvertisement.id}>
            <Table.Cell><Link to={`/jobAdvertisements/${jobAdvertisement.id}`}>{jobAdvertisement.employer.companyName}</Link></Table.Cell>
            <Table.Cell>{jobAdvertisement.description}</Table.Cell>
            <Table.Cell>{jobAdvertisement.jobPosition.positionName}</Table.Cell>
            <Table.Cell>{jobAdvertisement.numberOfOpenPostion}</Table.Cell>
            <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
            <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
            <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
            <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
            <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>

          </Table.Row>))
      }
      
    
    </Table.Body>
  </Table>
        </div>
    )
}