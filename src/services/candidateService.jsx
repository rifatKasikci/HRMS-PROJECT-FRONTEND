import axios from "axios"

export default class CandidateService{

    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }

    getById(candidateId){
        return axios.get(`http://localhost:8080/api/candidates/getbyid?candidateId=${candidateId}`)
    }

    update(values){
        return axios.post("http://localhost:8080/api/candidates/update",values)
    }
}