import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import * as fromPriorities from './store/reducers';
import PrioritiesEffects from './store/effects/priorities-effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    StoreModule.forFeature('priorities', fromPriorities.reducers),
    EffectsModule.forFeature([PrioritiesEffects]),
  ],
  entryComponents: [],
  providers: [CurrencyPipe],
})
export class PrioritiesModule {}
