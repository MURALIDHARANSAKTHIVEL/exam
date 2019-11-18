import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioncreateComponent } from './questioncreate.component';

describe('QuestioncreateComponent', () => {
  let component: QuestioncreateComponent;
  let fixture: ComponentFixture<QuestioncreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestioncreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
