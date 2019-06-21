import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ApiInterceptor', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let testUrl = '/test';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    it('should append api key in url', () => {
        httpClient.get<any>(testUrl)
            .subscribe(data =>
                expect(data).toEqual({})
            )

        const req = httpTestingController.expectOne(testUrl);

        expect(req.request.method).toEqual('GET');
        expect(req.request.url.includes('api_key'));

        req.flush({});
    });
}); 
