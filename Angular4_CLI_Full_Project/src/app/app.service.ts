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



enrollidentity(name,fathername,rollnumber,enrollment,batch,cgpa,dateofgraduation){
     
     let fcn = 'initDegree';
     let peers = 'node_registrarpeerfirst';	
     let argument = [name,fathername,rollnumber,enrollment,batch,cgpa,dateofgraduation];
     let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDY2NzIxNTksInVzZXJuYW1lIjoiT2JhaWRraGFuMTIzbmVkIiwib3JnTmFtZSI6Im5lZHVldC5yZWdpc3RyYXJzZWN0aW9uIiwiaWF0IjoxNTQ2NjcyMTU5fQ.48jwKwGjTOgYyzNexaYnnz1PA35JabcSn_p-08Xjmys'});
     let options = new RequestOptions({ headers: headers });
     
     let body1 = {
             fcn: fcn,
             peers: peers,
             args: argument
                }
     let body = JSON.stringify(body1);
     console.log('server logs',body1);

     return this.http.post('http://ec2-18-234-198-67.compute-1.amazonaws.com:8080/channels/obaid/chaincodes/degreefinalchaincodeobaidsss', body1, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

};


 fetchblock(blocknumber){
 console.log("server logs",blocknumber);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDY2NzIxNTksInVzZXJuYW1lIjoiT2JhaWRraGFuMTIzbmVkIiwib3JnTmFtZSI6Im5lZHVldC5yZWdpc3RyYXJzZWN0aW9uIiwiaWF0IjoxNTQ2NjcyMTU5fQ.48jwKwGjTOgYyzNexaYnnz1PA35JabcSn_p-08Xjmys'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-18-234-198-67.compute-1.amazonaws.com:8080/channels/obaid/blocks/'+blocknumber+'?peer=node_examinationpeerfirst', options )

    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));


};

fetchbytransaction(transactionid){
    
console.log("server logs",transactionid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDY2NzIxNTksInVzZXJuYW1lIjoiT2JhaWRraGFuMTIzbmVkIiwib3JnTmFtZSI6Im5lZHVldC5yZWdpc3RyYXJzZWN0aW9uIiwiaWF0IjoxNTQ2NjcyMTU5fQ.48jwKwGjTOgYyzNexaYnnz1PA35JabcSn_p-08Xjmys'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-18-234-198-67.compute-1.amazonaws.com:8080/channels/obaid/transactions/'+transactionid+'?peer=node_registrarpeerfirst', options )

    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));


};



fetchbyenrollment(enrollmentid){
    
console.log("server logs",enrollmentid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5MDY2NzIxNTksInVzZXJuYW1lIjoiT2JhaWRraGFuMTIzbmVkIiwib3JnTmFtZSI6Im5lZHVldC5yZWdpc3RyYXJzZWN0aW9uIiwiaWF0IjoxNTQ2NjcyMTU5fQ.48jwKwGjTOgYyzNexaYnnz1PA35JabcSn_p-08Xjmys'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-18-234-198-67.compute-1.amazonaws.com:8080/channels/obaid/chaincodes/degreefinalchaincodeobaidsss/?peer=node_registrarpeerfirst&fcn=readDegree&args=%5B%22'+enrollmentid+'%22%5D', options )

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




  