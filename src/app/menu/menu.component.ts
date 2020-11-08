import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router,ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
next(){
  this.router.navigate(["/physical"])
}
next1(){
  this.router.navigate(["/virtual"])
}
next2(){
  this.router.navigate(["/graduated"])
}
}
