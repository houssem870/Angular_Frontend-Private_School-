import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceFormComponent } from './marketplace-form.component';

describe('MarketplaceFormComponent', () => {
  let component: MarketplaceFormComponent;
  let fixture: ComponentFixture<MarketplaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
