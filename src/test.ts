// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { defineGlobalsInjections } from '@ngneat/spectator';
import { MockModule } from 'ng-mocks';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

defineGlobalsInjections({
  imports: [MockModule(IonicModule), RouterTestingModule],
  providers: [
    provideMockStore({
      initialState: {
        tasks: {
          tasks: {
            pending: {
              getTasks: false,
              addTask: false,
              deleteTask: false,
            },
            error: {},
            tasks: [],
          },
          statuses: {
            pending: false,
            error: null,
            tasksStatus: [],
          },
        },
        priorities: {
          prioritiesState: {
            pending: false,
            error: {},
            priorities: [],
          },
        },
      },
    }),
  ],
});

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
