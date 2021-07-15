import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCellComponent } from './item-cell.component';

describe('ItemCellComponent', () => {
  let component: ItemCellComponent;
  let fixture: ComponentFixture<ItemCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
