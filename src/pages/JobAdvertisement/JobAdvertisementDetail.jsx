import React,{useState , useEffect} from 'react'
import { useParams} from 'react-router-dom'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Icon, Table} from 'semantic-ui-react'

export default function JobAdvertisementDetail() {
    
    let {id} = useParams();

    const [jobAdvertisement, setJobAdvertisement] = useState([])

    useEffect(() => {
       let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementsById(id).then(result=>setJobAdvertisement(result.data.data))
     }, [])

    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Company</Table.HeaderCell>
        <Table.HeaderCell>Position</Table.HeaderCell>
        <Table.HeaderCell>Open Position</Table.HeaderCell>
        <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
        <Table.HeaderCell>Way Of Working</Table.HeaderCell>
        <Table.HeaderCell>Working Time</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Release Date</Table.HeaderCell>
        <Table.HeaderCell>Deadline Date</Table.HeaderCell>
        <Table.HeaderCell>Is Active</Table.HeaderCell>
        <Table.HeaderCell>Is Deleted</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {jobAdvertisement.map((jobAdvertisement) => (
          <Table.Row key = {jobAdvertisement.id}>
        <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
        <Table.Cell>{jobAdvertisement.jobPosition.positionName}</Table.Cell>
        <Table.Cell>{jobAdvertisement.numberOfOpenPostion}</Table.Cell>
        <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
        <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
        <Table.Cell>{jobAdvertisement.wayOfWorking.wayOfWorkingName}</Table.Cell>
        <Table.Cell>{jobAdvertisement.workingTime.workingTimeName}</Table.Cell>
        <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
        <Table.Cell>{jobAdvertisement.description}</Table.Cell>
        <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
        <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
        <Table.Cell collapsing>{jobAdvertisement.active?<Icon color='green' name='checkmark' size='large' />:<Icon color='red' name='attention' size='large' />}</Table.Cell>
        <Table.Cell collapsing>{jobAdvertisement.deleted?<Icon color='green' name='checkmark' size='large' />:<Icon color='red' name='attention' size='large' />}</Table.Cell>

      </Table.Row>
      ))}
      
      
    </Table.Body>
  </Table>
        </div>
    )
}
//<Icon name='checkmark' />