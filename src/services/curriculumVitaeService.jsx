import axios from "axios";

export default class CurriculumVitaeService{

    getCurriculumVitaeDetails(candidateId){
        return axios.get(`http://localhost:8080/api/curriculumVitaesController/getcurriculumvitaedetails?candidateId=${candidateId}`)
    }

    update(values){
        return axios.post("http://localhost:8080/api/curriculumVitaesController/update",values)
    }
}