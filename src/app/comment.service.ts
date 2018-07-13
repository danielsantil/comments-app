import { Injectable } from '@angular/core';
import { Comment } from './models/comment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { environment as env } from '../environments/environment';

/**
 * Provides API operations for comments' components.
 */
@Injectable()
export class CommentService {
  private commentsPath = `${env.apiUrl}/comments`;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrieves a list of all comments.
   */
  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsPath).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieve a single comment detail.
   * @param id Comment id
   */
  get(id: number): Observable<Comment> {
    const req = `${this.commentsPath}/${id}`;
    return this.http.get<Comment>(req).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Inserts a new comment.
   * @param comment Comment to be inserted.
   */
  add(comment: Comment): Observable<any> {
    return this.http.post<any>(this.commentsPath, comment).pipe(
      map(res => {
        res.success = res.status === 'success';
        return res;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Updates an existing comment.
   * @param comment Comment to be updated. Body must have defined its id attribute.
   */
  update(comment: Comment): Observable<any> {
    const req = `${this.commentsPath}/${comment.id}/update`;
    return this.http.post<any>(req, comment).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Handles an error and sends a generic error message.
   * @param error Error catched during http communication.
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return _throw('An error ocurred. Please, try later.');
  }

}
