import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store';
import {TabsPageModule} from '../../pages/tabs/tabs.module';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule,
      RegisterPageRoutingModule,
      StoreModule.forFeature('registeredUser', reducers),
      EffectsModule.forFeature(effects),
      TabsPageModule,
      ComponentsModule
    ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
