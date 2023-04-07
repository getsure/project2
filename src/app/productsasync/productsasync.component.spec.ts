import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsasyncComponent } from './productsasync.component';

describe('ProductsasyncComponent', () => {
  let component: ProductsasyncComponent;
  let fixture: ComponentFixture<ProductsasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsasyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
