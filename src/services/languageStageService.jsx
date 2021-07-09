import axios from 'axios'

export default class LanguageStage{

    getAll(){
        return axios.get("http://localhost:8080/api/languageStagesController/getall")
    }
    
}