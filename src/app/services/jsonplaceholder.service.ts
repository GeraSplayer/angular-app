import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { postData } from '../interface/postData';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.API_ENDPOINT + '/posts');
  }
  getPhotos(){
    return this.httpClient.get(this.API_ENDPOINT + '/photos');
  }
  getUsers(){
    return this.httpClient.get(this.API_ENDPOINT + '/users');
  }

  getById(id: any){
    return this.httpClient.get(this.API_ENDPOINT + '/posts/'+id);
  }
  save(post: postData){
    return this.httpClient.post(this.API_ENDPOINT + '/posts', post);
  }
  put(post: postData){
    return this.httpClient.put(this.API_ENDPOINT + '/posts/'+post.id, post);
  }
  delete(id: any){
    return this.httpClient.delete(this.API_ENDPOINT + '/posts/'+id);
  }
  patch(post: postData){
    return this.httpClient.patch(this.API_ENDPOINT + '/posts/'+post.id, post);
  }

}
