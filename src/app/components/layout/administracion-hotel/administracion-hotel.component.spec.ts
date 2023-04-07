import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionHotelComponent } from './administracion-hotel.component';

describe('AdministracionHotelComponent', () => {
  let component: AdministracionHotelComponent;
  let fixture: ComponentFixture<AdministracionHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
