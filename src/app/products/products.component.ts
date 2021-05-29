import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products$;
  categories$;
  category:string;

  constructor(productService: ProductService, categoryService: CategoryService, route: ActivatedRoute, private shoppingcartService: ShoppingCartService)
  {
    this.products$ = productService.getAll().snapshotChanges();

    console.log(this.products$);

    this.categories$ = categoryService.getCategories().snapshotChanges();


    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    })
  }

}
