import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-eventos',
  templateUrl: './form-eventos.component.html',
  styleUrls: ['./form-eventos.component.scss']
})
export class FormEventosComponent {
  public formData = {
    imgSrc: '',
    title: '',
    date: '',
    description: '',
    tag: '',
    duration: '',
    image: null as unknown as File,
  };

  constructor(private http: HttpClient, private fb: FormBuilder) {}
  onSubmit() {
    const url = 'http://localhost:3000/nuevoEvento';
    const formData = new FormData();
  
    if (this.formData.image) {
      formData.append('image', this.formData.image, this.formData.image.name);
    }
  
    // Asegúrate de que las claves coincidan con los nombres de los campos en el backend
    formData.append('title', this.formData.title);
    formData.append('date', this.formData.date);
    formData.append('description', this.formData.description);
    formData.append('tag', this.formData.tag);
    formData.append('duration', this.formData.duration);
  
    this.http.post(url, formData).subscribe(
      (response: any) => {
        console.log('Evento agregado exitosamente:', response);
      },
      (error) => {
        console.error('Error al agregar el evento:', error);
      }
    );
  }

  handleImageChange(event: any) {
    const file = event.target.files[0];
    this.formData.image = file;
  }
}
