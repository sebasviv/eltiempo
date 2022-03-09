import axios, { AxiosResponse } from "axios"
import { API_CRUD_CORE } from "../Config/ApiConstant"
import { SellerListType } from "../types/types"

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

export const DeleteByUser = async (code: number) =>{
    try {
        const response: AxiosResponse<any> = await instance.delete(`${VENDEDORES_ENDPOINT}/${code}`)
        if(response.status === 200){
            return response
        }
    } catch (error) {
        console.log(error)
    }
}


export const UpdateByUser = async (code: number, seller: SellerListType) =>{
    try {
        
        const response: AxiosResponse<any> = await instance.put(`${VENDEDORES_ENDPOINT}/${code}`, seller)
        if(response.status === 201){
            return response
        }
    } catch (error) {
        console.log(error)
    }
}

export const CreateByUser = async (seller: SellerListType) =>{
    try {
        const response: AxiosResponse<any> = await instance.post(`${VENDEDORES_ENDPOINT}`, seller)
        if(response.status === 201){
            return response
        }
    } catch (error) {
        console.log(error)
    }
}