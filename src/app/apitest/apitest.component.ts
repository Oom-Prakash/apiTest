import { Component, OnInit } from '@angular/core';
import { CatdataService } from '../catdata.service';
@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})


export class ApitestComponent implements OnInit {

  result!: any;

  constructor(public CatdataService: CatdataService) { }

  ngOnInit(): void {

    this.CatdataService.getData().subscribe((res) => {
      console.log(res);
this.result=res;
    });
  }

}

