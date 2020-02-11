import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { AnimalItemComponent } from 'src/app/components/animal-item/animal-item.component';
import { AnimalInfoPageModule } from '../animal-info/animal-info.module';
import { AnimalInfoPage } from '../animal-info/animal-info.page';
import { ListRoutingModule } from './list-routing.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SecaoListComponent } from './secao-list/secao-list.component';
import { TaxonListComponent } from './taxon-list/taxon-list.component';
import { SecaoItemComponent } from 'src/app/components/secao-item/secao-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRoutingModule,
    AnimalInfoPageModule,
    RouterModule.forChild(routes)  ],
  declarations: [
    ListPage,
    AnimalItemComponent, 
    SecaoItemComponent,
    AnimalListComponent, 
    SecaoListComponent, 
    TaxonListComponent
  ]
})
export class ListPageModule {}
