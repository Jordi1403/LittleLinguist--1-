import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriestabComponent } from './categoriestab.component';

describe('CategoriestabComponent', () => {
  let component: CategoriestabComponent;
  let fixture: ComponentFixture<CategoriestabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriestabComponent]
    })
    .compileComponents();
     
    fixture = TestBed.createComponent(CategoriestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
