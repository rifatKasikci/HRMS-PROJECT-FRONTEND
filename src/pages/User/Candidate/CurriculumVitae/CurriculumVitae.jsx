import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Icon, Header, Image, Button, TextArea, Modal, Grid, Label } from 'semantic-ui-react'
import CandidateAbilityService from '../../../../services/candidateAbilityService'
import CandidateImageService from '../../../../services/candidateImageService'
import CandidateLanguageService from '../../../../services/candidateLanguageService'
import CandidateSchoolAndDepartmentService from '../../../../services/candidateSchoolAndDepartmentService'
import CurriculumVitaeService from '../../../../services/curriculumVitaeService'
import JobExperienceService from '../../../../services/jobExperienceService'
import SocialMediaAccountService from '../../../../services/socialMediaAccountService'
import AddSchoolWithDepartment from './SchoolWithDepartment/AddSchoolWithDepartment'
import AddJobExperience from './JobExperience/AddJobExperience'
import AddCandidateLanguage from './CandidateLanguage/AddCandidateLanguage'
import AddCandidateAbility from './CandidateAbility/AddCandidateAbility'
import UpdateCurriculumVitae from './CoverLetter/UpdateCurriculumVitae'


export default function CurriculumVitae() {

  let { candidateId } = useParams()

  let curriculumVitaeService = new CurriculumVitaeService()
  let candidateSchoolAndDepartmentService = new CandidateSchoolAndDepartmentService()
  let jobExperienceService = new JobExperienceService()
  let candidateLanguageService = new CandidateLanguageService()
  let candidateAbilityService = new CandidateAbilityService()
  let candidateImageService = new CandidateImageService()
  let socialMediaAccountService = new SocialMediaAccountService()


  const [curriculumVitaes, setCurriculumVitaes] = useState({})
  const [candidateSchoolAndDepartments, setCandidateSchoolAndDepartments] = useState([])
  const [jobExperiences, setJobExperiences] = useState([])
  const [candidateLanguages, setCandidateLanguages] = useState([])
  const [candidateAbilities, setCandidateAbilities] = useState([])
  const [candidateImage, setCandidateImage] = useState({})
  const [socialMediaAccounts, setSocialMediaAccounts] = useState([])

  useEffect(() => {

    curriculumVitaeService.getCurriculumVitaeDetails(candidateId).then(result => setCurriculumVitaes(result.data.data))
    candidateSchoolAndDepartmentService.getAllByCandidateIdOrderByEndingDateDesc(candidateId).then(result => setCandidateSchoolAndDepartments(result.data.data))
    jobExperienceService.getAllByCandidateIdOrderByEndingDateDesc(candidateId).then(result => setJobExperiences(result.data.data))
    candidateLanguageService.getAllByCandidateId(candidateId).then(result => setCandidateLanguages(result.data.data))
    candidateAbilityService.getAllByCandidateId(candidateId).then(result => setCandidateAbilities(result.data.data))
    candidateImageService.getAllByCandidateId(candidateId).then(result => setCandidateImage(result.data.data))
    socialMediaAccountService.getAllByCandidateId(candidateId).then(result => setSocialMediaAccounts(result.data.data))
  }, [])

  const handleAbilityDelete = (candidateId) => {
    console.log(candidateId)
    candidateAbilityService.delete(candidateId).then((response) => (console.log(response)))
  }

  const handleLanguageDelete = (languageId) => {
    console.log(languageId)
    candidateLanguageService.delete(languageId).then((response) => (console.log(response)))
  }

  const handleJobExperienceDelete = (jobExperienceId) => {
    console.log(jobExperienceId)
    jobExperienceService.delete(jobExperienceId).then((response) => (console.log(response)))
  }

  const handleSchoolAndDepartmentDelete = (schoolAndDepartmentId) => {
    console.log(schoolAndDepartmentId)
    candidateSchoolAndDepartmentService.delete(schoolAndDepartmentId).then((response) => (console.log(response)))
  }

  return (
    <div>
      <Header as='h2'>
        
          <Header as='h2'>
            <Image circular src={candidateImage.imageUrl} size="massive" />{candidateImage.candidate?.firstName}  {candidateImage.candidate?.lastName}
          </Header>
      </Header>

      {socialMediaAccounts.map((socialMediaAccount) => (
        <Button.Group circular>
          <Button color='linkedin' href={socialMediaAccount.linkedInLink}>
            <Icon name='linkedin' />
            LinkedIn
          </Button>

          <Button color='black' href={socialMediaAccount.githubLink} >
            <Icon name='github' />
            Github
          </Button>
        </Button.Group>
      ))}

      <Grid style={{ marginTop: "1cm" }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as='h2'>
              <Icon name='audio description' />
              <Header.Content>Description</Header.Content>
            </Header>

          </Grid.Column>
          <Grid.Column width={8}>
            <Modal

              trigger={<Button color="green" style={{ marginRight: "45cm", marginBottom: "0.1cm" }}>Edit</Button>}
              header='Add New School To Your Curriculum Vitae!'
              content={<UpdateCurriculumVitae></UpdateCurriculumVitae>}

            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <TextArea placeholder={curriculumVitaes.curriculumVitae?.coverLetter} disabled style={{ minWidth: "24cm", maxWidth: "24cm", minHeight: "7cm", maxHeight: "7cm", marginLeft: "0.5cm" }} />
        </Grid.Row>
      </Grid>


      <Header as='h2'>
        <Icon name='graduation' />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>
      <Card.Group>
        {candidateSchoolAndDepartments.map((candidateSchoolWithDepartment) => (
          <Card fluid color="blue" >
            <Card.Content >
              <Card.Header>{candidateSchoolWithDepartment.schoolAndDepartment.school.schoolName}</Card.Header>
              <Card.Meta>{candidateSchoolWithDepartment.schoolAndDepartment.department.departmentName}</Card.Meta>
              <Card.Description>
                {candidateSchoolWithDepartment.startingDate} / {candidateSchoolWithDepartment.endingDate ? candidateSchoolWithDepartment.endingDate : "Still Studying"}
              </Card.Description>
              <Button negative onClick = {() => (handleSchoolAndDepartmentDelete(candidateSchoolWithDepartment.id))} style = {{marginTop : 5}}>Delete</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div style={{ paddingLeft: "21.5cm", marginTop: "0.3cm" }}>
        <Modal
          trigger={<Button circular icon="add" color="green">Add School</Button>}
          header='Add New School To Your Curriculum Vitae!'
          content={<AddSchoolWithDepartment></AddSchoolWithDepartment>}

        />
      </div>

      <Header as='h2'>
        <Icon name='factory' />
        <Header.Content>Job Experiences</Header.Content>
      </Header>
      <Card.Group>
        {jobExperiences.map((jobExperience) => (
          <Card fluid color='olive'>
            <Card.Content>
              <Card.Header>{jobExperience.workplace.workplaceName}</Card.Header>
              <Card.Meta>{jobExperience.jobPosition.positionName}</Card.Meta>
              <Card.Description>
                {jobExperience.startingDate} / {jobExperience.endingDate ? jobExperience.endingDate : "Still Working"}
              </Card.Description>
              <Button negative onClick = {() => (handleJobExperienceDelete(jobExperience.id))} style = {{marginTop : 5}}>Delete</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div style={{ paddingLeft: "21.5cm", marginTop: "0.3cm" }}>
        <Modal
          trigger={<Button circular icon="add" color="green">Add Experience</Button>}
          header='Add New Job Experience To Your Curriculum Vitae!'
          content={<AddJobExperience></AddJobExperience>}

        />
      </div>

      <Header as='h2'>
        <Icon name='translate' />
        <Header.Content>Languages</Header.Content>
      </Header>
      <Card.Group>
        {candidateLanguages.map((candidateLanguage) => (
          <Card fluid color='orange'>
            <Card.Content>
              <Card.Header>{candidateLanguage.language.languageName}<Button negative onClick = {() => (handleLanguageDelete(candidateLanguage.id))} icon = 'delete' circular></Button></Card.Header>
              <Card.Description>
                Stage : {candidateLanguage.languageStage.stageName}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div style={{ paddingLeft: "21.5cm", marginTop: "0.3cm" }}>
        <Modal
          trigger={<Button circular icon="add" color="green">Add Language</Button>}
          header='Add New Language To Your Curriculum Vitae!'
          content={<AddCandidateLanguage></AddCandidateLanguage>}

        />
      </div>

      
      <Header as='h2'>
        <Icon name='usb' />
        <Header.Content>Technologies</Header.Content>
      </Header>
      <Card.Group>
        {candidateAbilities.map((candidateAbility) => (
          
          <Card >
            <Card.Content>
              <Card.Header>{candidateAbility.ability.abilityName}
              <Button negative onClick = {() => (handleAbilityDelete(candidateAbility.id))} icon = 'delete' circular style = {{marginLeft : "0.5cm" , maxHeight : "1cm" , maxWidth : "1cm"}} />
              </Card.Header>
            </Card.Content>
          </Card>
            
        ))}
      </Card.Group>

      <div style={{ paddingLeft: "21.5cm", marginTop: "0.3cm" }}>
        <Modal
          trigger={<Button circular icon="add" color="green">Add Technology</Button>}
          header='Add New Technology To Your Curriculum Vitae!'
          content={<AddCandidateAbility></AddCandidateAbility>}
        />
      </div>

    </div>
  )
}
