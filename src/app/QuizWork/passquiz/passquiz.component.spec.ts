import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassquizComponent } from './passquiz.component';

describe('PassquizComponent', () => {
  let component: PassquizComponent;
  let fixture: ComponentFixture<PassquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
