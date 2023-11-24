import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'home', component: SearchComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}