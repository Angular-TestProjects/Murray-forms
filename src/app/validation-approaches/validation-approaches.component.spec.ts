import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationApproachesComponent } from './validation-approaches.component';

describe('ValidationApproachesComponent', () => {
  let component: ValidationApproachesComponent;
  let fixture: ComponentFixture<ValidationApproachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationApproachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationApproachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
