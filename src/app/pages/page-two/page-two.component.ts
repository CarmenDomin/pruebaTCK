import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common'; 

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
})
export class PageTwoComponent {
  public panels = [
    {
      title: 'Mejora tu estancia',
      collapsed: false,
      cards: [
        {
          imageName: 'img1',
          title: 'Olvídese de la rutina',
          content: 'Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem.',
        },
        {
          imageName: 'img2',
          title: 'Experiencias y programas SPA con agua',
          collapsed: true,
          content: "Las experiencias spa de agua tienen una presencia muy especial en SPA Sensations. No es extraño si consideramos que la mayor parte del planeta, así como del propio cuerpo humano, están compuestos de agua.\nEl arte de recrear experiencias de agua en variaciones ilimitadas es la base de la propuesta de SPA Sensations a sus clientes, aportando el refinamiento al baño y a la hidratación en todas sus formas. Un mundo mágico de posibilidades, más allá de la terapia y del que ahora usted, también podrá disfrutar.",
          moreInformation: {
            text: 'Incluye',
            list: [
              'Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.',
              'Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.',
              'Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.',
              'Baño oceánico: con sal marina y gajos de mandarina o lima.',
              'Baño de pies floral: baño aromático de pies, con pétalos y aromas.',
              'Rain shower.'
            ],
            disclaimer: 'Valores no acumulables a otras promociones similares'
          }
        }
      ]
    },
    {
      title: 'Servicios de habitación',
      cards: []
    }
  ];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  private updateHeights(element: HTMLElement, wrapper: HTMLElement, parentElement?: HTMLElement) {
    if (!wrapper) {
      return;
    }
    if (element.clientHeight) {
      if (parentElement) {
        parentElement.style.height = parentElement.clientHeight - wrapper.clientHeight + 'px';
      }
      element.style.height = 0;
    } else {
      if (parentElement) {
        parentElement.style.height = parentElement.clientHeight + wrapper.clientHeight + 'px';
      }
      element.style.height = wrapper.clientHeight + 'px';
    }
  }

  public toggle(iP: number, iC?: number) {
    if (iC !== undefined) {
      this.panels[iP].cards[iC].collapsed = !this.panels[iP].cards[iC].collapsed;
      this.updateHeights(
        this.document.getElementById('card__collapsible--' + iP + '-' + iC),
        this.document.getElementById('card-collapsible__wrapper--' + iP + '-' + iC),
        this.document.getElementById('panel__collapsible--' + iP)
      );
    } else {
      this.panels[iP].collapsed = !this.panels[iP].collapsed;
      this.updateHeights(
        this.document.getElementById('panel__collapsible--' + iP),
        this.document.getElementById('panel-collapsible__wrapper--' + iP)
      );
    }
  }
}
