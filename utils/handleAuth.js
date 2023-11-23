import { retrieveData } from "./cacheStorageManager";
import * as RootNavigation from '../utils/RootNavigation';
import axios from "axios";

export async function useAuth(){
        
    var checkData = await retrieveData()
    
    if(checkData == undefined){
        RootNavigation.navigate('Login')
        return [null, false];
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

            return [responseData, isLogged = true, isEmpregado = false];
        }
        catch(error){
            console.error(error)
        }
    }
    if(authData.isEmpregado == true){
        try{
            const response = await axios.post('http://10.0.2.2:3000/login/empregado', {
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
