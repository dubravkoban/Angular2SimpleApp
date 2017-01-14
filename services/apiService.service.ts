import { Injectable } from '@angular/core';
import { Rizik } from '../models/rizik.model';
import { Proces } from '../models/proces.model';
import { Aktivnost } from '../models/aktivnost.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';   
import { Config } from '../../config';

@Injectable()
export class ApiService{
    url = "http://localhost:3100";
    verboseLogging: boolean = false;

    constructor(private http: Http, private config: Config){
        // var result: any;
        
        // this.config.getConfig().subscribe(data => result = data);
        // console.log(result);
        // if (this.getValue(result, "verbosity") === "true") {
        //     this.verboseLogging = true;
        // }
        // console.log(result)
        // console.log(this.getValue(result, "verbosity"))
        // console.log("Final (?) result is: " + this.verboseLogging);
        // if (this.config.getByKey("verbosity")[0] === "true") {
        //     this.verboseLogging = true;
        // }
    }

    extractData(res: Response){
        let body = res.json();
        return body || {};
    }

    handleError(error: any){
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    getHeaderOptions() : RequestOptions {
        let header = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return options;
    }

    /* ---------------------------- Generic methods ---------------------*/

    getModels(model: any) : Observable<any> {
        let route: string;
        switch(model)
        {
            case model instanceof Rizik:
                route = "/rizici";
                break;
            case model instanceof Proces:
                route = "/procesi";
                break;
            case model instanceof Aktivnost:
                route = "/aktivnosti";
                break;
            default:
                break;
        }

        if(this.verboseLogging) {
            console.log("Route is: " + route);
        }

        let options = this.getHeaderOptions();
        return this.http.get(this.url + route, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    getModelById(model: any, id: number) : Observable<any> {
        let route: string;
        switch(model)
        {
            case model instanceof Rizik:
                route = "/rizik";
                break;
            case model instanceof Proces:
                route = "/proces";
                break;
            case model instanceof Aktivnost:
                route = "/aktivnost";
                break;
            default:
                break;
        }

         if(this.verboseLogging) {
            console.log("Route is: " + route);
        }

        let options = this.getHeaderOptions();
        return this.http.get(this.url + route + "?id=" + id, options)
                    .map(this.extractData)
                    .catch(this.handleError); 
    }

    insertModel(model: any) : Observable<any> {
        let route: string;
        switch(model)
        {
            case model instanceof Rizik:
                route = "/insertRizik";
                break;
            case model instanceof Proces:
                route = "/insertProces";
                break;
            case model instanceof Aktivnost:
                route = "/insertAktivnost";
                break;
            default:
                break;
        }

         if(this.verboseLogging) {
            console.log("Route is: " + route);
        }

        let body = JSON.stringify(model);
        let options = this.getHeaderOptions();
        return this.http.put(this.url + route, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    updateModel(model: any) : Observable<any> {
        let route: string;
        switch(model)
        {
            case model instanceof Rizik:
                route = "/updateRizik";
                break;
            case model instanceof Proces:
                route = "/updateProces";
                break;
            case model instanceof Aktivnost:
                route = "/updateAktivnost";
                break;
            default:
                break;
        }

        if(this.verboseLogging) {
            console.log("Route is: " + route);
        }

        let body = JSON.stringify(model);
        let options = this.getHeaderOptions();
        return this.http.post(this.url + route, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    deleteModel(model: any, id: number) {
        let route: string;
        switch(model)
        {
            case model instanceof Rizik:
                route = "/deleteRizik/";
                break;
            case model instanceof Proces:
                route = "/deleteProces/";
                break;
            case model instanceof Aktivnost:
                route = "/deleteAktivnost/";
                break;
            default:
                break;
        }

        if(this.verboseLogging) {
            console.log("Route is: " + route);
        }

        let options = this.getHeaderOptions();
        this.http.delete(this.url + route + id, options).subscribe();
    }

    /*----------------------End ---------------------------------------*/

    getValue(obj, key) {
        var object: string;
        console.log(obj);
        for (var i in obj) {
            if(i == key){
                object = obj[i];
            }

            // if (!obj.hasOwnProperty(i)) continue;
            // if (typeof obj[i] == 'object') {
            //     objects = objects.concat(this.getValues(obj[i], key));
            // } else if (i == key) {
            //     objects.push(obj[i]);
            // }
        }
        return object;
        }

    
    /*---------------------------Start proces-----------------------------*/

    // getProcesi() : Observable<any> {
    //     let header = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: header });

    //     return this.http.get(this.url + '/procesi', options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);
    // }


    /*----------------------End proces------------------------------------*/


    /*----------------------Start rizik-------------------------------*/

    // getRizici() : Observable<any> {
    //     let header = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: header });

    //     return this.http.post(this.url + '/bljeeee', options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);
    // }

    // getRizik(id: number): Observable<any> {
    //     let header = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: header });

    //     return this.http.get(this.url + "/rizik?id=" + 1, options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError); 
    // }

    // // todo: create generic method with any type
    // insertRizik(rizik: Rizik) : Observable<any> {
    //     let body = JSON.stringify(rizik);
    //     let header = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: header });

    //     return this.http.put(this.url + "/insertRizik", body, options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);
    // }

    // deleteRizik(rizik: string) {
    //     console.log("inside deleteRizik");

    //     let header = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: header });
        
    //     this.http.delete(this.url + '/DeleteRizik/' + rizik, options).subscribe();
    // }

    /*---------------------------End rizik---------------------------------*/

    /*---------------------------Start aktivnost-----------------------------*/

    // getAktivnosti() : Observable<any> {
    //     let header = new Headers({ 'Content-type': 'application/json' });
    //     let options = new RequestOptions({ headers: header });

    //     return this.http.get(this.url + '/aktivnosti', options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);
    // }


    /*----------------------End aktivnost------------------------------------*/
}