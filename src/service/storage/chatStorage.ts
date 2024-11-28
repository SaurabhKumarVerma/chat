import { clearStorage, getToken, removeToken, saveToken } from './storage';


class ChatAsyncStorage {

    async chatStorageToken(key: string, value: string){
        try {
            await saveToken(key, value)
        } catch (error) {
            console.log("Error while saving token");
            
        }
    }

    async chatGetStorageToken(key: string){
        try {
            await getToken(key)
        } catch (error) {
            console.log("Error while getting token");
            
        }
    }

    async chatRemoveStorageToken(key: string){
        try {
            await removeToken(key)
        } catch (error) {
            console.log("Error while removing token");
            
        }
    }

    async chatClearStorageToken(){
        try {
            await clearStorage()
        } catch (error) {
            console.log("Error while clearing token");
            
        }
    }
}

export default new ChatAsyncStorage()