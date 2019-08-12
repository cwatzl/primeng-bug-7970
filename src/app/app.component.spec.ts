import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OptionalStuffComponent } from './optional-stuff/optional-stuff.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

describe('AppComponent', () => {


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        OptionalStuffComponent
      ],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        DropdownModule,
        CheckboxModule
      ],
    }).compileComponents();
  }));

  it('should show and hide OptionalStuffComponent when selecting/deselecting checkbox', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.debugElement.componentInstance as AppComponent;

    app.optionalStuffEnabledControl.setValue(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(OptionalStuffComponent)))
    .toBeFalsy('should hide OptionalStuffComponent when disabling for the first time');

    app.optionalStuffEnabledControl.setValue(true);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(OptionalStuffComponent)))
    .toBeTruthy('should show OptionalStuffComponent when re-enabling');

    app.optionalStuffEnabledControl.setValue(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(OptionalStuffComponent)))
    .toBeFalsy('should hide OptionalStuffComponent when disabling again');
  });
});
