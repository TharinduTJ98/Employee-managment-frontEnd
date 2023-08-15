import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServiceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  public getEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServiceUrl}/employee/add`, employee)
  }

  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServiceUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number):Observable<any>{
    return this.http.delete(`${this.apiServiceUrl}/employee/delete/${employeeId}`);
  }
}
