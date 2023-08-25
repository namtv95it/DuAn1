import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParam } from 'src/app/model/common/request-param';
import { ApiUrlUtil } from 'src/app/utils/api-url.util';
import { HeadersUtil } from 'src/app/utils/headers.util';
import { ParamUtil } from 'src/app/utils/param.util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Edu020102Service {
  constructor(private http: HttpClient) {
  }

  searchTeacher(request: any): Observable<any> {
    const headers: HttpHeaders = HeadersUtil.getHeadersAuth();
    const params: RequestParam[] = ParamUtil.toRequestParams(request);
    const url = ApiUrlUtil.buildQueryString(
      environment.apiURL + '/edu/edu0201/searchTeacher',
      params
    );
    return this.http.get(url, { headers: headers });
  }

  getTeacherByClass(ClassId: any): Observable<any> {
    const headers: HttpHeaders = HeadersUtil.getHeadersAuth();
    const url = environment.apiURL + '/edu/edu0201/searchTeacherByClassId/' + ClassId;
    return this.http.get(url, { headers: headers });
  }
}
