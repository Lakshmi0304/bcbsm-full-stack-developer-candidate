import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../documentlist/documentlist.model';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private apiUrl = 'http://localhost:8080/api/get/documents';

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<Map<string, Document>> {
    return this.http.get<Map<string, Document>>(this.apiUrl);
  }
}