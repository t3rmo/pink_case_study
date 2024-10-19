import axios, { AxiosInstance, AxiosResponse } from "axios";

export class HttpService {
  private baseUrl: string = "https://hapi.fhir.org/baseR4";
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: this.baseUrl });
  }

  async get(subUrl: string): Promise<AxiosResponse<any, any>> {
    return this.instance.get(subUrl);
  }

  async post(subUrl: string, data: any): Promise<AxiosResponse<any, any>> {
    return this.instance.post(subUrl, data);
  }

  async put(subUrl: string, data: any): Promise<AxiosResponse<any, any>> {
    return this.instance.put(subUrl, data);
  }

  async delete(subUrl: string): Promise<AxiosResponse<any, any>> {
    return this.instance.delete(subUrl);
  }
}
