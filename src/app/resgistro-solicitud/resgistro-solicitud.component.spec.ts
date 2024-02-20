import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroSolicitudComponent } from './resgistro-solicitud.component';

describe('ResgistroSolicitudComponent', () => {
  let component: ResgistroSolicitudComponent;
  let fixture: ComponentFixture<ResgistroSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResgistroSolicitudComponent]
    });
    fixture = TestBed.createComponent(ResgistroSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
