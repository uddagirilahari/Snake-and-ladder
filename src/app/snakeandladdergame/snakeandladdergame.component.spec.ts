import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeandladdergameComponent } from './snakeandladdergame.component';

describe('SnakeandladdergameComponent', () => {
  let component: SnakeandladdergameComponent;
  let fixture: ComponentFixture<SnakeandladdergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnakeandladdergameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnakeandladdergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
