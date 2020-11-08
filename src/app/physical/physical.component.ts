import { Component, OnInit } from '@angular/core';
// import { GetcontentService } from '../getcontent.service';

export class abc{
  Title: string;
  Description: string;
}

@Component({
  selector: 'app-physical',
  templateUrl: './physical.component.html',
  styleUrls: ['./physical.component.css']
})
export class PhysicalComponent  {
  // myvar:abc[]=[];
  // ngOnInit() {

  //   this.xx.fetchContent().subscribe(res=>
  //     {
  //       console.log(res);
  //       for(const e in res)
  //       {
          

  //       const obj = new abc();
  //       obj.Title=res[e].Title;
  //       obj.Description=res[e].Description;
        
  //       this.myvar.push(obj);

        
  //       }
  //     })
  }
//   constructor(private xx:GetcontentService) { }
//   xyz:any =[];
 
// }