import { retrieveData } from "./cacheStorageManager";
import * as RootNavigation from '../utils/RootNavigation';
import axios from "axios";
import { IP } from "./env";

export async function useAuth(){

    var checkData = await retrieveData()
    

    if(checkData == undefined 
    || JSON.parse(checkData).email == null
    || JSON.parse(checkData).senha == null
    || JSON.parse(checkData).id == null){
        RootNavigation.navigate('Login') 
        return [null, false];
    }
    const authData = JSON.parse(checkData)
    
    if(authData.isEmpregado == false){
        try{
            const response = await axios.post(`http://${IP}:3000/login/cliente`, {
                email: authData.email,
                senha: authData.senha
            })
                
            if(response.data ==''){
                RootNavigation.navigate('Login')
                return null
            }

            const responseData = response.data

            return [responseData, isLogged = true, isEmpregado = false];
        }
        catch(error){
            console.error(error)
        }
    }
    if(authData.isEmpregado == true){
        try{
            const response = await axios.post(`http://${IP}:3000/login/empregado`, {
                email: authData.email,
                senha: authData.senha
            })
                
            if(response.data ==''){
                RootNavigation.navigate('Login')
                return null
            }

            const responseData = response.data

            return [responseData, isLogged = true, isEmpregado = true];
        }
        catch(error){
            console.error(error)
        }
    }
}
