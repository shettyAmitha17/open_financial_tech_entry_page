import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { HeaderComponent } from './header/header.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EntryPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ComponentsRoutingModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
