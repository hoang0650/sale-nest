import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any
  constructor(private productService:ProductService,private route: ActivatedRoute){}
  ngOnInit(): void{
    this.route.params.subscribe(param=>{
      const productId = +param['id']
      this.product = this.productService.getProductById(productId)
    })
  }
}
