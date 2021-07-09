import axios from 'axios'

export default class EmployerUpdateService{
    getUnapprovedUpdateByEmployerId(employerId){
        return axios.get(`http://localhost:8080/api/employerUpdates/getunapprovedupdatebyemployerid?employerId=${employerId}`)
    }

    getById(employerUpdateId){
        return axios.get(`http://localhost:8080/api/employerUpdates/getbyid?employerUpdateId=${employerUpdateId}`)
    }
}
