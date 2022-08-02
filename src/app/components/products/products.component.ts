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
  today = new Date(2050, 1, 1);
  date = new Date(2021, 1, 21);
   /* products: Product[] = [
    {
      id:     '1',
      title:   'Set de Brochas',
      image:  '../../../assets/image/brochas.jpg',
      price:  150,
      description: "",
      category: '',
    },
    {
      id:     '2',
      title:   'Labial MatePink',
      image:  '../../../assets/image/labial.jpg',
      price:  15,
      description: "",
      category: '',
    },
    {
      id:     '3',
      title:   'Paleta de sombras calidas',
      image:  '../../../assets/image/paleta-sombras.jpg',
      price:  100,
      description: "",
      category: '',
    },
    {
      id:     '4',
      title:   'Delineador negro',
      image:  '../../../assets/image/delineador.jpg',
      price:  12,
      description: "",
      category: '',
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
