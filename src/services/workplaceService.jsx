import axios from "axios"

export default class WorkplaceService{
   getWorkplaces(){
        return axios.get("http://localhost:8080/api/workplaces/getall")
   }
}