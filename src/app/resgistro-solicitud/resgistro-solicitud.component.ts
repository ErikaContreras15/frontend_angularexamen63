import { Component } from '@angular/core';
import { Solicitudes } from 'src/app/domain/Solicitudes';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-resgistro-solicitud',
  templateUrl: './resgistro-solicitud.component.html',
  styleUrls: ['./resgistro-solicitud.component.scss']
})


export class ResgistroSolicitudComponent implements OnInit {
  nuevaSolicitud: Solicitudes = new Solicitudes();

  constructor(private solicitudesService: SolicitudesService) {}

  ngOnInit(): void {}

  realizarSolicitud(): void {
    this.solicitudesService
      .realizarSolicitud(this.nuevaSolicitud)
      .subscribe(
        (response) => {
          console.log('Solicitud:', response);
          alert('');
         
        },
        error => {
          console.error('Error al realizar solicitud:', error);
          alert('');
        }
      );
  }
}

