import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title: String = 'NG-DEMO';
  menus: Array<Menu> = new Array<Menu>();
  constructor() {
    this.menus.push(new Menu('菜单一', '1', '', ''));
    this.menus.push(new Menu('菜单二', '2', '', ''));
    this.menus.push(new Menu('菜单三', '3', '', ''));
  }

  ngOnInit() {
  }

}

export class Menu {
  name: String;
  id: String;
  url: String;
  icon: String;

  constructor(name: String, id: String, url: String, icon: String) {
       this.name = name;
       this.id = id;
       this.url = url;
       this.icon = icon;
  }
}
