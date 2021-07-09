import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form , FormField , Button , Label , TextArea} from 'semantic-ui-react'
import CurriculumVitaeService from '../../../../../services/curriculumVitaeService'
import { values } from 'lodash'


export default function UpdateCurriculumVitae() {
    
    const curriculumVitaeService = new CurriculumVitaeService()

    const initialValues = {
        coverLetter : ""
    }

    const schema = Yup.object({
        coverLetter : Yup.string().required()
    })
    
    return (
        <Formik
        initialValues = {initialValues}
        validationSchema = {schema}
        onSubmit = {(values) => {
            console.log(values)
            values.candidateId = 35
            curriculumVitaeService.update(values).then((response) => (console.log(response)))
        }}
        >

            {({values , handleSubmit , handleChange , handleBlur , setFieldValue , touched , errors})=>(

                <Form className = "ui form" onSubmit = {handleSubmit}>
                    
                    <FormField>
                    <TextArea placeholder='Tell us more'
                     style={{ maxHeight: 5000 , maxWidth : 5000 , minHeight : 150 , maxHeight : 150}}
                     id = "coverLetter"
                     type = "text"
                     onChange = {(event , data) => (setFieldValue("coverLetter" , data.value))} 
                     value = {values.coverLetter}
                     />
                    </FormField>

                   
                    <FormField style = {{marginLeft : "10.5cm" , marginBottom : "0.5cm"}}>
                        <Button basic
                        color='green'
                        content='Add'
                        type="submit">Add</Button>
                    </FormField>

                    

                </Form>


            )}




        </Formik>
    )
}
