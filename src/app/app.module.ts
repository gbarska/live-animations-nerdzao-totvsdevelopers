import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopOverComponent } from './pop-over/pop-over.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { BugComponent } from './bug/bug.component';
import { CallbackComponent } from './callback/callback.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import { MultiComponent } from './multi/multi.component';

@NgModule({
  declarations: [
    AppComponent,
    PopOverComponent,
    PhotoGalleryComponent,
    BugComponent,
    CallbackComponent,
    TodoComponent,
    ListComponent,
    MultiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
