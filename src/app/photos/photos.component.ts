import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { photosData } from '../interface/photoData';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: photosData[] = [];
  page_size: number = 5;
  page_number: number = 1;

  constructor(private service: JsonplaceholderService) {
    this.get();
   }

  ngOnInit(): void {
  }

  get(){
    this.service.getPhotos().subscribe((data: any)=>{
      this.photos = data;
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
