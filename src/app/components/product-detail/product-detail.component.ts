import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any
  constructor(private productService:ProductService,private route: ActivatedRoute, private cartService:CartService){}
  ngOnInit(): void{
    this.route.params.subscribe(param=>{
      const productId = +param['id']
      this.product = this.productService.getProductById(productId)
    })
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  }
}
