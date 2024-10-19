import { HttpService } from "./HttpService";

export class PatientService {
  private patientSubUrl: string = "/Patient/";
  private httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  async getPatientById(patientId: string) {
    const subUrl: string = this.patientSubUrl + patientId;
    return this.httpService.get(subUrl);
  }
}
