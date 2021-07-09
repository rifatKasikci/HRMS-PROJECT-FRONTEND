import axios from "axios";

export default class CandidateLanguageService{
    getAllByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/languageCandidatesController/getAllbycandidateid?candidateId=${candidateId}`)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/languageCandidatesController/getbyid?id=${id}`)
    }

    update(values){
        return axios.post("http://localhost:8080/api/languageCandidatesController/update" , values)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/languageCandidatesController/delete?languageCandidateId=${id}`)
    }

    add(values){
        return axios.post("http://localhost:8080/api/languageCandidatesController/add",values)
    }
}