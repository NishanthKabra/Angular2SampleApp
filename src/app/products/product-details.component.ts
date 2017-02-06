import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
    'templateUrl': './product-detail.component.html',
})

export class ProductDetail implements OnInit, OnDestroy{
    pageTitle: string = "Product Detial";
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;
    constructor(private _route:ActivatedRoute, private _router:Router, private _productService:ProductService){
        
    }
    
    ngOnInit() {
        // let productId = +this._route.snapshot.params['id'];
        // this.pageTitle += `${productId}`;
        // this.getProduct(productId);
        
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
    
     onBack(): void {
        this._router.navigate(['/products']);
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

}