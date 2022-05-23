import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../interface/postData';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: postData ={};
  id: any;
  editing: boolean = false;  
  parcialPost: postData = {};

  constructor(private service: JsonplaceholderService, private activatedRoute: ActivatedRoute) { 
  
    this.id = activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.getPost(this.id);
    }else
      this.editing = false;
  }

  ngOnInit(): void {
  }

  getPost(id: any){
    this.service.getById(id).subscribe((data: any)=>{
      this.post = data;
      console.log(data);
    }, (error: any)=>{
      console.log(error);
    });
  }

  savePost(){
    if(this.editing){
      this.service.put(this.post).subscribe(
        (data)=>{
        console.log(data);
        alert('Post actualizado con éxito');
      }, (error)=>{
        console.log(error);
      });
    }else{
      this.service.save(this.post).subscribe(
        (data)=>{
        console.log(data);
        alert('Post agregado con éxito');      
      }, (error)=>{
        console.log(error);
      });
    }
  }

  saveOnlyIDPost(){
    this.parcialPost.id = this.id;
    this.parcialPost.userId = this.post.userId;
    this.service.patch(this.parcialPost).subscribe(
      (data)=>{
      console.log(data);
      alert('Post parchado con éxito');      
    }, (error)=>{
      console.log(error);
    });
  }
  saveOnlyTPost(){
    this.parcialPost.id = this.id;
    this.parcialPost.title = this.post.title;
    this.service.patch(this.parcialPost).subscribe(
      (data)=>{
      console.log(data);
      alert('Post parchado con éxito');      
    }, (error)=>{
      console.log(error);
    });
  }
}
