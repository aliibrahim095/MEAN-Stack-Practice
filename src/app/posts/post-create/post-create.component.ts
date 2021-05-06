import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostServices } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class postCreateComponent {

  /**
   *
   */
  constructor(public PostService:PostServices) {}

  onAddPost(form:NgForm) {
    if(form.invalid){
      return;
    }
    this.PostService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }
}
