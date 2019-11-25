import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhashBoardComponent } from './dhash-board.component';

describe('DhashBoardComponent', () => {
  let component: DhashBoardComponent;
  let fixture: ComponentFixture<DhashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
