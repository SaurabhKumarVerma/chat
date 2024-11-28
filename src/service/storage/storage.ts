import AsyncStorage from "@react-native-async-storage/async-storage";


export const saveToken = async (key: string, token: string) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(token));
    } catch (e) {
        console.log("PutStorageClientFailed");

    }
};

export const getToken = async (key: string) => {
    try {
        let keyValue = await AsyncStorage.getItem(key);
        return keyValue;
    } catch (e) {
        console.log("Failed to get Token");
        return null
    }
};

export const removeToken = async (tokenKey: string) => {
    try {
        await AsyncStorage.removeItem(tokenKey);
    } catch (e) {
        console.log("Failed to delete Token");
    }
};

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (error) {
        console.log('Failed to clear storage')
    }
}