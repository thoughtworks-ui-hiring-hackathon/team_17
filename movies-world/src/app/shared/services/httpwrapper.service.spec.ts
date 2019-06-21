import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { HttpwrapperService } from './httpwrapper.service';
import { of } from 'rxjs';

describe('HttpWrapperService', () => {
  let testUrl: string = '/test';
  let httpClientSpy: HttpClient;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', { get: of({}) });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ HttpClient, useValue: httpClientSpy }]
    });
  });

  afterEach(() => {
    httpClientSpy = null;
  });

  it('should send http request', () => {
    const httpService = new HttpwrapperService(httpClientSpy);
    httpService.get(testUrl);

    expect(httpClientSpy.get).toHaveBeenCalled();
  });
});
