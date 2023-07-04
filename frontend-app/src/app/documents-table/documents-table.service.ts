import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../model/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsTableService {
  private apiUrl = 'http://localhost:8080/api/get/documents';

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<Document[]> {    
    return this.http.get<Document[]>(this.apiUrl);
  }

}
