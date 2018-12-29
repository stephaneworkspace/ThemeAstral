import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCanvasComponent } from './circle-canvas.component';

describe('CircleCanvasComponent', () => {
  let component: CircleCanvasComponent;
  let fixture: ComponentFixture<CircleCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
