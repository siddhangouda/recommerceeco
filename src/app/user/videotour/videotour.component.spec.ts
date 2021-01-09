import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotourComponent } from './videotour.component';

describe('VideotourComponent', () => {
  let component: VideotourComponent;
  let fixture: ComponentFixture<VideotourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideotourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
