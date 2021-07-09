import axios from "axios";

export default class JobExperienceService{

    getAllByCandidateIdOrderByEndingDateDesc(candidateId){
        return axios.get(`http://localhost:8080/api/jobExperiences/getallbycandidateidorderbyendingdatedesc?candidateId=${candidateId}`)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/jobExperiences/getbyid?id=${id}`)
    }

    update(values){
        return axios.post("http://localhost:8080/api/jobExperiences/update" , values)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/jobExperiences/delete?jobExperienceId=${id}`)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobExperiences/add",values)
    }
}