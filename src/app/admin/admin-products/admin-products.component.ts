import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products$;

  constructor(private productService: ProductService)
  {
    this.products$=this.productService.getAll().snapshotChanges();
  }


}
