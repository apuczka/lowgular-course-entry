import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SingleComponent],
  providers: [],
  exports: [SingleComponent]
})
export class SingleComponentModule {
}
