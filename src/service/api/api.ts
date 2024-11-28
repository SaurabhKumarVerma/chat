
import axios, {AxiosInstance } from 'axios';


interface IApiService {
    get<T>(url: string): Promise<T>;
    post<T>(url: string, data: any): Promise<T>;
    put<T>(url: string, data: any): Promise<T>;
    delete<T>(url: string): Promise<T>;
}

class ApiService implements IApiService {
    private api!: AxiosInstance;

    constructor() {
        this.createApiInstance();
    }

    private async createApiInstance() {
        this.api = axios.create({
            baseURL: process.env.EXPO_PUBLIC_API_URL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    
    
    public get<T>(url: string): Promise<T> {
        return this.api.get(url).then((response) => response.data as T);
    }

    public post<T>(url: string, data: any): Promise<T> {
        return this.api.post(url, data).then((response) => response.data as T);
    }

    public put<T>(url: string, data: any): Promise<T> {
        return this.api.put(url, data).then((response) => response.data as T);
    }

    public delete<T>(url: string): Promise<T> {
        return this.api.delete(url).then((response) => response.data as T);
    }
}
const apiService = new ApiService();
export default apiService;
