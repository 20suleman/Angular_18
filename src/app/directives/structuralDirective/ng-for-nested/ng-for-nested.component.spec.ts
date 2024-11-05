import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForNestedComponent } from './ng-for-nested.component';

describe('NgForNestedComponent', () => {
  let component: NgForNestedComponent;
  let fixture: ComponentFixture<NgForNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForNestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
