import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'home', component: CommentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'edit/:id', component: CommentEditComponent },
  { path: 'create', component: CommentCreateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
