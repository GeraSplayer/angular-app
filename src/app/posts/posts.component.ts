import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { postData } from '../interface/postData';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: postData[] = [];
  page_size: number = 5;
  page_number: number = 1;

  constructor(private service: JsonplaceholderService) {
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(){
    this.service.getPosts().subscribe((data: any)=>{
      this.posts = data;
      console.log(data);
    }, (error: any)=>{
      console.log(error);
    });
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  delete(id: any){
    if(confirm('Vas a elimnar la cuenta: ' + id)){
      this.service.delete(id).subscribe((data)=>{
        alert('Eliminado con éxito');
        console.log(data);
      }, (error)=>{
        console.log(error);
      });
    }
  
  }
}
