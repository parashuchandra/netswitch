/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenerateOtpComponent } from './generate-otp.component';

describe('GenerateOtpComponent', () => {
  let component: GenerateOtpComponent;
  let fixture: ComponentFixture<GenerateOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateOtpComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
