import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApitestComponent } from './apitest/apitest.component';
import { CatdataService } from './catdata.service';

@NgModule({
  declarations: [
    AppComponent,
    ApitestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CatdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
