/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MnpComponent } from './mnp.component';

describe('MnpComponent', () => {
  let component: MnpComponent;
  let fixture: ComponentFixture<MnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
