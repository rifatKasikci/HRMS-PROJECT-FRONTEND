import axios from "axios"

export default class JobAdvertisementService{

    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getall")
    }

    getJobAdvertisementsById(jobAdvertisementId){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getbyid?id=" + jobAdvertisementId)
    }

    getJobAdvertisementsActiveTrue(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getallbyactivetrue");
    }

    getUnapprovedAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/findunapprovedadvertisements")
    }

    addJobAdvertisement(values){
        return axios.post("http://localhost:8080/api/jobAdvertisement/add",values)
    }

    
    

}