import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, FormField, Label, Dropdown , Button} from 'semantic-ui-react'
import AbilityService from '../../../../../services/abilityService'
import CandidateAbilityService from '../../../../../services/candidateAbilityService'


export default function AddCandidateAbility() {

    const candidateAbilityService = new CandidateAbilityService()

    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        let abilityService = new AbilityService()

        abilityService.getAll().then(result => setAbilities(result.data.data))
    }, [])


    const schema = Yup.object({
        abilityId: Yup.number().required()
    })

    const initialValues = {
        abilityId: Yup.number().required()
    }

    const abilityOptions = abilities.map((ability, index) => (
        {
            key: index,
            text: ability.abilityName,
            value: ability.id
        }
    ))


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                values.candidateId = 35
                console.log(values)
                candidateAbilityService.add(values).then((response) => (console.log(response)))
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, values, setFieldValue , touched }) => (

                <Form className = "ui class" onSubmit = {handleSubmit} >
                    
                    <FormField>
                        <Dropdown
                            placeholder='Select Ability'
                            type="dropdown"
                            id="abilityId"
                            fluid
                            search
                            value = {values.abilityId}
                            clearable
                            selection
                            onChange={(event, data) => (setFieldValue("abilityId", data.value))}
                            options={abilityOptions}
                        />
                    </FormField>

                    {errors.abilityId && touched.abilityId ?  <Label basic color='red' pointing='above' style = {{marginBottom : "0.5cm"}}>{errors.abilityId}</Label> : null}

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
