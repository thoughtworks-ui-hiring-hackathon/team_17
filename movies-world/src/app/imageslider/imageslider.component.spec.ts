import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderComponent } from './imageslider.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ImagesliderComponent', () => {
  let component: ImagesliderComponent;
  let fixture: ComponentFixture<ImagesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesliderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
