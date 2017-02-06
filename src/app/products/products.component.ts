import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
    //moduleId: __moduleName ,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductList implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {
        
    }
    
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}