import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { PhotoRainPage } from './photo-rain.page';
const routes: Routes = [{ path: '', component: PhotoRainPage }];
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), PhotoRainPage]
})
export class PhotoRainPageModule {}
