import { retrieveData } from "./cacheStorageManager";
import * as RootNavigation from '../utils/RootNavigation';
import axios from "axios";
import { CommonActions } from "@react-navigation/native";
import { useState } from "react";

export async function useAuth(){
    
    var responseData = {}
    
    var checkData = await retrieveData()
    
    if(checkData == undefined){
        RootNavigation.navigate('Login')
        return;
    }

    const authData = JSON.parse(checkData)

    if(authData.isEmpregado == false){
        try{
            const response = await axios.post('http://10.0.2.2:3000/login/cliente', {
                email: authData.email,
                senha: authData.senha
            })
                
            if(response.data ==''){
                RootNavigation.navigate('Login')
                return null
            }

            const responseData = response.data

            return responseData;
        }
        catch(error){
            console.error(error)
        }
    }
    if(authData.isEmpregado == true){
        try{
            const response = await axios.post('http://10.0.2.2:3000/login/cliente', {
                email: authData.email,
                senha: authData.senha
            })
                
            if(response.data ==''){
                RootNavigation.navigate('Login')
                return null
            }

            const responseData = response.data

            return responseData;
        }
        catch(error){
            console.error(error)
        }
    }
}
