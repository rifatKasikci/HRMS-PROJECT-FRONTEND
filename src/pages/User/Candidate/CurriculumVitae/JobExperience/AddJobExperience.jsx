import React, { useState, useEffect } from 'react'
import * as Yup from "yup"
import { Formik } from 'formik'
import { Form, FormField, Input, Dropdown, Button, Label } from 'semantic-ui-react'
import JobPositionService from '../../../../../services/jobPositionService'
import WorkplaceService from '../../../../../services/workplaceService'
import { data } from 'jquery'
import JobExperienceService from '../../../../../services/jobExperienceService'

export default function AddJobExperience() {

    const jobExperience = new JobExperienceService()

    const [jobPositions, setJobPositions] = useState([])
    const [workplaces, setWorkplaces] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        let workplaceService = new WorkplaceService()

        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
        workplaceService.getWorkplaces().then(result => setWorkplaces(result.data.data))

    }, [])

    const initialValues = {
        jobPositionId: "",
        workplaceId: "",
        startingDate: "",
        endingDate: ""
    }

    const schema = Yup.object({
        jobPositionId: Yup.number().required(),
        workplaceId: Yup.number().required(),
        startingDate: Yup.date().required(),
    })

    const jobPositionOptions = jobPositions.map((jobPosition, index) => (
        {
            key: index,
            text: jobPosition.positionName,
            value: jobPosition.id
        }
    ))

    const workplaceOptions = workplaces.map((workplace, index) => (
        {
            key: index,
            text: workplace.workplaceName,
            value: workplace.id
        }
    ))

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                values.candidateId = 35
                jobExperience.add(values).then((response) => (console.log(response)))

            }}
        >
            {({ handleChange, handleBlur, touched, errors, handleSubmit, values, setFieldValue }) => (

                <Form className="ui form" onSubmit={handleSubmit}>
                    <FormField>
                        <Dropdown
                            id="jobPositionId"
                            type="dropdown"
                            clearable
                            fluid
                            search
                            selection
                            options={jobPositionOptions}
                            value={values.jobPositionId}
                            onBlur={handleBlur}
                            onChange={(event, data) => { setFieldValue("jobPositionId", data.value) }}
                            placeholder='Select Job Position'
                        />
                    </FormField>

                    {errors.jobPositionId && touched.jobPositionId ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.jobPositionId}</Label> : null}

                    <FormField>
                        <Dropdown
                            id="workplaceId"
                            type="dropdown"
                            clearable
                            fluid
                            search
                            selection
                            options={workplaceOptions}
                            onChange={(event, data) => { setFieldValue("workplaceId", data.value) }}
                            onBlur={handleBlur}
                            value={values.workplaceId}
                            placeholder='Select Workplace'
                        />
                    </FormField>

                    {errors.workplaceId && touched.workplaceId ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.workplaceId}</Label> : null}

                    <FormField>
                        <Input
                            id="startingDate"
                            type="date"
                            onChange={(evet, data) => { setFieldValue("startingDate", data.value) }}
                            value={values.startingDate}
                        />
                    </FormField>

                    {errors.startingDate && touched.startingDate ? <Label basic color='red' pointing='above' style={{ marginBottom: "0.5cm" }}>{errors.startingDate}</Label> : null}

                    <FormField>
                        <Input
                            id="endingDate"
                            type="date"
                            onChange={(evet, data) => { setFieldValue("endingDate", data.value) }}
                            value={values.endingDate}
                        />
                    </FormField>
                    <Button color="green" type="submit" style={{ marginLeft: "9.5cm", marginBottom: "0.5cm" }}>Add</Button>
                </Form>
            )
            }
        </Formik>
    )
}
