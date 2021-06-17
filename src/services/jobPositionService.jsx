import axios from "axios"

export default class JobPosition{
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobPositions/getall")
    }
}