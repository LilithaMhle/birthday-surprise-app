import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FinalPage } from './final.page';
const routes: Routes = [{ path: '', component: FinalPage }];
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), FinalPage]
})
export class FinalPageModule {}
