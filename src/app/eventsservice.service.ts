import { Injectable } from '@angular/core';


// const AWS = require("aws-sdk")
@Injectable({
  providedIn: 'root'
})
export class EventsserviceService {

  constructor() { }

//   getImage(){


//   AWS.config.update({
//   accessKeyId: "AKIAJXXFQE5P2S5CWOZA",
//   secretAccessKey: "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",
//   region: "ap-south-1"
// });

//     var s3 = new AWS.S3();
//     var params = {
//       Bucket: "eventimageims-ims", 
//       Key: "public/05b7c5c2-da45-4b66-9a3f-cf92b75ab04a.jpg", 
//      //  Range: "bytes=0-9"
//      };
//      s3.getObject(params, function(err, data) {
//        if (err) console.log(err, err.stack); // an error occurred
//        else     console.log(data);           // successful response
//        /*
//        data = {
//         AcceptRanges: "bytes", 
//         ContentLength: 10, 
//         ContentRange: "bytes 0-9/43", 
//         ContentType: "text/plain", 
//         ETag: "\"0d94420ffd0bc68cd3d152506b97a9cc\"", 
//         LastModified: <Date Representation>, 
//         Metadata: {
//         }, 
//         VersionId: "null"
//        }
//        */
//      });
//   }
// //   getImageUrl(key){
// //     AWS.config.update({
// //       accessKeyId: "AKIAJXXFQE5P2S5CWOZA",
// //       secretAccessKey: "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",
// //       region: "ap-south-1"
// //     });
// //     var s3 = new AWS.S3();
// //     var params = {Bucket: 'eventimageims-ims', Key: "public/"+key};
// // var url = s3.getSignedUrl('getObject', params);
// // console.log('The URL is', url);
// //   }
}
