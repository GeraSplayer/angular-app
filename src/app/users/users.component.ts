import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { userData } from '../interface/userData';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: userData[] = [];
  page_size: number = 5;
  page_number: number = 1;

  constructor(private service: JsonplaceholderService) {
    this.get();
  }

  ngOnInit(): void {
  }

  get(){
    this.service.getUsers().subscribe((data: any)=>{
      this.users = data;
      console.log(data);
    }, (error: any)=>{
      console.log(error);
    });
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}
