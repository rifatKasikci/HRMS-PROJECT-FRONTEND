import React, { useEffect, useState } from 'react'
import { Form, Formik } from "formik"
import { FormField, Dropdown, Input , Button , Label } from 'semantic-ui-react'
import * as Yup from "yup"
import SchoolWithDepartmentService from '../../../../../services/schoolWithDepartmentService'
import CandidateSchoolAndDepartmentService from '../../../../../services/candidateSchoolAndDepartmentService'



export default function AddSchoolWithDepartment() {

    const [schoolWithDepartments, setSchoolWithDepartments] = useState([])

    const candidateSchoolAndDepartmentService = new CandidateSchoolAndDepartmentService()

    useEffect(() => {
        
        let schoolWithDepartmentService = new SchoolWithDepartmentService()
      
        schoolWithDepartmentService.getSchoolWithDepartments().then(result => setSchoolWithDepartments(result.data.data))
    }, [])

    const schoolWithDepartmentOption = schoolWithDepartments.map((schoolWithDepartment, index) => (
        {
            key: index,
            text: `${schoolWithDepartment.school.schoolName} - ${schoolWithDepartment.department.departmentName}`,
            value: schoolWithDepartment.id
        }

    ))

    const initialValues = {
       
        schoolAndDepartmentId: "",
        startingDate: "",
        endingDate: ""

    }

    const schema = Yup.object({
        schoolAndDepartmentId: Yup.number().required(),
        startingDate: Yup.date().required(),
        endingDate: Yup.date()
    })

    


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                values.candidateId = 35
                console.log(values)
                candidateSchoolAndDepartmentService.add(values).then((response) => console.log(response))
            }}
        >
            {({values , handleBlur , handleChange , errors , isSubmitting , handleReset , touched , handleSubmit , setFieldValue}) => (
                <Form className="ui form" onSubmit = {handleSubmit}>
                    <FormField>
                        <Dropdown
                            id = "schoolAndDepartmentId"
                            type = "dropdown"
                            clearable
                            fluid
                            search
                            selection
                            options={schoolWithDepartmentOption}
                            value = {values.schoolWithDepartmentId}
                            onChange = {(event, data) => setFieldValue("schoolAndDepartmentId" , data.value)}
                            placeholder='Select School And Department'
                        />
                    </FormField>

                    {errors.schoolAndDepartmentId && touched.schoolAndDepartmentId ?  <Label basic color='red' pointing='above' style = {{marginBottom : "0.5cm"}}>{errors.schoolAndDepartmentId}</Label> : null}

                    <FormField>
                        <Input
                            type="date"
                            id = "startingDate"
                            value={values.startingDate}
                            onChange = {(event, data) => setFieldValue("startingDate" ,data.value)}
                        />
                    </FormField>

                    {errors.startingDate && touched.startingDate ?  <Label basic color='red' pointing='above' style = {{marginBottom : "0.5cm"}}>{errors.startingDate}</Label> : null}

                    <FormField>
                        <Input
                            type="date"
                            id = "endingDate"
                            value={values.endingDate}
                            onChange = {(event, data) => setFieldValue("endingDate" ,data.value)}
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
