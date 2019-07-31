import {Component} from '@angular/core';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
})
export class PageOneComponent {
  public pensions = [
    {
      name: 'Solo Alojamiento',
      characteristics: [
        'Sin régimen',
        'Botella de agua de bienvenida'
      ]
    },
    {
      name: 'Alojamiento y Desayuno',
      characteristics: [
        'Desayuno buffet completo'
      ]
    },
    {
      name: 'Media Pensión',
      characteristics: [
        'Desayuno buffet completo',
        'Cena buffet',
        'No incluye'
      ]
    },
    {
      name: 'Todo incluido',
      characteristics: [
        'Dispondrás de comida y bebida todo el día y durante toda tu estancia',
        'Restaurante buffet',
        'Snack Bar',
        'Servicio de bares (marcas nacionales)'
      ]
    },
    {
      name: 'Unlimited Services',
      characteristics: [
        'Restaurante buffet con bebidas Premium',
        'Restaurante a la carta (una cena por estancia)',
        'Snack Bar con bebidas Premium',
        'Minibar incluido',
        'Acceso a SPA y 45 minutos de masaje por persona',
        'Actividades deportivas (acuáticas sin motor)',
        'Caja fuerte',
        'Parking gratuito',
        'Lavandería'
      ]
    }
  ];
}
