import React,{useState , useEffect} from 'react'
import { useParams , Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import FavoriteService from '../../services/favoriteService'

export default function JobAdvertisementFavorites() {
    
    let {candidateId} = useParams()

    const [favorites, setFavorites] = useState([])

    let favoriteService = new FavoriteService()

    useEffect(() => {
        let favoriteService = new FavoriteService()

        favoriteService.getAllByCandidateId(candidateId).then((result) => (setFavorites(result.data.data)))
    }, [])

    const handleDeleteFavorite = (candidateId , jobAdvertisementId) => {
        favoriteService.delete(candidateId , jobAdvertisementId).then((response) => (console.log(response)))
    }
    
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
            favorites.map((favorites) => (
              <Table.Row key={favorites.id}>
                <Table.Cell><Link to={`/jobAdvertisements/${favorites.jobAdvertisement.id}`}>{favorites.jobAdvertisement.employer.companyName}</Link></Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.description}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.jobPosition.positionName}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.numberOfOpenPostion}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.minSalary}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.maxSalary}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.city.cityName}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.applicationDeadline}</Table.Cell>
                <Table.Cell>{favorites.jobAdvertisement.releaseDate}</Table.Cell>
                <Table.Cell><Button icon='delete' color="red" onClick={() => (handleDeleteFavorite(candidateId , favorites.jobAdvertisement.id))}/></Table.Cell>

              </Table.Row>))
          }
        </Table.Body>
      </Table>
    </div>
    )
}
