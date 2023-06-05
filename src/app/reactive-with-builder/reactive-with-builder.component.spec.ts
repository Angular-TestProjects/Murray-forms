import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveWithBuilderComponent } from './reactive-with-builder.component';

describe('ReactiveWithBuilderComponent', () => {
  let component: ReactiveWithBuilderComponent;
  let fixture: ComponentFixture<ReactiveWithBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveWithBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
