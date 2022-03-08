import axios, { AxiosResponse } from "axios"
import { API_CRUD_CORE } from "../Config/ApiConstant"

const VENDEDORES_ENDPOINT = "vendedores"

const instance = axios.create({
    baseURL: API_CRUD_CORE,
    headers: {
        "Content-type": "application/json; charset=utf8",
        Accept: "application/json",
        "Acces-Control-Allow-Origin": "*"
    },
})

export const GetAllSellers = async () =>{
    try {
        const response: AxiosResponse<any> = await instance.get(VENDEDORES_ENDPOINT)
        if(response.status === 200){
            return response
        }
    } catch (error) {
        console.log(error)
    }
}

