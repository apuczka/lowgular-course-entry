import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponentModule } from './ui/crypto/crypto.component-module';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import { SingleComponentModule } from './ui/single/single.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    SingleComponentModule,
    CryptoComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
