import axios from "axios"

export default class JobAdvertisementService{

    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getall")
    }

    getJobAdvertisementsById(jobAdvertisementId){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getbyid?id=" + jobAdvertisementId)
    }

    getJobAdvertisementsActiveTrue(pageNo , pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisement/getallbyactivetrue?pageNo=${pageNo}&pageSize=${pageSize}`);
    }

    getUnapprovedAdvertisements(pageNo , pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisement/findunapprovedadvertisements?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    addJobAdvertisement(values){
        return axios.post("http://localhost:8080/api/jobAdvertisement/add",values)
    }

    getJobAdvertisementsByActiveTrueAndFiltered(pageNo , pageSize , filterOptions){
        return axios.post(`http://localhost:8080/api/jobAdvertisement/findbyactivetrueandfiltered?pageNo=${pageNo}&pageSize=${pageSize}`,filterOptions)
    }

    
    

}