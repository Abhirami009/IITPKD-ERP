import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScreenComponent } from './view-screen.component';

describe('ViewScreenComponent', () => {
  let component: ViewScreenComponent;
  let fixture: ComponentFixture<ViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
