import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {


    tulos: string = 'Moro';
    apitulos = 'Moro taas';
    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    coinmarketcap = 'https://api.coinmarketcap.com/v1/ticker/';
    cointulos: any;
    ethereum: any;

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.coinmarketcap + 'bitcoin').subscribe(data => {
            console.log(data);
            this.cointulos = data;
        });
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log(data[0].filename);
            this.apitulos = this.kuvaosoite + data[0].filename;
        });
        this.http.get(this.coinmarketcap + 'ethereum').subscribe(data2 => {
            console.log(data2);
            this.ethereum = data2;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
    }

}
