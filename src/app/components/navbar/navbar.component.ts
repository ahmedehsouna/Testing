import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(private router:Router) { }

  notifications$:Observable<any>;
  sidebar_items:Array<{title: string, icon:string, route:string }> = [
    {title : 'Dashboard', icon: 'fas fa-home', route: ''},
    {title : 'Baiance', icon: 'fas fa-dollar-sign', route: 'Baiance'},
    {title : 'Transactions', icon: 'fas fa-arrow-left', route: 'Transactions'},
    {title : 'Organization', icon: 'fas fa-circle-notch', route: 'Organization'},
    {title : 'Groups', icon: 'fas fa-bullseye', route: 'Groups'},
    {title : 'Zones', icon: 'fas fa-globe', route: 'Zones'},
    {title : 'Settings', icon: 'fas fa-cog', route: 'Settings'},
  ]
  sidebar_opened:boolean = true



  ngOnInit(): void {


      }



}
