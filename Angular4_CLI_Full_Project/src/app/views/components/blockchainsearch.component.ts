import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  templateUrl: 'blockchainsearch.component.html'
})
export class BlockchainsearchComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
@ViewChild('dataContainer2') dataContainer2: ElementRef;
@ViewChild('dataContainer3') dataContainer3: ElementRef;
@ViewChild('dataContainer4') dataContainer4: ElementRef;
@ViewChild('dataContainer5') dataContainer5: ElementRef;
@ViewChild('dataContainer6') dataContainer6: ElementRef;
@ViewChild('dataContainer7') dataContainer7: ElementRef;
@ViewChild('dataContainer8') dataContainer8: ElementRef;
@ViewChild('dataContainer9') dataContainer9: ElementRef;

  constructor(private exampleService: AppService,public dialog: MatDialog) { }


@Input() blockNumber: any;
@Input() orgtoken: any;
onSubmit(form: any):void{
    
    this.exampleService.fetchblock(form.blockNumber)
  	.subscribe(data => {



try {

  	           console.log('Service',form.blockNumber); 
                    var testRespons = data["_body"];  
                    var b =  JSON.parse(testRespons); 
                    console.log("decoded Object",b);                  
                    this.dataContainer.nativeElement.innerHTML = b.data.data[0].payload.header.channel_header.tx_id;
                    this.dataContainer2.nativeElement.innerHTML = b.header.data_hash;
                    this.dataContainer3.nativeElement.innerHTML = b.data.data[0].payload.data.actions[0].payload.action.endorsements[0].endorser.Mspid;

                   var e = b.data.data[0].payload.data.actions[0].payload.action.endorsements[0].signature.data;

                   this.dataContainer4.nativeElement.innerHTML = e.toString().replace(/\,/g,"");


           /*        this.dataContainer5.nativeElement.innerHTML = b.data.data[0].payload.data.actions[0].payload.action.endorsements[1].endorser.Mspid;
                    

                   var secondendorsement = b.data.data[0].payload.data.actions[0].payload.action.endorsements[1].signature.data;
                   
                   this.dataContainer6.nativeElement.innerHTML = secondendorsement.toString().replace(/\,/g,"");

                    this.dataContainer7.nativeElement.innerHTML = b.data.data[0].payload.header.signature_header.creator.Mspid;
                     var f = b.data.data[0].payload.header.signature_header.nonce.data;
                    this.dataContainer8.nativeElement.innerHTML = f.toString().replace(/\,/g,"");
                    this.dataContainer9.nativeElement.innerHTML = b.data.data[0].payload.header.channel_header.timestamp; */
                    
                     console.log("I SEE DATA HERE: ",testRespons);
               
  	}


catch(e) {
        let dialogRef = this.dialog.open(ExampleDialogComponent, {
      height: '100px',
      width: '900px'
    });
    }


    	}, (err) => {
            if (err === 'Unauthorized') { console.log('Unauthorized Error');
        }

  	}	); 
  	

  };
}

