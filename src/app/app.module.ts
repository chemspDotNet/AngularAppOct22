import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomModule } from './modules/custom.module'; 
import { ProductComponent } from './product/product.component';
import { TestDirective } from './directives/test.directive';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './modules/my-material.module';
import { TestService } from './services/test.service';
import { DataService } from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpDemoComponent } from './http-demo/http-demo.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent,
    TestDirective,
    ParentComponent,
    ChildComponent,
    LifeCycleComponent,
    HttpDemoComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule     ],

  providers:[TestService, DataService],  /// singleton
  bootstrap: [AppComponent]
})
export class AppModule { }
