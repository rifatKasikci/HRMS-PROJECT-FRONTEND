import axios from "axios"

export default class WayOfWorkingService{

    getWayOfWorkings(){
        return axios.get("http://localhost:8080/api/wayOfWorkings/getall")
    }
}