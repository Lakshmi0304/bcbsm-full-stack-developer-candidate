import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  documentName!: string;
  document!: File;
  uploadUser!: string;
  uploadDate!: Date;
  constructor(private documentService: DocumentService, private router: Router) { }

  onFileSelected(event: any) {
    this.document = event.target.files[0];
  }

  onSubmit() {
    const documentationRequest = {
      documentName: this.documentName,
      document: this.document,
      uploadUser: this.uploadUser,
      uploadDate: this.uploadDate
    };    

    const formData = new FormData();
    formData.append('documentName', this.documentName);
    formData.append('document', this.document);
    formData.append('uploadUser', this.uploadUser);
    formData.append('uploadDate', this.uploadDate.toString());

      this.documentService.uploadDocument(formData).subscribe(
        (response) => {
        this.documentName = '';
        this.document;
        this.uploadUser = '';
        this.uploadDate;
        const queryParam = {
          message: 'success'          
        };
        
        this.router.navigate(['/doclist'], {
          queryParams: queryParam
        });
        },
        (error) => {
          alert('Document Upload failed.Please contact Technical support team!!');
        }
      );
    }

  }


