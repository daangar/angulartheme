import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboundComponent } from './inbound.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: InboundComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class InboundRoutingModule {
}
