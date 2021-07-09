import axios from "axios";

export default class CandidateSchoolAndDepartmentService {

    getAllByCandidateIdOrderByEndingDateDesc(candidateId) {
        return axios.get(`http://localhost:8080/api/candidateSchoolWithDepartments/getallbycandidateidorderbyendingdatedesc?candidateId=${candidateId}`)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/candidateSchoolWithDepartments/getbyid?id=${id}`)
    }

    update(values){
        return axios.post("http://localhost:8080/api/candidateSchoolWithDepartments/update" , values)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/candidateSchoolWithDepartments/delete?candidateSchoolWithDepartmentId=${id}`)
    }

    add(values){
        return axios.post("http://localhost:8080/api/candidateSchoolWithDepartments/add" , values)
    }
}