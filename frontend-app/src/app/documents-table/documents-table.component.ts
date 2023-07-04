import { Component,ViewChild, OnInit } from '@angular/core';
import { Document } from '../model/document.model';
import { DocumentsTableService } from './documents-table.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.css']
})

  export class DocumentTableComponent implements OnInit {
    
    receivedData: any;
    msg:string='';  
    dataSource: MatTableDataSource<Document>= new MatTableDataSource<Document>;
    displayedColumns: string[] = ['documentID', 'documentName', 'uploadDate','uploadUser']; 
    @ViewChild(MatSort, { static: true  }) sort!: MatSort;  
  
    constructor(private documentService:  DocumentsTableService, private router: Router,private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.documentService.getDocuments().subscribe((data) => {        
        this.dataSource.data = data;
        console.log("data",this.dataSource.data);
      });
      // this.route.queryParams.subscribe(params => {
      //   this.receivedData = params;                
      // });
      this.msg = this.route.snapshot.queryParams['message'];      
      this.dataSource.sort = this.sort;
    }   

    applyFilter(column: string, value: string): void {      
      this.dataSource.filterPredicate = (data: Document, filter: string) => {        
        const lowerCaseFilter = filter.trim().toLowerCase();
        const fieldValue = data[column].toString().toLowerCase();        
        return fieldValue.includes(lowerCaseFilter);
      };
  
      this.dataSource.filter = value.trim().toLowerCase();
      
    }
   
  }


