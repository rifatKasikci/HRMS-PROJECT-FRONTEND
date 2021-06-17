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
}