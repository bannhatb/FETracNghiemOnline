import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) { }
  get apiEndpoint(): string {
    return environment.API_ENDPOINT;
  }

}

