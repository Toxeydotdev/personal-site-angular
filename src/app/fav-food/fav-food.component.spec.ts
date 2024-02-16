import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavFoodComponent } from './fav-food.component';

describe('FavFoodComponent', () => {
  let component: FavFoodComponent;
  let fixture: ComponentFixture<FavFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
