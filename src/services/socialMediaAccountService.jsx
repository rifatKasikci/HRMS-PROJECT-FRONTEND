import axios from "axios";

export default class SocialMediaAccountService{
    getAllByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/socialMediaAccounts/getallbycandidateid?candidateId=${candidateId}`)
    }
}