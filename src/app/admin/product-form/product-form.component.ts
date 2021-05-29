import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product: any = {};
  id;

  constructor
  (private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute)
  {
    this.categories$ = categoryService.getCategories().snapshotChanges();

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) this.productService.get(this.id).valueChanges().take(1).subscribe(p => this.product =p);

  }

  save(product)
  {
    //if id is already present it updates
    if(this.id)  this.productService.update(this.id,product);

    //else it creates
    else  this.productService.create(product);

    //it navigates to product page
    this.router.navigate(['/admin/products']);
  }

  delete()
  {
      if(!confirm('Are you sure you want to delete this product'))
        return;

      this.productService.delete(this.id);

      //it navigates to product page
      this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void {
  }

}
