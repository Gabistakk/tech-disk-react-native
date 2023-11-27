import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(email, senha, id, isEmpregado){
    try {
      await AsyncStorage.setItem(
        'login',
        JSON.stringify({
            email: email,
            senha: senha,
            id: id,
            isEmpregado: isEmpregado
        }),
      );
    } catch (error) {
      // Error saving data
    }
  };

export async function retrieveData(){
    let value;
    try {
      value = await AsyncStorage.getItem('login')
    } catch (error) {
        console.log(error)
    }
    finally{
        if(value !== null) {
            return value;
        }
    }
  }