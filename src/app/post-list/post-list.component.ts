import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostServices } from '../posts/posts.service';
import { Post } from '../posts/post.module';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  private postSubscripe: Subscription;
  constructor(public PostService: PostServices) {}

  ngOnInit(): void {
    // this.posts = this.PostService.getPosts();
    this.postSubscripe = this.PostService.getPostUpdateListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }
  ngOnDestroy(): void {
    this.postSubscripe.unsubscribe();
  }
}
