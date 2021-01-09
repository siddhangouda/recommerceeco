import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatonComponent } from './associaton.component';

describe('AssociatonComponent', () => {
  let component: AssociatonComponent;
  let fixture: ComponentFixture<AssociatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
