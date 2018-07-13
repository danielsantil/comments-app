import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from '../comment.service';
import { UtilitiesService } from '../utilities.service';
import { error } from 'util';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  commentId: number;
  comment: Comment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: CommentService,
    private utils: UtilitiesService
  ) {
  }

  ngOnInit() {
    this.commentId = +this.route.snapshot.paramMap.get('id');
    if (this.commentId) {
      this.service.get(this.commentId).subscribe(
        result => {
          this.comment = result;
        },
        err => {
          this.utils.showError(err);
        }
      );
    }
  }

  updateComment(): void {
    this.comment.id = this.commentId;
    this.service.update(this.comment).subscribe(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        this.utils.showError(err);
      }
    );
  }

  /**
   * Returns to previous location
   */
  goBack(): void {
    this.location.back();
  }

}
