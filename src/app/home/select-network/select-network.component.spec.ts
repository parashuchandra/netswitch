/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectNetworkComponent } from './select-network.component';

describe('SelectNetworkComponent', () => {
  let component: SelectNetworkComponent;
  let fixture: ComponentFixture<SelectNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
