import { Component, Input } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../services/foto.service";

@Component({
    selector: "card",
    templateUrl: "./card.component.html",
    styles: []
})
export class CardComponent {
    constructor(private servico: FotoService) {

    }

    @Input() foto: FotoComponent


}