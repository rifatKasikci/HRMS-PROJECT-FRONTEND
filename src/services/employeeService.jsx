import axios from  "axios"

export default class EmployeeService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }

    getUnapprovedAdvertisements(){
        return axios.get("http://localhost:8080/api/employees/findunapprovedadvertisements")
    }

    deleteJobAdvertisement(id){
        axios.delete(`http://localhost:8080/api/employees/deletejobadvertisement?jobAdvertisementId=${id}`)
    }

    confirmJobAdvertisement(id){
        axios.post(`http://localhost:8080/api/employees/confirmjobadvertisement?jobAdvertisementId=${id}`)
    }

    update(values){
        return axios.post(`http://localhost:8080/api/employees/update`,values)
    }

    getUnapprovedUpdateRequests(){
    return axios.get(`http://localhost:8080/api/employees/getunapprovedupdaterequests`)
    }

    confirmEmployerUpdate(employerId){
        return axios.post(`http://localhost:8080/api/employees/confirmemployeruptade?employerId=${employerId}`)
    }

    unapproveEmployerUpdate(employerId){
        return axios.post(`http://localhost:8080/api/employees/unapproveemployeruptade?employerId=${employerId}`)
    }

    getById(employeeId){
        return axios.get(`http://localhost:8080/api/employees/getbyid?employerId=${employeeId}`)
    }
}