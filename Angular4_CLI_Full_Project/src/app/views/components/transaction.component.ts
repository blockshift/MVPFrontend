import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  templateUrl: 'transaction.component.html'
})
export class TransactionComponent {

@ViewChild('dataContainer3') dataContainer3: ElementRef;
@ViewChild('dataContainer4') dataContainer4: ElementRef;
@ViewChild('dataContainer5') dataContainer5: ElementRef;
@ViewChild('dataContainer6') dataContainer6: ElementRef;
@ViewChild('dataContainer7') dataContainer7: ElementRef;
@ViewChild('dataContainer8') dataContainer8: ElementRef;
@ViewChild('dataContainer9') dataContainer9: ElementRef;

  constructor(private exampleService: AppService,public dialog: MatDialog) { }


@Input() transactionid: any;
@Input() orgtoken: any;
@Input() stamperyid: any;


onSubmit(form: any):void{
    console.log(form.orgtoken);

    this.exampleService.fetchbytransaction(form.transactionid)
  	.subscribe(data => {
  	           console.log('Service',form.transactionid); 
                    var testRespons = data["_body"];   
     try { 
                    var b =  JSON.parse(testRespons);                   
                 
                    
                    this.dataContainer3.nativeElement.innerHTML = b.transactionEnvelope.payload.data.actions[0].payload.action.endorsements[0].endorser.Mspid ;
                    
                    var f = b.transactionEnvelope.payload.data.actions[0].payload.action.endorsements[0].signature.data;
                    this.dataContainer4.nativeElement.innerHTML = f.toString().replace(/\,/g,"")  ;
       /*             this.dataContainer5.nativeElement.innerHTML = b.transactionEnvelope.payload.data.actions[0].payload.action.endorsements[1].endorser.Mspid ;
                    var m = b.transactionEnvelope.payload.data.actions[0].payload.action.endorsements[1].signature.data
                    this.dataContainer6.nativeElement.innerHTML = m.toString().replace(/\,/g,"")  ;
                    this.dataContainer7.nativeElement.innerHTML = b.transactionEnvelope.payload.header.signature_header.creator.Mspid  ;
                    var e = b.transactionEnvelope.payload.header.signature_header.nonce.data ; 
                    this.dataContainer8.nativeElement.innerHTML = e.toString().replace(/\,/g,"") ;


                    this.dataContainer9.nativeElement.innerHTML =  b.transactionEnvelope.payload.header.channel_header.timestamp ;  */
                   
                     console.log("I SEE DATA HERE: ",testRespons);
 

  }


catch(e) {
        let dialogRef = this.dialog.open(ExampleDialogComponent, {
      height: '100px',
      width: '900px'
    });
    }




  		}
  		); 
  	

  };



  Onstampverify(form: any):void {
   console.log("stampery id",form.stamperyid);
   this.exampleService.verifystamp(form.stamperyid)
    .subscribe(data => {
      var testResponse = data["_body"] ;
      this.dataContainer3.nativeElement.innerHTML = data["_body"];
}); 
};

 

  

}
