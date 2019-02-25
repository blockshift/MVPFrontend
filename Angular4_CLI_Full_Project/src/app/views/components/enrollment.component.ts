import { Component , Input , ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
@Component({
  templateUrl: 'enrollment.component.html'
})
export class EnrollmentComponent {

@ViewChild('dataContainer') dataContainer: ElementRef;
@ViewChild('dataContainer2') dataContainer2: ElementRef;
@ViewChild('dataContainer3') dataContainer3: ElementRef;
@ViewChild('dataContainer4') dataContainer4: ElementRef;
@ViewChild('dataContainer5') dataContainer5: ElementRef;
@ViewChild('dataContainer6') dataContainer6: ElementRef;
@ViewChild('dataContainer7') dataContainer7: ElementRef;
@ViewChild('dataContainer8') dataContainer8: ElementRef;

  constructor(private exampleService: AppService,public dialog: MatDialog) { }


 
  
  

@Input() enrollmentid: any;
@Input() orgtoken: any;

  onSubmit(form: any):void{
    

    this.exampleService.getdegreebyenrollment(form.enrollmentid)
  	.subscribe(data => {
    try {
  	           console.log('Service',form.enrollmentid); 
                    var testRespons = data["_body"]; 
                    var b = JSON.parse(testRespons);
                    console.log("Test response",testRespons);
                    console.log("Value of b",b[0]);  
                    console.log(b.fathername,b.rollnumber,b.cgpa,b.batch,b.dateofgraduation,b.enrolment);

                    this.dataContainer.nativeElement.innerHTML =  b[0];
                    this.dataContainer2.nativeElement.innerHTML = b[1];
                    this.dataContainer3.nativeElement.innerHTML = b[2];  
                    this.dataContainer4.nativeElement.innerHTML = b[3]; 
                    this.dataContainer5.nativeElement.innerHTML = b[4];
                    this.dataContainer6.nativeElement.innerHTML = b[5];
                    this.dataContainer7.nativeElement.innerHTML = b[6];
                    this.dataContainer8.nativeElement.innerHTML = 'Verified By Ned Blockchain System';
  		}

     catch(e) {
        let dialogRef = this.dialog.open(ExampleDialogComponent, {
      height: '100px',
      width: '900px'
    });
    }

      },(err) => {
            if (err === 'Unauthorized') { console.log('Unauthorized Error');
        }

    }
  		); 
  	

  };




  


}
