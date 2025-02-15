import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMachineModalComponent } from './register-machine-modal.component';

describe('RegisterMachineModalComponent', () => {
  let component: RegisterMachineModalComponent;
  let fixture: ComponentFixture<RegisterMachineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterMachineModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMachineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
