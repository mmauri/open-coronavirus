/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { LoopbackCount } from '../model/loopbackCount';
import { TestAppointment } from '../model/testAppointment';
import { TestAppointmentWithRelations } from '../model/testAppointmentWithRelations';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TestAppointmentControllerService {

    protected basePath = 'http://localhost:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * @param where 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerCount(where?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<LoopbackCount>;
    public testAppointmentControllerCount(where?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoopbackCount>>;
    public testAppointmentControllerCount(where?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoopbackCount>>;
    public testAppointmentControllerCount(where?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<LoopbackCount>(`${this.configuration.basePath}/test-appointments/count`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<TestAppointment>;
    public testAppointmentControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TestAppointment>>;
    public testAppointmentControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TestAppointment>>;
    public testAppointmentControllerCreate(requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TestAppointment>(`${this.configuration.basePath}/test-appointments`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerDeleteById(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public testAppointmentControllerDeleteById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public testAppointmentControllerDeleteById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public testAppointmentControllerDeleteById(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling testAppointmentControllerDeleteById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/test-appointments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerFind(filter?: object, observe?: 'body', reportProgress?: boolean): Observable<Array<TestAppointmentWithRelations>>;
    public testAppointmentControllerFind(filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TestAppointmentWithRelations>>>;
    public testAppointmentControllerFind(filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TestAppointmentWithRelations>>>;
    public testAppointmentControllerFind(filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<TestAppointmentWithRelations>>(`${this.configuration.basePath}/test-appointments`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerFindById(id: string, filter?: object, observe?: 'body', reportProgress?: boolean): Observable<TestAppointmentWithRelations>;
    public testAppointmentControllerFindById(id: string, filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TestAppointmentWithRelations>>;
    public testAppointmentControllerFindById(id: string, filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TestAppointmentWithRelations>>;
    public testAppointmentControllerFindById(id: string, filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling testAppointmentControllerFindById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<TestAppointmentWithRelations>(`${this.configuration.basePath}/test-appointments/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public testAppointmentControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public testAppointmentControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public testAppointmentControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling testAppointmentControllerReplaceById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/test-appointments/${encodeURIComponent(String(id))}`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param where 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<LoopbackCount>;
    public testAppointmentControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoopbackCount>>;
    public testAppointmentControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoopbackCount>>;
    public testAppointmentControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<LoopbackCount>(`${this.configuration.basePath}/test-appointments`,
            requestBody,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testAppointmentControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public testAppointmentControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public testAppointmentControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public testAppointmentControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling testAppointmentControllerUpdateById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/test-appointments/${encodeURIComponent(String(id))}`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}