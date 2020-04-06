import { Component} from '@angular/core';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent{

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  constructor() { }

}



/*
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
}

*/