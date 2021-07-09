import React, { useState, useEffect } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Link } from "react-router-dom";
import { Table, Dropdown, Pagination , Rating, Button} from 'semantic-ui-react'
import FavoriteService from '../../services/favoriteService';
import JobAdvertisementFilter from '../../layouts/JobAdvertisementFilter';


export default function JobAdvertisementList() {

  let favoriteService = new FavoriteService()

  const [jobAdvertisements, setJobAdvertisements] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [favorites, setFavorites] = useState([])
  const [filterOptions, setFilterOptions] = useState({})

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    
    jobAdvertisementService.getJobAdvertisementsByActiveTrueAndFiltered(pageNo, pageSize , filterOptions).then((result) => (setJobAdvertisements(result.data.data)))
    favoriteService.getAllByCandidateId(35)
    .then(result => result.data.data.map((favorite)=>(favorites.push(favorite.jobAdvertisement.id))))
  }, [filterOptions])

  const handleDeleteFavorite = (candidateId , jobAdvertisementId) => {
    favoriteService.delete(candidateId , jobAdvertisementId).then((response) => (console.log(response)))
    window.location.reload()
  }

  const handleAddFavorite = (candidateId , jobAdvertisementId) => {
    favoriteService.add(candidateId , jobAdvertisementId).then((response) => (console.log(response)))
    window.location.reload()
  }

  const handleChangePageSize = (pageSize, pageNo) => {
    let jobAdvertisementService = new JobAdvertisementService()
    setPageSize(pageSize)
    jobAdvertisementService.getJobAdvertisementsActiveTrue(pageNo, pageSize).then(result => setJobAdvertisements(result.data.data))
  }

  const handleChangePageNo = (pageNo ,pageSize) => {
    let jobAdvertisementService = new JobAdvertisementService()
    setPageNo(pageNo)
    jobAdvertisementService.getJobAdvertisementsActiveTrue(pageNo, pageSize).then(result => setJobAdvertisements(result.data.data))
  }

  const pageSizeOptions = [
    { key: 1, text: "10", value: 10 },
    { key: 2, text: "20", value: 20 },
    { key: 3, text: "50", value: 50 },
    { key: 4, text: "20", value: 100 }
  ]

  const handleFilterClick = (filterOptions) => {
    if (filterOptions.cityId.length === 0) {
      filterOptions.cityId = []
    }
    if (filterOptions.workingTimeId.length === 0) {
      filterOptions.workingTimeId = []
    }
    setFilterOptions(filterOptions)
  }

  return (
    <div>
      <Dropdown
        options={pageSizeOptions}
        value = {pageSize}
        selection
        onChange={(event, data) => (handleChangePageSize(data.value, pageNo))}
        style={{ marginLeft: "17cm" }}
      />

      <JobAdvertisementFilter clickEvent = {handleFilterClick} />

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
                <Table.Cell>{favorites.includes(jobAdvertisement.id) ? <Button icon='heart' onClick = {()=>(handleDeleteFavorite(35,jobAdvertisement.id))}/> :  <Button icon='heart outline' onClick={()=>(handleAddFavorite(35,jobAdvertisement.id))}/>}</Table.Cell>

              </Table.Row>))
          }
        </Table.Body>
      </Table>

      <Pagination defaultActivePage={1} totalPages={10} 
      onPageChange = {(event , data) => (handleChangePageNo(data.activePage , pageSize))}/>
    </div>
  )
}