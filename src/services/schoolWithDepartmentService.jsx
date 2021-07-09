import axios from "axios"

export default class SchoolWithDepartmentService{
    getSchoolWithDepartments(){
        return axios.get("http://localhost:8080/api/schoolAndDepartmentsController/getall")
    }
}