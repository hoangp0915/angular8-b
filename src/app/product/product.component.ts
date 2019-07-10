import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit() { //Giong mounted() vue / subscribe
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProduct = this.products; //gan
      },
      error => this.errorMessage = <any>error
    ); //lấy dữ liệu từ service
    
  }
  pageTitle = 'Product List';
  imageWidth: number = 170;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProduct: IProduct[];
  products: IProduct[] = [] ;
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  onClickedRating(message: string): void{
    this.pageTitle = "Product List" + message
  }
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 )
  }
}
 