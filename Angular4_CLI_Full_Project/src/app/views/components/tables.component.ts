
import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule, Validators,FormControl } from '@angular/forms';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
@ViewChild('dataContainer2') dataContainer2: ElementRef;
  constructor(private exampleService: AppService) { }

selectedValue: string;
 dropdown = new FormControl('', [Validators.required]);

getErrorMessage() {
    return this.dropdown.hasError('required') ? 'You must enter a value' :'';
  }

depart  = [

  {value : "software", viewValue : "software" },
  {value : "Electrical", viewValue : "Electical"},
  {value : "Mechanical", viewValue : "Mechanical"},
  {value : "Civil", viewValue : "Civil"},
  {value : "Chemical", viewValue : "Chemical"},
  {value : "CS&IT", viewValue : "CS&IT"},
  {value : "Bio-Medical", viewValue : "Bio-Medical"},
  {value : "CIS", viewValue : "CIS"},
  {value : "I.M", viewValue : "I.M"},
  {value : "Petroluem", viewValue : "Petroleum"}
]


@Input() name : any;
@Input() fathername : any;
@Input() rollnumber: any;
@Input() enrollment : any;
@Input() batch : any;
@Input() cgpa : any;
@Input() dateofgraduation : any;
@Input() degreeno : any;

/* onSubmit(form: any):void{
    
    console.log(form);
  	this.exampleService.invokestampery(form.name,form.fathername,form.rollnumber,form.enrollment,form.batch,form.cgpa,form.dateofgraduation)
  	.subscribe(data => {
                     var testResponse = data["_body"] ;
                     this.dataContainer.nativeElement.innerHTML = data["_body"];
                     console.log(data);
                     console.log("I SEE DATA HERE: ", testResponse);
},
               error => {
                      console.log("This is sample error");
                      this.dataContainer.nativeElement.innerHTML ='Invalid Authorization Token'; 

 }); 

  };
*/

issuedegree(form: any): void{

console.log(form);
this.exampleService.insertrecord(form.name,form.fathername,form.rollnumber,form.enrollment,form.batch,form.cgpa,form.dateofgraduation,form.degreeno)
.subscribe(data => {
                 var testResponse = data["_body"] ;
                 this.dataContainer.nativeElement.innerHTML = data["_body"];
                 console.log(data);
                 console.log("I SEE DATA HERE: ", testResponse);

},
error => {
                      console.log("This is sample error");
                      this.dataContainer.nativeElement.innerHTML ='Invalid Authorization Token'; 

 });

};


};
