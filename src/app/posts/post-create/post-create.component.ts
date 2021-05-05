import { Component, Output,EventEmitter } from '@angular/core';
import {Post} from '../post.module';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class postCreateComponent {

  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter();
  onAddPost() {
    const post:Post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }
}
