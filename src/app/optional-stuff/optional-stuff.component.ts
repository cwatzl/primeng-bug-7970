import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-optional-stuff',
  templateUrl: './optional-stuff.component.html',
  styleUrls: ['./optional-stuff.component.css']
})
export class OptionalStuffComponent implements OnInit {
  @Input() optionalStuffFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
