import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeuserComponent } from './makeuser.component';

describe('MakeuserComponent', () => {
  let component: MakeuserComponent;
  let fixture: ComponentFixture<MakeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
