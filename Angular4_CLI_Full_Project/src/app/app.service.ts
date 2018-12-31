import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {
 

  constructor(private http:Http) {
  }

 // Invoke transaction on blockchain and returns it with token



enrollidentity(fname,lname,nationalidentitynumber,department,enrollment,cgpa,batch){
     
     let fcn = 'initDegree';
     let peers = 'node_examinationpeerfirst';	
     let argument = [fname,lname,nationalidentitynumber,department,enrollment,cgpa,batch];
     let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDYxODY2MDMsInVzZXJuYW1lIjoiT2JhaWRraGFucGMxMjM0Iiwib3JnTmFtZSI6Im5lZHVldC5leGFtaW5hdGlvbnNlY3Rpb24iLCJpYXQiOjE1NDYxODY2MDN9.sBzBD0yScjLnfl45SyvHzNCpqO6MmdWdFqp9Pep-eDI'});
     let options = new RequestOptions({ headers: headers });
     
     let body1 = {
             fcn: fcn,
             peers: peers,
             args: argument
                }
     let body = JSON.stringify(body1);
     console.log('server logs',body1);

     return this.http.post('http://ec2-52-23-241-157.compute-1.amazonaws.com:8080/channels/obaid/chaincodes/mycc', body1, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

};


 fetchblock(blocknumber){
 console.log("server logs",blocknumber);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDYxODY2MDMsInVzZXJuYW1lIjoiT2JhaWRraGFucGMxMjM0Iiwib3JnTmFtZSI6Im5lZHVldC5leGFtaW5hdGlvbnNlY3Rpb24iLCJpYXQiOjE1NDYxODY2MDN9.sBzBD0yScjLnfl45SyvHzNCpqO6MmdWdFqp9Pep-eDI'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-52-23-241-157.compute-1.amazonaws.com:8080/channels/obaid/blocks/'+blocknumber+'?peer=node_examinationpeerfirst', options )

    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));


};

fetchbytransaction(transactionid){
    
console.log("server logs",transactionid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDYxODY2MDMsInVzZXJuYW1lIjoiT2JhaWRraGFucGMxMjM0Iiwib3JnTmFtZSI6Im5lZHVldC5leGFtaW5hdGlvbnNlY3Rpb24iLCJpYXQiOjE1NDYxODY2MDN9.sBzBD0yScjLnfl45SyvHzNCpqO6MmdWdFqp9Pep-eDI'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-35-170-56-145.compute-1.amazonaws.com:4000/channels/firstchannel/transactions/'+transactionid+'?peer=node_examinationpeerfirst', options )

    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));


};



fetchbyenrollment(enrollmentid){
    
console.log("server logs",enrollmentid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDYxODY2MDMsInVzZXJuYW1lIjoiT2JhaWRraGFucGMxMjM0Iiwib3JnTmFtZSI6Im5lZHVldC5leGFtaW5hdGlvbnNlY3Rpb24iLCJpYXQiOjE1NDYxODY2MDN9.sBzBD0yScjLnfl45SyvHzNCpqO6MmdWdFqp9Pep-eDI'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-35-170-56-145.compute-1.amazonaws.com:4000/channels/firstchannel/chaincodes/firstchaincode/?peer=peer1st-orga.orga&fcn=readDegree&args=%5B%22'+enrollmentid+'%22%5D', options )

    .map((res: Response) => res)
    .catch(e => {
            if (e.status === 401) {
                console.log("It works");
                return Observable.throw('Unauthorized');
            }
             console.log("It works");
            // do any other checking for statuses here
        });


};





  }




  