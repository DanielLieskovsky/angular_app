import { WelcomeComponent } from './home/welcome.component';
import { StarComponent } from './shared/star.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces-pipe';
import { HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component'
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent, //nazov classy z app componentu
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent], //prida App component ako startovaci
})
export class AppModule {}
