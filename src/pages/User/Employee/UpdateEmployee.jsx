import React from 'react'
import * as Yup from 'yup'
import { Form , Input , Label , Button , FormField} from 'semantic-ui-react'
import { Formik } from 'formik'
import EmployeeService from '../../../services/employeeService'

export default function UpdateEmployee({employee}) {
   
    let employeeService = new EmployeeService()
   
    const initialValues = {
        id: employee.id,
        email: employee.email,
        password: employee.password,
        firstName : employee.firstName,
        lastName : employee.lastName
    }

    const schema = Yup.object({
        id: Yup.number().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required()
    })


    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    employeeService.update(values).then((response) => (console.log(response)))
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

                    <Button type = "submit" color = 'green' style = {{marginLeft : "10cm" , marginBottom : "0.5cm"}}>Update</Button>
                    
                    </Form>
                )}




            </Formik>

        

    )
}
