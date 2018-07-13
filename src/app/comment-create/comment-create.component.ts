import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  name: string;
  email: string;
  website: string;
  content: string;

  constructor(
    private location: Location,
    private router: Router,
    private service: CommentService,
    private utils: UtilitiesService
  ) { }

  ngOnInit() {
  }

  save(): void {
    const comment = new Comment(this.name, this.email, this.website, this.content);
    this.service.add(comment).subscribe(
      response => {
        if (response.success) {
          this.router.navigate(['/home']);
        } else {
          this.utils.showError(response.message);
        }
      },
      err => {
        this.utils.showError(err);
      });
  }

  /**
   * Returns to previous location
   */
  goBack(): void {
    this.location.back();
  }

}
