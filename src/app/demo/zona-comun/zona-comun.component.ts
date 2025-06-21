import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';
import { ZonaComunCreateUpdateComponent } from './zona-comun-create-update/zona-comun-create-update.component';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-zona-comun',
  templateUrl: './zona-comun.component.html',
  styleUrls: ['./zona-comun.component.scss']
})
export class ZonaComunComponent implements OnInit {

  calendarOptions: CalendarOptions;
  id_fraccionamiento = 1;
  casas: any[] = []; // para usar en create/update

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private toast: ToastService,
    private loader: LoaderService

  ) {}

  ngOnInit(): void {
    this.initializeCalendarOptions();
    this.loadCasasFromLocalStorage();
    this.getEventos();
  }

  loadCasasFromLocalStorage(): void {
    const casasStorage = localStorage.getItem('casas');
    this.casas = casasStorage ? JSON.parse(casasStorage) : [];
    console.log('[DEBUG] Casas cargadas:', this.casas);
  }

  initializeCalendarOptions(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      eventClick: (info) => {
        this.updateEvento(info.event);
      },
      eventDidMount: (info) => {
        const descripcion = info.event.extendedProps.descripcion_evento || '';
        const status = info.event.extendedProps.estatus_evento || '';

        let statusDot = '';
        if (status === 'APROBADO') {
          statusDot = '🟢';
        } else if (status === 'RECHAZADO') {
          statusDot = '🔴';
        } else if (status === 'SOLICITADO') {
          statusDot = '🟡';
        }

        info.el.setAttribute('title',
          `${info.event.title}\n${descripcion}\nStatus: ${statusDot} ${status}`);
      }
    };
  }

  getEventos(): void {
    this.http.get<any[]>(`${environment.apiDemo}/demo/eventos/?id_fraccionamiento=${this.id_fraccionamiento}`)
      .subscribe({
        next: (data) => {
          console.log('[DEBUG] Eventos recibidos:', data);

          const eventosMapped = data.map(ev => ({
            id: ev.id_evento,
            title: `${ev.nombre_evento} (${ev.username} - Casa ${ev.numero_casa})`,
            start: new Date(ev.fecha_inicio),
            end: new Date(ev.fecha_fin),
            backgroundColor: ev.estatus_evento === 'APROBADO' ? '#28a745' :
                             ev.estatus_evento === 'RECHAZADO' ? '#e74c3c' :
                             '#f1c40f',
            borderColor: ev.estatus_evento === 'APROBADO' ? '#28a745' :
                         ev.estatus_evento === 'RECHAZADO' ? '#e74c3c' :
                         '#f1c40f',
            extendedProps: {
              descripcion_evento: ev.descripcion_evento,
              comentario_admin: ev.comentario_admin,
              user_id: ev.id_user,
              username: ev.username,
              nickname: ev.nickname,
              user_uuid: ev.user_uuid,
              casa_id: ev.id_casa,
              numero_casa: ev.numero_casa,
              estatus_evento: ev.estatus_evento,
              fecha_inicio: ev.fecha_inicio,
              fecha_fin: ev.fecha_fin,
              nombre_evento: ev.nombre_evento
            }
          }));

          this.calendarOptions.events = eventosMapped;
        },
        error: (err) => {
          console.error('[ERROR] Al obtener eventos:', err);
        }
      });
  }

  createEvento(): void {
    const dialogRef = this.dialog.open(ZonaComunCreateUpdateComponent, {
      width: '600px',
      data: {
        casas: this.casas, // pasamos las casas al modal
        modo: 'CREAR'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('[DEBUG] Evento creado:', result);

        const body = {
          id_fraccionamiento: Number(localStorage.getItem('id_fraccionamiento')),
          id_casa: Number(result.id_casa), // se toma del formulario del modal
          user_uuid: localStorage.getItem('user_uuid'),
          nombre_evento: result.nombre_evento,
          descripcion_evento: result.descripcion_evento,
          fecha_inicio: result.fecha_inicio,
          fecha_fin: result.fecha_fin
        };

        this.http.post(`${environment.apiDemo}/demo/eventos/`, body)
          .subscribe({
            next: (res) => {
              console.log('[DEBUG] Evento creado en backend:', res);
              this.toast.success('Evento creado', 'El evento fue creado correctamente');
              this.getEventos();
            },
            error: (err) => {
              console.error('[ERROR] Al crear evento:', err);
              this.toast.error('Error al crear evento', err?.error?.detail || 'No se pudo crear el evento');
            }
          });
      }
    });
  }

  updateEvento(evento: any): void {
    const data = {
      id_evento: evento.id,
      nombre_evento: evento.extendedProps.nombre_evento,
      descripcion_evento: evento.extendedProps.descripcion_evento,
      fecha_inicio: evento.extendedProps.fecha_inicio,
      fecha_fin: evento.extendedProps.fecha_fin,
      id_user: evento.extendedProps.user_id,
      user_uuid: evento.extendedProps.user_uuid,
      username: evento.extendedProps.username,
      nickname: evento.extendedProps.nickname,
      id_casa: evento.extendedProps.casa_id,
      numero_casa: evento.extendedProps.numero_casa,
      estatus_evento: evento.extendedProps.estatus_evento
    };

    console.log("data_a_enviar_a_modal_update: ", data);

    const dialogRef = this.dialog.open(ZonaComunCreateUpdateComponent, {
      width: '600px',
      data: {
        ...data,
        casas: this.casas, // pasamos las casas al modal
        modo: 'EDITAR'
      }
    });






    dialogRef.afterClosed().subscribe(result => {
   if (result) {
     console.log('[DEBUG] Evento actualizado:', result);


if (result.delete) {
  // 🚨 Se presionó eliminar → hacer DELETE
  console.log('[DEBUG] Eliminando evento:', data.id_evento);

  const confirmed = confirm(`¿Seguro que deseas eliminar el evento "${data.nombre_evento}"?`);

  if (!confirmed) return;

  this.loader.show();

  this.http.delete(
    `${environment.apiDemo}/demo/eventos/${data.id_evento}?user_uuid_requesting=${localStorage.getItem('user_uuid')}&is_admin=false`
  )
  .subscribe({
    next: (res) => {
      console.log('[DEBUG] Evento eliminado en backend:', res);
      this.toast.success('Evento eliminado', `El evento "${data.nombre_evento}" fue eliminado correctamente`);
      this.getEventos(); // refrescar calendario
    },
    error: (err) => {
      console.error('[ERROR] Al eliminar evento:', err);
      this.toast.error('Error al eliminar evento', err?.error?.detail || 'No se pudo eliminar el evento');
    },
    complete: () => this.loader.hide()
  });

  return; // 🚨 salir, no hacer PATCH después
}



    // 🚨 Si NO se eliminó → hacer PATCH normal
    const body = {
      nombre_evento: result.nombre_evento,
      descripcion_evento: result.descripcion_evento,
      fecha_inicio: result.fecha_inicio,
      fecha_fin: result.fecha_fin
    };

    this.http.patch(
      `${environment.apiDemo}/demo/eventos/${data.id_evento}?user_uuid_requesting=${localStorage.getItem('user_uuid')}&is_admin=false`,
      body
    )
    .subscribe({
      next: (res) => {
        console.log('[DEBUG] Evento actualizado en backend:', res);
        this.toast.success('Evento actualizado', 'El evento fue actualizado correctamente');
        this.getEventos();
      },
      error: (err) => {
        console.error('[ERROR] Al actualizar evento:', err);
      }
    });
  }
});


  }

}
