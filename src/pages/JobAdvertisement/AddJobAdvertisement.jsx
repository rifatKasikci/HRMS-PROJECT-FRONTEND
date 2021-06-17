import { Field, useFormik } from 'formik';
import { result, values } from 'lodash';
import { Dropdown, Form, Input, Label, TextArea, Button, Header, Icon, Image, Divider } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import * as Yup from "yup";
import JobAdvertisementService from '../../services/jobAdvertisementService'
import CityService from '../../services/cityService'
import WorkplaceService from '../../services/workplaceService'
import JobPositionService from '../../services/jobPositionService'
import WayOfWorkingService from '../../services/wayOfWorkingService'
import WorkingTimeService from '../../services/workingTimeService'

export default function AddJobAdvertisement() {

    let jobAdvertisementService = new JobAdvertisementService()

    const jobAdvertValidationScheme = Yup.object().shape({

        cityId: Yup.number()
            .required("City ​​field cannot be left blank"),
        workplaceId: Yup.number()
            .required("Workplace ​​field cannot be left blank"),
        jobPositionId: Yup.number()
            .required("Job Position ​​field cannot be left blank"),
        minSalary: Yup.number()
            .required("Minimum Salary ​​field cannot be left blank")
            .min(1 , "Minimum Salary cannot be less or equal to 0"),
        maxSalary: Yup.number()
            .required("Maximum Salary ​​field cannot be left blank")
            .min(1,"Maximum Salary cannot be less or equal to 0"),
        numberOfOpenPosition: Yup.number()
            .required("Number Of Open Position ​​field cannot be left blank"),
        applicationDeadline: Yup.date("Invalid date")
            .required("Application Deadline ​​field cannot be left blank"),
        description: Yup.string()
            .required("Description ​​field cannot be left blank"),
        wayOfWorkingId: Yup.number()
            .required("Way Of Working ​​field cannot be left blank"),
        workingTimeId: Yup.number()
            .required("Working Time ​​field cannot be left blank")
            


    })

    const formik = useFormik({
        initialValues: {
            cityId: "",
            workplaceId: "",
            jobPositionId: "",
            wayOfWorkingId: "",
            workingTimeId: "",
            minSalary: "",
            maxSalary: "",
            numberOfOpenPosition: "",
            applicationDeadline: "",
            description: ""
        }, validationSchema: jobAdvertValidationScheme, onSubmit: (values) => {
            values.employerId = 28
            console.log(values)
            jobAdvertisementService.addJobAdvertisement(values).then((response) => console.log(response))
            setTimeout(() => {
                formik.setSubmitting(false) 
                formik.resetForm()
             },1000)

        },
    })

    const [workplaces, setWorkplaces] = useState([])
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [wayOfWorkings, setWayOfWorkings] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])

    useEffect(() => {
        let workplaceService = new WorkplaceService()
        let cityService = new CityService()
        let jobPositionService = new JobPositionService()
        let wayOfWorkingService = new WayOfWorkingService()
        let workingTimeService = new WorkingTimeService()

        workplaceService.getWorkplaces().then(result => setWorkplaces(result.data.data))
        cityService.getCities().then(result => setCities(result.data.data))
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
        wayOfWorkingService.getWayOfWorkings().then(result => setWayOfWorkings(result.data.data))
        workingTimeService.getWorkingTimes().then(result => setWorkingTimes(result.data.data))

    }, [])

    const workplaceOption = workplaces.map((workplace, index) => (
        {
            key: index,
            text: workplace.workplaceName,
            value: workplace.id,
        }
    ))

    const jobPositionOption = jobPositions.map((jobPosition, index) => (
        {
            key: index,
            text: jobPosition.positionName,
            value: jobPosition.id,
        }
    ))

    const cityOption = cities.map((city, index) => (
        {
            key: index,
            text: city.cityName,
            value: city.id,
        }
    ))

    const wayOfWorkingOption = wayOfWorkings.map((wayOfWorking, index) => (
        {
            key: index,
            text: wayOfWorking.wayOfWorkingName,
            value: wayOfWorking.id
        }

    ))

    const workingTimeOption = workingTimes.map((workingTime, index) => (
        {
            key: index,
            text: workingTime.workingTimeName,
            value: workingTime.id
        }
    ))

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value)
    }

    return (
        <div>

            <Header as='h2' icon textAlign='center'>
                <Icon name='attach' circular />
                <Header.Content>Create Job Advertisement</Header.Content>
            </Header>


            <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                    <Dropdown
                        placeholder='Select Job Position'
                        fluid
                        selection
                        search
                        options={jobPositionOption}
                        id="jobPositionId"
                        name = "jobPositionId"
                        onChange={(event, data) => handleChangeSemantic(data.value, "jobPositionId")}
                        onBlur={formik.handleBlur}
                        value={formik.values.jobPositionId}
                    />
                </Form.Field>

                {formik.errors.jobPositionId && formik.touched.jobPositionId ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.jobPositionId}</Label> : null}


                <Form.Field>
                    <Input
                       id = "numberOfOpenPosition"
                       type="number"
                        name="numberOfOpenPosition"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.numberOfOpenPosition}
                        placeholder='Enter The Number Of Open Position'>
                    </Input>
                        
                        

                </Form.Field>

                {formik.errors.numberOfOpenPosition && formik.touched.numberOfOpenPosition ? <Label pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.numberOfOpenPosition}</Label> : null}

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='location arrow' />
                        Location
                    </Header>
                </Divider>

                <Form.Field>
                    <Dropdown
                        placeholder='Select City'
                        fluid
                        selection
                        search
                        options={cityOption}
                        id="cityId"
                        name = "cityId"
                        onChange={(event, data) => handleChangeSemantic(data.value, "cityId")}
                        onBlur={formik.handleBlur}
                        value={formik.values.cityId}
                    />
                </Form.Field>

                {formik.errors.cityId && formik.touched.cityId ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.cityId}</Label> : null}

                <Form.Field>
                    <Dropdown
                        placeholder='Select Workplace'
                        fluid
                        selection
                        search
                        options={workplaceOption}
                        id="workplaceId"
                        name = "workplaceId"
                        onChange={(event, data) => handleChangeSemantic(data.value, "workplaceId")}
                        onBlur={formik.handleBlur}
                        value={formik.values.workplaceId}
                    />
                </Form.Field>

                {formik.errors.workplaceId && formik.touched.workplaceId ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.workplaceId}</Label> : null}

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='warehouse' />
                        Type Of Working
                    </Header>
                </Divider>

                <Form.Field>
                    <Dropdown
                        placeholder='Select Way Of Working'
                        fluid
                        selection
                        search
                        options={wayOfWorkingOption}
                        id="wayOfWorkingId"
                        name = "wayOfWorkingId"
                        onChange={(event, data) => handleChangeSemantic(data.value, "wayOfWorkingId")}
                        onBlur={formik.handleBlur}
                        value={formik.values.wayOfWorkingId}
                    />
                </Form.Field>

                {formik.errors.wayOfWorkingId && formik.touched.wayOfWorkingId ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.wayOfWorkingId}</Label> : null}

                <Form.Field>
                    <Dropdown
                        placeholder='Select Working Time'
                        fluid
                        selection
                        search
                        options={workingTimeOption}
                        id="workingTimeId"
                        name = "workingTimeId"
                        onChange={(event, data) => handleChangeSemantic(data.value, "workingTimeId")}
                        onBlur={formik.handleBlur}
                        value={formik.values.workingTimeId}
                    />
                </Form.Field>

                {formik.errors.workingTimeId && formik.touched.workingTimeId ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.workingTimeId}</Label> : null}

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='tag' />
                        Pricing
                    </Header>
                </Divider>

                <Form.Field>
                    <Input
                        labelPosition='right'
                        type='text'
                        placeholder='Maximum Salary'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        value={formik.values.maxSalary}
                        id = "maxSalary"
                        name="maxSalary"
                        style = {{marginTop : '0.5em'}}

                    >
                        <Label basic>$</Label>
                        <input />
                        <Label>.00</Label>
                    </Input>

                </Form.Field>

                {formik.errors.maxSalary && formik.touched.maxSalary ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.maxSalary}</Label> : null}

               
               
                <Form.Field>
                    <Input
                        labelPosition='right'
                        type='text'
                        placeholder='Minimum Salary'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        value={formik.values.minSalary}
                        id = "minSalary"
                        name="minSalary"
                        style = {{marginTop : '1em'}}
                    >
                        <Label basic>$</Label>
                        <input />
                        <Label>.00</Label>
                    </Input>

                </Form.Field>

                {formik.errors.minSalary && formik.touched.minSalary ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.minSalary}</Label> : null}

                
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='calendar' />
                        Date
                    </Header>
                </Divider>

                <Form.Field>
                    <Input
                        type="date"
                        onChange={(event, data) =>
                            handleChangeSemantic(data.value, "applicationDeadline")
                        }
                        onBlur={formik.handleBlur}
                        value={formik.values.applicationDeadline}
                        placeholder="Application Deadline"
                        name = "applicationDeadline"
                        name="applicationDeadline"
                    >
                    </Input>
                </Form.Field>

                {formik.errors.applicationDeadline && formik.touched.applicationDeadline ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.applicationDeadline}</Label> : null}

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='talk' />
                        Description
                    </Header>
                </Divider>

                <Form.Field>
                    <TextArea
                        placeholder='Description'
                        style={{ minHeight: 100 }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        type="text"
                        id = "description"
                        name="description"
                    />

                </Form.Field>

                {formik.errors.description && formik.touched.description ? <Label  pointing = "above"style={{marginTop:'0.1em'}}>{formik.errors.description}</Label> : null}

                <Form.Field>
                    <Button basic
                        color='green'
                        content='Add'
                        type="submit"
                        style = {{marginTop : '0.5em'}}
                    />
                </Form.Field>

            </Form>
        </div>






    )

}
