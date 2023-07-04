import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../document/document.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  
  private uploadapiUrl = environment.apiUrl + 'upload/documents';
  private getdocsapiUrl = environment.apiUrl + 'get/documents';  

  constructor(private http: HttpClient) {}  

  uploadDocument(formData: FormData): Observable<any> {
    return this.http.post<any>(this.uploadapiUrl, formData);
  }   

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.getdocsapiUrl);
  }
}

