import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {GlobalVariables} from '../common/global-variables'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl : string = GlobalVariables.apiUrl
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
    return this.httpclient.get(this.apiUrl+'latest')
  }
}
