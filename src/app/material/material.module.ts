import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [ materialComponents ],
  exports: [ materialComponents ]
})
export class MaterialModule { }
