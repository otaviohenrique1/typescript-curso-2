import { View } from "./view.js";
export class MensagemView extends View {
    // private elemento: HTMLElement;
    // constructor(seletor: string) {
    //   this.elemento = document.querySelector(seletor);
    // }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
