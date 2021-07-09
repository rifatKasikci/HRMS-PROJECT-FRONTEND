import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, FormField, Label, Dropdown, Button } from 'semantic-ui-react'
import CandidateLanguageService from '../../../../../services/candidateLanguageService'
import LanguageStageService from '../../../../../services/languageStageService'
import LanguageService from '../../../../../services/languageService'



export default function AddCandidateLanguage() {

    let candidateLanguageService = new CandidateLanguageService()

    const [languages, setLanguages] = useState([])
    const [languageStages, setLanguageStages] = useState([])

    useEffect(() => {
        let languageService = new LanguageService()
        let languageStageService = new LanguageStageService()

        languageService.getAll().then(result => setLanguages(result.data.data))
        languageStageService.getAll().then(result => setLanguageStages(result.data.data))
    }, [])

    const schema = Yup.object({
        languageId: Yup.number().required(),
        languageStageId: Yup.number().required()
    })

    const initialValues = {
        languageId: "",
        languageStageId: ""
    }

    const languageOptions = languages.map((language, index) => (
        {
            key: index,
            text: language.languageName,
            value: language.id
        }
    ))

    const languageStageOptions = languageStages.map((languageStage, index) => (
        {
            key: index,
            text: languageStage.stageName,
            value: languageStage.id
        }
    ))

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                values.candidateId = 35
                candidateLanguageService.add(values).then((response) => (console.log(response)))
            }}
        >
            {({ values, handleBlur, handleSubmit, handleChange, setFieldValue , errors , touched}) => (

                <Form className="ui form" onSubmit={handleSubmit}>

                    <FormField>
                        <Dropdown
                            id="languageId"
                            type="dropdown"
                            clearable
                            fluid
                            search
                            selection
                            options={languageOptions}
                            value={values.languageId}
                            onBlur={handleBlur}
                            onChange={(event, data) => { setFieldValue("languageId", data.value) }}
                            placeholder='Select Language'
                        />

                    </FormField>

                    {errors.languageId && touched.languageId ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.languageId}</Label> : null}

                    <FormField>
                        <Dropdown
                            id="languageStageId"
                            type="dropdown"
                            clearable
                            fluid
                            search
                            selection
                            options={languageStageOptions}
                            value={values.languageStageId}
                            onBlur={handleBlur}
                            onChange={(event, data) => { setFieldValue("languageStageId", data.value) }}
                            placeholder='Select Language Stage'
                        />

                    </FormField>

                    {errors.languageStageId && touched.languageStageId ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.languageStageId}</Label> : null}

                    <Button color="green" type="submit" style={{ marginLeft: "9.5cm", marginBottom: "0.5cm" }}>Add</Button>

                </Form>


            )}






        </Formik>
    )
}
