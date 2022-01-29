import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {


 item1:Content = {
  id : 1,
  title : "Apple Cake",
  description : "How to make Apple Cake",
  creator : "nazanin",
  imgURL : "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/german_apple_cake_59663_16x9.jpg",
  type : "Fruit Cakes",
  tags : ["cake" , "friut cake"],

};

item2:Content = {
  id : 2,
  title : "Sponge Cake",
  description : "how to make Sponge Cake",
  creator : "nazanin",
  imgURL : "https://cdn.momsdish.com/wp-content/uploads/2020/02/Perfect-Sponge-Cake-12-1200x800.jpg",
  type : "Cake",
  tags : ["cake" , "sponge cake"],

};

item3:Content = {
  id : 3,
  title : "Chocolate Cake",
  description : "How to make Chocolate Cake",
  creator : "nazanin",
  imgURL : "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg",
  type : "cake",
  tags : ["cake"],

};

 contentList = new ContentList();

  constructor() {

    //console.log('hello');
    this.contentList.addContent(this.item1);
    this.contentList.addContent(this.item2);
    this.contentList.addContent(this.item3);
    console.log(this.contentList.getContectCard(1));
  }

  ngOnInit(): void {
    console.log("hello");
  }

}
