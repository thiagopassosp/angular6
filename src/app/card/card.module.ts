import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { FotoComponent } from "../foto/foto.component";

@NgModule({
    declarations: [CardComponent, FotoComponent], //Registro da declaraçÃO
    exports: [CardComponent, FotoComponent]
})
export class CardModule {

}
