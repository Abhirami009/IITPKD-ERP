import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCardsComponent } from './status-cards.component';

describe('StatusCardsComponent', () => {
  let component: StatusCardsComponent;
  let fixture: ComponentFixture<StatusCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
