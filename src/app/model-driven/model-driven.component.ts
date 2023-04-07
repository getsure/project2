import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {  }

  userForm= this.formBuilder.group({
    userName:[null, Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
    email:[],
    address:this.formBuilder.group({
      city:[]
    })
  })
  sendDataToComp(){    
    console.log(this.userForm.value)
  }

}
