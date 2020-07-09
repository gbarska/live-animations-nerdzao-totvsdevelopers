import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PopOverComponent } from './pop-over/pop-over.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { BugComponent } from './bug/bug.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { MultiComponent } from './multi/multi.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: 'simple', component: PopOverComponent },
  { path: 'multiple', component: PhotoGalleryComponent },
  { path: 'bug', component: BugComponent },
  { path: 'list', component: ListComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'multi', component: MultiComponent },
  { path: 'callbacks', component: CallbackComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
