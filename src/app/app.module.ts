import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommentService } from './comment.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilitiesService } from './utilities.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentEditComponent,
    CommentCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    UtilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
