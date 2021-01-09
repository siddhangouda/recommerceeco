import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediapartnersComponent } from './mediapartners.component';

describe('MediapartnersComponent', () => {
  let component: MediapartnersComponent;
  let fixture: ComponentFixture<MediapartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediapartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediapartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
