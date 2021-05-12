import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-range-caledar',
  templateUrl: './range-caledar.component.html',
  styleUrls: ['./range-caledar.component.scss']
})
export class RangeCaledarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Output() saveDate = new EventEmitter<AbstractControl>();
  ngOnInit(): void {
  }
  reserveForm = this.formBuilder.group({
    name: '',
    admDateRange: this.formBuilder.group({
      startDate: '',
      endDate: ''
    })
  });
  onFormSubmit() {
    this.saveDate.emit(Object.assign({},this.reserveForm.value.admDateRange))
    this.reserveForm.reset();
  }

}
