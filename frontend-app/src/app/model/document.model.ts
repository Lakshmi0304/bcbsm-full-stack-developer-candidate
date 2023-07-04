export interface Document {
    documentID: string;
    documentName: string;
    document:string;
    uploadUser:string;
    uploadDate: Date;
    [key: string]: any
  }