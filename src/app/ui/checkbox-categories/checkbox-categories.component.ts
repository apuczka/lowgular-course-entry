import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckboxCategoriesModel } from '../../model/checkbox-categories.model';
import { CheckboxCategoriesService } from '../../services/checkbox-categories.service';

@Component({
  selector: 'app-checkbox-categories',
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  readonly checkbox$: Observable<CheckboxCategoriesModel[]> = this._checkboxCategoriesService.getAll();

  constructor(private _checkboxCategoriesService: CheckboxCategoriesService) {
  }
}
