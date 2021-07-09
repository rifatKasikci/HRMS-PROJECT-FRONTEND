import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Form , Table , Modal , Button , Reveal , Image} from 'semantic-ui-react'
import CandidateImageService from '../../../services/candidateImageService'
import CandidateService from '../../../services/candidateService'
import UpdateCandidate from './UpdateCandidate'
import UpdateCandidateImage from './CurriculumVitae/CandidateImage/UpdateCandidateImage'

export default function CandidateDetails() {
    
    let {candidateId} = useParams()

    const [candidate, setCandidate] = useState({})
    const [candidateImage, setCandidateImage] = useState({})

    useEffect(() => {
        let candidateService = new CandidateService()
        let candidateImageService = new CandidateImageService()

        candidateService.getById(candidateId).then(result => setCandidate(result.data.data))
        candidateImageService.getAllByCandidateId(candidateId).then(result => setCandidateImage(result.data.data))
    }, [])
    
    return (
        
        
        <div>
           
           <Table celled>
    <Table.Header>
    <Table.HeaderCell colSpan='3'>Candidate</Table.HeaderCell>
      <Table.Row>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.Cell>{candidate.email}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Password</Table.HeaderCell>
      <Table.Cell>{candidate.password}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>First Name</Table.HeaderCell>
      <Table.Cell>{candidate.firstName}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Last Name</Table.HeaderCell>
      <Table.Cell>{candidate.lastName}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Birth Date</Table.HeaderCell>
      <Table.Cell>{candidate.birthDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Identification Number</Table.HeaderCell>
      <Table.Cell>{candidate.identificationNumber}</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.HeaderCell>Image</Table.HeaderCell>
      <Table.Cell> <Modal
      trigger={<Button icon = "edit" color = 'green' style = {{marginLeft : "15cm"}} />}
      header='Update Your Informations!'
      content={<UpdateCandidateImage candidateId={candidateId} ></UpdateCandidateImage>}
    /> <Reveal >
    <Reveal.Content >
      <Image src={candidateImage.imageUrl} size='small' />
    </Reveal.Content>
  </Reveal></Table.Cell>
      </Table.Row>
    </Table.Header>
  </Table>

  <Modal
      trigger={<Button color = "green" icon = 'edit' style = {{marginLeft : "18.5cm"}}></Button>}
      header='Update Your Informations!'
      content={<UpdateCandidate candidate={candidate} ></UpdateCandidate>}
    /> 
        </div>
    )
}

