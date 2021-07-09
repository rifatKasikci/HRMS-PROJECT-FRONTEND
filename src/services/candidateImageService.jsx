import axios from "axios";

export default class CandidateImageService{
    getAllByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/candidateImages/getallbycandidateid?candidateId=${candidateId}`)
    }

    uploadImage(candidateId , file){
        return axios.post(`http://localhost:8080/api/candidateImages/add?candidateId=${candidateId}`,file)
    }
}