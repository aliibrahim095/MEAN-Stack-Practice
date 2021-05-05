import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class postCreateComponent {

  post:{title:string,content:string};
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();
  onAddPost() {
    this.post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(this.post);
  }
}
