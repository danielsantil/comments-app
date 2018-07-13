import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../comment.service';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  filteredComments: Comment[];

  constructor(
    private service: CommentService,
    private utils: UtilitiesService
  ) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      result => {
        this.comments = result;
        this.filteredComments = this.comments;
      },
      err => {
        this.utils.showError(err);
      }
    );
  }

  /**
   * Searches a text in the list of comments.
   * @param input String to be searched
   */
  search(input) {
    const searchText: string = input.value;
    if (!searchText) {
      this.filteredComments = this.comments;
    } else {
      this.filteredComments = this.comments.filter(element => {

        // Keys to filter during the search
        const keys: string[] = ['name', 'email', 'website'];
        if (this.utils.containsText(element, searchText, keys)) {
          return element;
        }
      });
    }
  }

}
