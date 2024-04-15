import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
  
export class LikeService {

  constructor(private db: AngularFireDatabase) { }


  addLike(videoId: string, userId: string) {
    return this.db.object(`videos/${videoId}/likes/${userId}`).set(true);
  }

   
  addComment(videoId: string, userId: string, comment: string) {
    const commentData = {
      userId: userId,
      comment: comment,
      timestamp: Date.now() 
    };
    return this.db.list(`videos/${videoId}/comments`).push(commentData);
  }

  getComments(videoId: string): Observable<any[]> {
    return this.db.list(`videos/${videoId}/comments`).valueChanges();
  }
}