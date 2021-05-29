import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { map } from 'rxjs-compat/operator/map';





@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product)
  {
    return this.db.list('/products' ).push(product);
  }

  getAll()
  {
    //console.log(this.db.list('/products'));
    return this.db.list('/products');
  }


  get(productId)
  {
    return this.db.object('/products/'+productId);
  }

  update(productId, product)
  {
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId)
  {
    return this.db.object('/products/'+productId).remove();
  }

}
