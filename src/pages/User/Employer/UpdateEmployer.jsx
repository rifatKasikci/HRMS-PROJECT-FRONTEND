import React from 'react'
import * as Yup from 'yup'
import { Form, Input, FormField , Button , Icon , Label} from 'semantic-ui-react'
import { Formik } from 'formik'
import EmployerService from '../../../services/employerService'

export default function UpdateEmployer({ employer }) {

    let employerService = new EmployerService()

    const initialValues = {
        id: employer.id,
        email: employer.email,
        password: employer.password,
        phoneNumber: employer.phoneNumber,
        companyName: employer.companyName,
        webAddress: employer.webAddress
    }

    const schema = Yup.object({
        id: Yup.number().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        phoneNumber: Yup.string().required(),
        companyName: Yup.string().required(),
        webAddress: Yup.string().required()
    })


    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    employerService.update(values).then((response) => (console.log(response)))
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
                    id = "phoneNumber"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.phoneNumber}
                    placeholder = "Enter your phone number"
                    />
                  </FormField>

                  {errors.phoneNumber && touched.phoneNumber ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.phoneNumber}</Label> : null}

                  <FormField>
                    <Input
                    id = "companyName"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.companyName}
                    placeholder = "Enter your company name"
                    />
                  </FormField> 

                  {errors.companyName && touched.companyName ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.companyName}</Label> : null}

                  <FormField>
                    <Input
                    id = "webAddress"
                    type = "text" 
                    onChange = {handleChange}
                    value={values.webAddress}
                    placeholder = "Enter your web address"
                    />
                  </FormField> 

                  {errors.webAddress && touched.webAddress ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.webAddress}</Label> : null}
                    
                    <Button type = "submit" color = 'green' style = {{marginLeft : "10cm" , marginBottom : "0.5cm"}}>Update</Button>
                    
                    </Form>
                )}




            </Formik>

        

    )
}
