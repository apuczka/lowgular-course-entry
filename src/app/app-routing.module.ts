import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleComponent } from './ui/single/single.component';
import { CryptoComponent } from './ui/crypto/crypto.component';
import { SingleComponentModule } from './ui/single/single.component-module';
import { CryptoComponentModule } from './ui/crypto/crypto.component-module';

const routes: Routes = [
  // { 
  // path: 'single', component: SingleComponent }, 
  { 
    path: 'crypto', component: CryptoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), SingleComponentModule, CryptoComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
