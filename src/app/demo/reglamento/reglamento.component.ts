import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-reglamento',
  templateUrl: './reglamento.component.html',
  styleUrls: ['./reglamento.component.scss']
})
export class ReglamentoComponent implements OnInit {

  reglamentos: any[] = [];
  selectedFile: File | null = null;

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.getReglamentos();
  }

  getReglamentos(): void {
    const id_fraccionamiento = localStorage.getItem('id_fraccionamiento');
    this.http.get<any[]>(`${environment.apiDemo}/demo/reglamentos/?id_fraccionamiento=${id_fraccionamiento}`)
      .subscribe({
        next: (data) => {
          this.reglamentos = data;
          console.log('[DEBUG] Reglamentos recibidos:', data);
        },
        error: (err) => {
          console.error('[ERROR] Al obtener reglamentos:', err);
          this.toast.error('Error al obtener reglamentos', err?.error?.detail || 'No se pudo cargar la lista de reglamentos');
        }
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadSelectedFile(): void {
    if (!this.selectedFile) return;

    const id_fraccionamiento = localStorage.getItem('id_fraccionamiento');
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('id_fraccionamiento', id_fraccionamiento || '');
    formData.append('nombre_documento', this.selectedFile.name);

    this.loader.show();

    this.http.post(`${environment.apiDemo}/demo/reglamentos/`, formData)
      .subscribe({
        next: (res) => {
          console.log('[DEBUG] Reglamento subido:', res);
          this.toast.success('Reglamento subido', this.selectedFile?.name + ' fue subido correctamente');
          this.selectedFile = null;
          this.getReglamentos();
        },
        error: (err) => {
          console.error('[ERROR] Al subir reglamento:', err);
          this.toast.error('Error al subir reglamento', err?.error?.detail || 'No se pudo subir el reglamento');
        },
        complete: () => this.loader.hide()
      });
  }

  deleteReglamento(id_reglamento: number): void {
    const confirmed = confirm('¿Seguro que deseas eliminar este reglamento?');
    if (!confirmed) return;

    this.loader.show();

    this.http.delete(`${environment.apiDemo}/demo/reglamentos/${id_reglamento}`)
      .subscribe({
        next: (res) => {
          console.log('[DEBUG] Reglamento eliminado:', res);
          this.toast.success('Reglamento eliminado', 'El reglamento fue eliminado correctamente');
          this.getReglamentos();
        },
        error: (err) => {
          console.error('[ERROR] Al eliminar reglamento:', err);
          this.toast.error('Error al eliminar reglamento', err?.error?.detail || 'No se pudo eliminar el reglamento');
        },
        complete: () => this.loader.hide()
      });
  }

  downloadReglamento(id_reglamento: number): void {
    const downloadUrl = `${environment.apiDemo}/demo/reglamentos/${id_reglamento}/download`;
    window.open(downloadUrl, '_blank');
  }


cancelUpload(): void {
  this.selectedFile = null;
}

viewReglamento(id_reglamento: number): void {
  const viewUrl = `${environment.apiDemo}/demo/reglamentos/${id_reglamento}/view`;
  window.open(viewUrl, '_blank');
}


}







