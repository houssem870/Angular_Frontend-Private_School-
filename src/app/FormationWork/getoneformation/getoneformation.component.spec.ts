import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetoneformationComponent } from './getoneformation.component';

describe('GetoneformationComponent', () => {
  let component: GetoneformationComponent;
  let fixture: ComponentFixture<GetoneformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetoneformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetoneformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
