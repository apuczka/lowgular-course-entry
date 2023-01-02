import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleModel } from 'src/app/model/single.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleComponent {
    items: string[] = [
      'Tom',
      'Andrew',
      'Chris',
      'Peter'
    ]
}
