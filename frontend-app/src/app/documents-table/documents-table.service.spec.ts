import { TestBed } from '@angular/core/testing';

import { DocumentsTableService } from './documents-table.service';

describe('DocumentsTableServiceTsService', () => {
  let service: DocumentsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
