import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProperityComponent } from './output-properity.component';

describe('OutputProperityComponent', () => {
  let component: OutputProperityComponent;
  let fixture: ComponentFixture<OutputProperityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputProperityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputProperityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
