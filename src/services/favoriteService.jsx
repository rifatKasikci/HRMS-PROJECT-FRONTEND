import axios from 'axios'

export default class FavoriteService{
    getAllByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/favorites/getallbycandidateid?candidateId=${candidateId}`)
    }

    delete(candidateId , jobAdvertisementId){
        return axios.post(`http://localhost:8080/api/favorites/delete?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertisementId}`)
    }

    getByCandidateIdandJobadvertisementId(candidateId , jobAdvertisementId){
        return axios.get(`http://localhost:8080/api/favorites/getbycandidateidandjobadvertisementid?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertisementId}`)
    }

    add(candidateId , jobAdvertisementId){
        return axios.post(`http://localhost:8080/api/favorites/add?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertisementId}`)
    }
    
}