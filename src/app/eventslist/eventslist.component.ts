import { Observable } from "rxjs";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { FormEventsModel } from "./../../Classes/Form-Events-Model";
// import { EventslistService } from '../eventslist.service';
import { EventsserviceService } from '../eventsservice.service';
import {Storage} from "aws-amplify";
import { Auth,  API } from "aws-amplify";
import { AWS } from "@aws-amplify/core";
@Component({
  selector: 'app-eventslist',
  templateUrl: './eventslist.component.html',
  styleUrls: ['./eventslist.component.css']
})

export class EventslistComponent implements OnInit {
  item:FormEventsModel;
  private EventsTableArray: FormEventsModel[] = [];
  databody;
    file: any;
  fileExtension;
  keyName;
  i;
  showCards=false;

  resposeObject;
  resultObject;

  MoreEventsFormObject: FormGroup;
  uniqueID;

  imagePath;
  imgURL;
  currentUserRegion: string;

  AddEventGroup = new FormGroup({
    Topic: new FormControl(),
    FromDateOfEvent: new FormControl(),
    ToDateOfEvent: new FormControl(),
    Venue: new FormControl(),
    Attendence: new FormControl(),
    NameOfExpert: new FormControl(),
    Description: new FormControl(),
    TimeFrom: new FormControl(),
    TimeTo: new FormControl(),
    Duration: new FormControl()
  });

  /*************************************************/

  // constructor(
  //   private s3sevice:EventsserviceService,
  //  private eventListServer:EventslistService ) {
  //   // this.MoreEventsFormObject = this.createFormGroup();
  //   // this.uniqueID = this.getUid();
  // }
  /*********  new rds function*********** */
  // _getAllEventsData() {
  //   this.eventListServer.getFormEventsAPICall().subscribe(
  //     res => {
  //       this._extractRequiredData(res);
  //       console.log(this.EventsTableArray);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  /*********  new rds function*********** */

  
  private _extractRequiredData(res): void {
    this.EventsTableArray = [];
    
          // this.EventsTableArray.push(this._modelData(res[e]));
        
      
     
      for (const e in res) {
      
          this.EventsTableArray.push(this._modelData(res[e]));
        }

        
      
    
    
    console.log(this.EventsTableArray);
    /************   Enable after adding Storage S3     ************* */


    // this.EventsTableArray = this.assignKey(
    //   this.EventsTableArray.length,
    //   this.EventsTableArray
    // );
    
  }



  openCards(){
    this.showCards=true;
  }
  closeCards(){
    this.showCards=false;
  }

  /*********  new rds function*********** */
  private _modelData(obj: any): FormEventsModel {
    const eventFormObject = new FormEventsModel();
    eventFormObject.id = obj.id;
    eventFormObject.Venue = obj.Venue;
    eventFormObject.Description = obj.Description;
    eventFormObject.Duration = obj.Duration;
    eventFormObject.TimeFrom = obj.TimeFrom;
    eventFormObject.TimeTo = obj.TimeTo;
    eventFormObject.FromDateOfEvent = obj.FromDateOfEvent;
    eventFormObject.ToDateOfEvent = obj.ToDateOfEvent;
    eventFormObject.NameOfExpert = obj.NameOfExpert;
    eventFormObject.Attendence = obj.Attendence;
    eventFormObject.Topic = obj.Topic;
    eventFormObject.imageKey = obj.imageKey;


     /************   Enable after adding Storage S3     ************* */

    // this.getImage(obj.imageKey).then(res => (eventFormObject.imageURL = res));
    return eventFormObject;
  }
  showprog = true;
  async ngOnInit() {
  //   this.s3sevice.getImageUrl("05b7c5c2-da45-4b66-9a3f-cf92b75ab04a.jpg");
  //  //console.log(Storage.get("public/05b7c5c2-da45-4b66-9a3f-cf92b75ab04a.jpg")); 
  //   this._getAllEventsData();
  }

  getDate(obs) {
    // tslint:disable-next-line: forin
    for (const i in obs) {
      const dateDay = obs[i].DateOfEvent.slice(8, 10);
      const dateMonth = obs[i].DateOfEvent.slice(5, 7);
      const dateYear = obs[i].DateOfEvent.slice(0, 4);
      const date = new Date(dateYear, dateMonth, dateDay);
      obs[i].DateOfEvent = date;
    }
    return obs;
  }





   /************   Enable after adding Storage S3     ************* */

  // getImage(imageKey) {
  //   const imgURL = Storage.get(imageKey)
  //     .then(res => {
  //       return res;
  //     })
  //     .catch(err => {
  //       return err;
  //     });
  //   return imgURL;
  // }

  // async assignImgURL(arrayObject, dataSize) {
  //   for (this.i = 0; this.i < dataSize; this.i++) {
  //     arrayObject[this.i].imgURL = await this.getImage(
  //       arrayObject[this.i].imageKey
  //     );
  //   }
  //   return arrayObject;
  // }

  // assignKey(dataSize, responseObject) {
  //   for (this.i = 0; this.i < dataSize; this.i++) {
  //     responseObject[this.i].key = this.i + 1;
  //   }
  //   return responseObject;
  // }

}