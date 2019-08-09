import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  optionalStuffEnabledControl: FormControl;
  destroyed$ = new Subject();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      optionalStuff: this.formBuilder.group({
        foobar: []
      })
    });

    this.optionalStuffEnabledControl = new FormControl(true);
    this.optionalStuffEnabledControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isEnabled => {
        if (isEnabled) {
          this.formGroup.get('optionalStuff').enable();
        } else {
          this.formGroup.get('optionalStuff').disable();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
