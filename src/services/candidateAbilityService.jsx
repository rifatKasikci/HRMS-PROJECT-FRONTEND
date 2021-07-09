import axios from "axios";

export default class CandidateAbilityService {

    getAllByCandidateId(candidateId) {
        return axios.get(`http://localhost:8080/api/candidateAbilities/getallbycandidateid?candidateId=${candidateId}`)
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/candidateAbilities/getbyid?id=${id}`)
    }

    update(values){
        return axios.post("http://localhost:8080/api/candidateAbilities/update" , values)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/candidateAbilities/delete?candidateAbilityId=${id}`)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/candidateAbilities/add", values)
    }


}