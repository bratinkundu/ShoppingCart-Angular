import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl : string = "http://localhost:3000/"
  constructor(private httpclient:HttpClient) { }

  getAllMobileData():Observable<any>{
    return this.httpclient.get(this.apiUrl+'mobiles')
  }

  getAllLaptopData():Observable<any>{
    return this.httpclient.get(this.apiUrl+'laptops')
  }
  getItemById(category:string,id):Observable<any>
  {
    return this.httpclient.get(this.apiUrl+category+'/'+id)
  }
  
  getLatestProducts():Observable<any>{
    return this.httpclient.get("")
  }
}
