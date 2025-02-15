import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOperatorsModalComponent } from './register-operators-modal.component';

describe('RegisterOperatorsModalComponent', () => {
  let component: RegisterOperatorsModalComponent;
  let fixture: ComponentFixture<RegisterOperatorsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOperatorsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOperatorsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
