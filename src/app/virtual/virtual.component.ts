import { Component, OnInit } from '@angular/core';
// import { GetcontentService } from '../getcontent.service';

export class abc{
  Title2: string;
  Description2: string
}

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent  {
  // myvar:abc[]=[];
  // ngOnInit() {

  //   this.xx.fetchContent().subscribe(res=>
  //     {
  //       console.log(res);
  //       for(const e in res)
  //       {
          

  //       const obj = new abc();
  //       obj.Title2=res[e].Title2;
  //       obj.Description2=res[e].Description2;
        
  //       this.myvar.push(obj);
  //       }
      // })
  }
//   constructor(private xx:GetcontentService) { }
//   xyz:any =[];
 
// //   fetchContent = new this.fetchContent('', [
// //  ]);
// }