package org.com.backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.com.backend.model.Documents;
import org.com.backend.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping
public class DocumentController {
    @Autowired
    private DocumentService documentService;    
    
    @PostMapping(value = "/api/upload/documents", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
     public Documents uploadDocument(@RequestParam("document") MultipartFile file, @RequestParam("documentName") String name, @RequestParam("uploadUser") String user,@RequestParam("uploadDate") String date) throws IOException {
    	Documents document = new Documents();
        document.setDocumentName(name);
        document.setDocument(file.getBytes());
        document.setUploadUser(user);
        document.setUploadDate(date);        
        return documentService.uploadDocument(document);    }

    @GetMapping("/api/get/documents")
    public List<Documents> getAllDocuments() {    	
        List<Documents> docsList = documentService.getAllDocuments();
        return docsList;
    }    

    @GetMapping("/{id}/content")
    public ResponseEntity<byte[]> downloadDocument(@PathVariable String id) {
        
        Documents document = documentService.getDocumentById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDisposition(ContentDisposition.builder("attachment").filename(document.getDocumentName()).build());
        byte[] contentBytes = document.getContent().getBytes(); 
        return new ResponseEntity<>(contentBytes, headers, HttpStatus.OK);
    }
    
    
   
}