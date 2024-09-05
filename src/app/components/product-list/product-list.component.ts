import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(public productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  onSelect(product: number): void {
    // this.productService.setSelectedProduct(product)
    const selectedProduct = this.productService.getProductById(product)
  }
  // Hàm thêm sản phẩm vào giỏ hàng
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  }
}
