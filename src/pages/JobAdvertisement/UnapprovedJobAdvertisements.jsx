import React, { useState, useEffect } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Button, Card, Dropdown, Pagination } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import EmployeeService from '../../services/employeeService';

export default function UnapprovedJobAdvertisements() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [pageSize, setPageSize] = useState(10)

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

    let handleChangePageSize = (pageSize, pageNo) => {
        let jobAdvertisementService = new JobAdvertisementService()
        setPageSize(pageSize)
        jobAdvertisementService.getUnapprovedAdvertisements(pageNo, pageSize).then((result) => (setJobAdvertisements(result.data.data)))
    }

    let handleChangePageNo = (pageNo, pageSize) => {
        let jobAdvertisementService = new JobAdvertisementService()
        setPageNo(pageNo)
        jobAdvertisementService.getUnapprovedAdvertisements(pageNo, pageSize).then((result) => (setJobAdvertisements(result.data.data)))
    }

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()

        jobAdvertisementService.getUnapprovedAdvertisements(pageNo, pageSize).then((result) => (setJobAdvertisements(result.data.data)))
    }, [])

    const pageSizeOptions = [
        { key: 1, text: "10", value: 1 },
        { key: 2, text: "20", value: 2 },
        { key: 3, text: "50", value: 50 },
        { key: 4, text: "20", value: 100 }
    ]

    return (
        <div>

            <Dropdown
                options={pageSizeOptions}
                value = {pageSize}
                selection
                onChange={(event, data) => (handleChangePageSize(data.value, pageNo))}
                style={{ marginLeft: "17cm" }}
            />

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
                            <Button basic color='green' onClick={() => (handleApproveJobAdvertisement(jobAdvertisement.id))}>
                                Approve
                            </Button>
                            <Button basic color='red' onClick={() => (handleUnapproveJobAdvertisement(jobAdvertisement.id))}>
                                Decline
                            </Button>
                        </Card.Content>

                    </Card>
                ))}
            </Card.Group>

            <Pagination defaultActivePage={1} totalPages={10}
                onPageChange={(event, data) => (handleChangePageNo(data.activePage, pageSize))}
                style={{ marginTop: "1cm" }} />
        </div>



    )
}
