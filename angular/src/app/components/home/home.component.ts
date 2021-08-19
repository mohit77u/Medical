import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  why_us = [
    {id: 1,  title: 'Card title', para: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.'},
    {id: 2,  title: 'Card title', para: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.'},
    {id: 3,  title: 'Card title', para: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.'}
  ]

  testimonials= [
    { id: 1, name: 'Saul Goodman', desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'},
    { id: 2, name: 'Sara Wilsson', desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'},
    { id: 3, name: 'Saul Goodman', desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'},
    { id: 4, name: 'Sara Wilsson', desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'}
  ]

  services = [
    {id:1, icon:'fa fa-heartbeat',title:'Lorem Ipsum',para:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
    {id:2, icon:'fa fa-hospital-user',title:'Sed ut perspiciatis',para:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'},
    {id:3, icon:'fa fa-heartbeat',title:'Magni Dolores',para:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
    {id:4, icon:'fa fa-heartbeat',title:'Nemo Enim',para:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'},
    {id:5, icon:'fa fa-heartbeat',title:'Dele cardo',para:'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'},
    {id:6, icon:'fa fa-heartbeat',title:'Divera don',para:'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'}
    ]

    icon_box=[
      {id:1,icon:'fa fa-instagram',title:'Lorem Ipsum',para:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
      {id:2,icon:'fa fa-facebook',title:'Nemo Enim',para:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'},
      {id:3,icon:'fa fa-twitter',title:'Dine Pad',para:'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis'}
    ]

    gallery=[
      {id:1,img:"assets/images/gallery/gallery-1.jpg"},
      {id:2,img:"assets/images/gallery/gallery-2.jpg"},
      {id:3,img:"assets/images/gallery/gallery-3.jpg"},
      {id:4,img:"assets/images/gallery/gallery-4.jpg"},
      {id:5,img:"assets/images/gallery/gallery-5.jpg"},
      {id:6,img:"assets/images/gallery/gallery-6.jpg"},
      {id:7,img:"assets/images/gallery/gallery-7.jpg"},
      {id:8,img:"assets/images/gallery/gallery-8.jpg"}
    ]
  ngOnInit(): void {
  }

}
