import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoService } from '../services/foto.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto = new FotoComponent()
  http: HttpClient
  tipo: string;
  mensagem = {
    texto: "",
    tipo: ""
  };

  constructor(private rota: ActivatedRoute, private servico: FotoService, private roteador: Router) {

    let fotoId = this.rota.snapshot.params.fotoId

    if (fotoId) {
      this.servico.pesquisar(fotoId)
        .subscribe(fotoAPi => this.foto = fotoAPi)
    }
  }

  salvar() {
    if (this.foto._id) {
      this.servico.alterar(this.foto)
        .subscribe(
          () => {
            this.mensagem = {
              texto: `Foto ${this.foto.titulo} alterada com sucesso`,
              tipo: "success"
            };

            setTimeout(
              () => this.roteador.navigateByUrl(''), 2000
            );
          },
          error => {
            this.mensagem = {
              texto: `Erro ao alterar a Foto ${this.foto.titulo}`,
              tipo: "danger"
            };
          }
        );
    }
    else {
      this.servico.cadastrar(this.foto)
        .subscribe(
          () => {
            this.mensagem = {
              texto: `Foto ${this.foto.titulo} salva com sucesso`,
              tipo: "success"
            };
            setTimeout(
              () => this.roteador.navigateByUrl(''), 2000
            );
          },
          error => {
            this.mensagem = {
              texto: `Erro ao inserir a Foto ${this.foto.titulo}`,
              tipo: "danger"
            };
          }
        );
    }
  }
}
