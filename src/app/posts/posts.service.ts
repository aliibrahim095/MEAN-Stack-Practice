import { Injectable } from '@angular/core';
import { Post } from './post.module';
import {Subject} from 'rxjs';

@Injectable({providedIn:'root'})
export class PostServices {
  private posts: Post[] = [];

  private updatedPosts = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.updatedPosts.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.updatedPosts.next([...this.posts]);
  }
}
