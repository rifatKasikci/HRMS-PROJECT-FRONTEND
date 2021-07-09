import React,{useState , useEffect} from 'react'
import { Checkbox , Dropdown , Button} from 'semantic-ui-react'
import CityService from '../services/cityService'
import WorkingTimeService from '../services/workingTimeService'

export default function JobAdvertisementFilter({clickEvent}) {
    
    const [cities, setCities] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [cityIndex, setCityIndex] = useState([])
    const [workingTimeIndex, setWorkingTimeIndex] = useState([])
    
    useEffect(() => {
        let cityService = new CityService()
        let workingTimeService = new WorkingTimeService()

        cityService.getCities().then((result) => (setCities(result.data.data)))
        workingTimeService.getWorkingTimes().then((result) => (setWorkingTimes(result.data.data)))
    }, [])

    const handleCityChange = (event , {value}) => {
            setCityIndex(value)
    }

    const cityOptions = cities.map((city , index) => (
        {
            key : index,
            text : city.cityName,
            value : city.id
        }
    ))

    const handleWorkingTimeChange = (event , {value , checked}) => {
        if (checked) {
           workingTimeIndex.push(value)
        }else {
            let index = workingTimeIndex.indexOf(value)
            if(index > -1) {
                workingTimeIndex.splice(index, 1)
            }
        }
    }


    
    return (
        <div>
            <Dropdown 
            placeholder = "Select city"
            selection
            search
            multiple
            clearable
            options = {cityOptions}
            onChange = {handleCityChange}
            value = {cityIndex}
            />

            {
                workingTimes.map((workingTime) => (

                    <Checkbox 
                    key = {workingTime.id}
                    label = {workingTime.workingTimeName}
                    onChange = {handleWorkingTimeChange}
                    value = {workingTime.id}
                    />
                ))
            }

            <Button
            type="button"
            fluid
            color="green"
            onClick = {() => (clickEvent({cityId : cityIndex , workingTimeId : workingTimeIndex}))}
            >
                Filter
                </Button>

        </div>
    )
}
