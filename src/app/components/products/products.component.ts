import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  /*products: Product[] = [
    {
      id:     '1',
      name:   'Set de Brochas',
      image:  '../../../assets/image/brochas.jpg',
      price:  150
    },
    {
      id:     '2',
      name:   'Labial MatePink',
      image:  '../../../assets/image/labial.jpg',
      price:  15
    },
    {
      id:     '3',
      name:   'Paleta de sombras calidas',
      image:  '../../../assets/image/paleta-sombras.jpg',
      price:  100
    },
    {
      id:     '4',
      name:   'Delineador negro',
      image:  '../../../assets/image/delineador.jpg',
      price:  12
    }
  ];*/

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
