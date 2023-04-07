import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHotelComponent } from './reserva-hotel.component';

describe('ReservaHotelComponent', () => {
  let component: ReservaHotelComponent;
  let fixture: ComponentFixture<ReservaHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
