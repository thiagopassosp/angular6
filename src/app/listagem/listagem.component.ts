import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'CaelumPIC';
  listaFotos: FotoComponent[];
  mensagem: {};

  constructor(private servico: FotoService) {
    this.servico.listar().subscribe(
      fotosApi => this.listaFotos = fotosApi
    )
  }

  ngOnInit() {
  }
  excluir(objFoto: FotoComponent) {
    this.servico.deletar(objFoto).subscribe(
      () => {
        this.listaFotos = this.listaFotos
          .filter(fotoDaLista => fotoDaLista != objFoto)
      })
    this.mensagem = {
      texto: `Foto Excluida com sucesso ${objFoto.titulo}`,
      tipo: "success"
    };

    setTimeout(
      () => this.mensagem = {}, 2000
    );
  }
}
