import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { PaginacionPipe } from './pipes/paginacion.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'postForm', component: PostFormComponent},
  {path: 'postForm/:id', component: PostFormComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PaginacionPipe,
    PostsComponent,
    PhotosComponent,
    UsersComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
