import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecptionsComponent } from './execptions.component';

describe('ExecptionsComponent', () => {
  let component: ExecptionsComponent;
  let fixture: ComponentFixture<ExecptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
