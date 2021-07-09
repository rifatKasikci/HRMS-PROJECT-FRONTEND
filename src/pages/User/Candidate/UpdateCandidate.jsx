import React,{useState , useEffect} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form , FormField , Input ,Label , Button} from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import CandidateService from '../../../services/candidateService'

export default function CandidateDetails({candidate}) {
    
    let {candidateId} = useParams()

    let candidateService = new CandidateService()
    
    const initialValues = {
        id: candidate.id,
        email: candidate.email,
        password: candidate.password,
        firstName : candidate.firstName,
        lastName : candidate.lastName,
        birthDate : candidate.birthDate,
        identificationNumber : candidate.identificationNumber
    }

    const schema = Yup.object({
        id: Yup.number().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        birthDate : Yup.date().required(),
        identificationNumber : Yup.string().required().min(11).max(11)
    })


    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    candidateService.update(values).then((response) => (console.log(response)))
                }}
            >

                {({ values, touched, handleSubmit, errors, setFieldValue , handleChange }) => (
                    <Form className = "ui form" onSubmit = {handleSubmit} style = {{marginTop : "0.5cm"}}>
                        
                        <FormField>
                    <Input
                    id = "email"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.email}
                    placeholder = "Enter your email"
                    />
                  </FormField>

                  {errors.email && touched.email ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.email}</Label> : null}

                  <FormField>
                    <Input
                    id = "password"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.password}
                    placeholder = "Enter your password"
                    />
                  </FormField>

                  {errors.password && touched.password ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.password}</Label> : null}

                  <FormField>
                    <Input
                    id = "firstName"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.firstName}
                    placeholder = "Enter your first name"
                    />
                  </FormField>

                  {errors.firstName && touched.firstName ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.firstName}</Label> : null}

                  <FormField>
                    <Input
                    id = "lastName"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.lastName}
                    placeholder = "Enter your last name"
                    />
                  </FormField> 

                  {errors.lastName && touched.lastName ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.lastName}</Label> : null}

                  <FormField>
                    <Input
                    id = "birthDate"
                    type = "date" 
                    onChange = {handleChange}
                    value={values.birthDate}
                    placeholder = "Enter your birth date"
                    />
                  </FormField> 

                  {errors.birthDate && touched.birthDate ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.birthDate}</Label> : null}

                  <FormField>
                    <Input
                    id = "identificationNumber"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.identificationNumber}
                    placeholder = "Enter your identification number"
                    />
                  </FormField> 

                  {errors.identificationNumber && touched.identificationNumber ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.identificationNumber}</Label> : null}

                    <Button type = "submit" color = 'green' style = {{marginLeft : "10cm" , marginBottom : "0.5cm"}}>Update</Button>
                    
                    </Form>
                )}




            </Formik>

        

    )
}