import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  onSelect(product: number): void {
    // this.productService.setSelectedProduct(product)
    const selectedProduct = this.productService.getProductById(product)
  }
}
