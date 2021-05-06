import { Injectable } from '@angular/core';
import { Post } from './post.module';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class PostServices {
  constructor(private http: HttpClient) {}
  private posts: Post[] = [];

  private updatedPosts = new Subject<Post[]>();

  baseUrl: string = 'http://localhost:3000/api/posts';
  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>(this.baseUrl)
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.updatedPosts.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.updatedPosts.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };

    this.http.post<{ message: string }>(this.baseUrl, post).subscribe((responseData) => {
      console.log(responseData.message);
      this.posts.push(post);
      this.updatedPosts.next([...this.posts]);
    });
  }
}
