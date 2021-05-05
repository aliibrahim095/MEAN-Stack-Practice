import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts=[
  //   {title:"first post", content:"this is first post content"},
  //   {title:"second post", content:"this is second post content"},
  //   {title:"third post", content:"this is third post content"},
  //   {title:"fourth post", content:"this is fourth post content"},
  // ]
  @Input() posts=[];
  constructor() { }

  ngOnInit(): void {
  }

}
