import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSource = new BehaviorSubject<any[]>([]);
  products$ = this.productsSource.asObservable()
  // products$ = this.apiService.loadData<any>('rooms');

  constructor() {
    // Mô phỏng việc tải dữ liệu từ server
    this.loadProducts();
  }

  private loadProducts() {
    // Cách 1: Data Set Cứng
    // Giả sử có một API hoặc dữ liệu từ server
    const fakeServerData = [
      { id: 1, name: 'Yến tinh chế', description: 'Yến đã được tinh chế đảm bảo chất lượng và có thể chưng lên để sử dụng ngay', price: 3200000, image:'../../../assets/images/yendonghop1.jpg' },
      { id: 2, name: 'Yến sơ chế', description: 'Yến chưa được qua tinh chế và cần phải lông trước khi chưng lên sử dụng', price: 2300000, image:'../../../assets/images/yendonghop1.jpg' },
      { id: 3, name: 'Yến thô', description: 'Yến được hái trực tiếp từ tổ yến đảm bảo nguyên chất', price: 2000000, image:'../../../assets/images/yendonghop1.jpg' },
      // { id: 4, name: 'Product 1', description: 'Description 4' },
      // { id: 5, name: 'Product 2', description: 'Description 5' },
      // { id: 6, name: 'Product 3', description: 'Description 6' },
      // { id: 7, name: 'Product 1', description: 'Description 7' },
      // { id: 8, name: 'Product 2', description: 'Description 8' },
     
    ];


    // Cập nhật dữ liệu trong BehaviorSubject
    this.productsSource.next(fakeServerData);
    
  }

  loadUpdatedData() {
    this.loadProducts();
  }
  
  updateProducts(newData: any[]): void {
    this.productsSource.next(newData);
  }

  // updateProducts(updatedProduct: any): Observable<any> {
  //   const currentProducts = this.productsSource.value;

  //   // Find the index of the product in the local array
  //   const index = currentProducts.findIndex(product => product.roomNumber === updatedProduct.roomNumber);

  //   if (index !== -1) {
  //     // Update the local array
  //     const updatedProducts = [...currentProducts];
  //     updatedProducts[index] = { ...updatedProduct };
  //     this.productsSource.next(updatedProducts);
  //     // Update the product in the API
  //     return this.http.put<any>('https://hotel-app-smp2.onrender.com/checkin' + updatedProduct.roomNumber, updatedProduct)
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error updating room:', error);
  //         return of(null); // Return an observable that emits null in case of an error
  //       })
  //     );
  // }

  // // If the product is not found, return an observable that emits null
  // return of(null); // Handle error if the product is not found
  // }

  setSelectedProduct(product: any): void {
    this.productsSource.next(product);
  }

  getSelectedProduct(): Observable<any> {
    return this.productsSource.asObservable();
  }

  getProductById(id: any): any {
    // Lấy sản phẩm từ dữ liệu hiện tại
    const currentProducts = this.productsSource.value;
    return currentProducts.find(product => product.roomNumber === id);
  }


}
