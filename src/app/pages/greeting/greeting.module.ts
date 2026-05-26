import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { GreetingPage } from './greeting.page';
const routes: Routes = [{ path: '', component: GreetingPage }];
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), GreetingPage]
})
export class GreetingPageModule {}
