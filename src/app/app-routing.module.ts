import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'opening', pathMatch: 'full' },
  {
    path: 'opening',
    loadChildren: () => import('./pages/opening/opening.module').then(m => m.OpeningPageModule)
  },
  {
    path: 'greeting',
    loadChildren: () => import('./pages/greeting/greeting.module').then(m => m.GreetingPageModule)
  },
  {
    path: 'memory-cards',
    loadChildren: () => import('./pages/memory-cards/memory-cards.module').then(m => m.MemoryCardsPageModule)
  },
  {
    path: 'photo-rain',
    loadChildren: () => import('./pages/photo-rain/photo-rain.module').then(m => m.PhotoRainPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./pages/final/final.module').then(m => m.FinalPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
