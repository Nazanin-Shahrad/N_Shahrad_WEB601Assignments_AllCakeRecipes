
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentListArray : Content[] =[
    {
      id : 1,
  title : "Apple Cake",
  description : "How to make Apple Cake",
  creator : "nazanin",
  imgURL : "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/german_apple_cake_59663_16x9.jpg",
  type : "Fruit Cakes",
  tags : ["cake" , "friut cake"],

    },
    {
      id : 2,
  title : "Sponge Cake",
  description : "how to make Sponge Cake",
  creator : "nazanin",
  imgURL : "https://cdn.momsdish.com/wp-content/uploads/2020/02/Perfect-Sponge-Cake-12-1200x800.jpg",
  type : "Cake",
  tags : ["cake" , "sponge cake"],
    },
    {
      id : 3,
  title : "Chocolate Cake",
  description : "How to make Chocolate Cake",
  creator : "nazanin",
  imgURL : "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg",
  type : "cake",
  tags : ["cake"],
    },
    {
      id : 4,
  title : "Carrot Cake",
  description : "How to make Carrot Cake",
  creator : "nazanin",
  imgURL : "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg",
  type : "cake",
  tags : ["cake"],
    },
    {
      id : 5,
  title : "Black forest Cake",
  description : "How to make Black forest Cake",
  creator : "nazanin",
  imgURL : "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg",
  type : "cake",
  tags : ["cake"],
    },
    {id : 6,
      title : "German Cake",
      description : "How to make German Cake",
      creator : "nazanin",
      imgURL : "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg",
      type : "cake",
      tags : ["cake", "classic cake"],
    },
    {
      id : 7,
  title : "Fruit Cake",
  description : "How to make Fruit Cake",
  creator : "nazanin",
  imgURL : "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg",
  type : "cake",
  tags : ["cake","fruit cake","homemade"],
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
