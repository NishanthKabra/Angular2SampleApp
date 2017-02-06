import { NgModule } from  '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductList } from './products.component';
import { ProductDetail } from './product-details.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product.filter';
import { ProductDetailGuard } from './product-guard.service';

@NgModule({
    declarations:[
        ProductList,
        ProductDetail,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
                {path: 'products', component: ProductList},
                {path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetail},
        ])
    ],
    providers: [ProductDetailGuard, ProductService]
    
})

export class ProductModule{
    
}