package org.com.backend.service;

import java.util.List;

import org.com.backend.model.Documents;
import org.com.backend.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    public Documents uploadDocument(Documents document) {
        return documentRepository.save(document);
    }
    
    public List<Documents> getAllDocuments() {
        return documentRepository.findAll();
    }

    public Documents getDocumentById(String id) {
        return documentRepository.findById(id).orElse(null);
    }
    
}
