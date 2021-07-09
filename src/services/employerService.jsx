import axios from "axios"

export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/employers/getbyid?id=${id}`)
    }

    update(values){
        return axios.post(`http://localhost:8080/api/employers/update`,values)
    }

}