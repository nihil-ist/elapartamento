import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private emailApi = 'https://nodejs-zsx5.onrender.com/contactMail';
  private emailCita = 'https://nodejs-zsx5.onrender.com/citaMail';

  constructor( private httpClient:HttpClient) { }

  sendInfo(data:any){
    return this.httpClient.post(this.emailApi,data);
  }
  sendCita(data:any){
    return this.httpClient.post(this.emailCita,data);
  }
}
