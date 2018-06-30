import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    template: '<img [src]="url || urlDefault" [alt]="titulo" class="card-img-top">',
    styles: []
})
export class FotoComponent {
    @Input() titulo;
    @Input() url;
    descricao: string = "";
    _id: string = "";
    urlDefault: string = "https://security.ufpb.br/intrum/contents/categorias/cordofones/gualambo/sem-imagem-1.jpg/@@images/image.jpeg"
}