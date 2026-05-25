import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagTitulo } from './tag-titulo/tag-titulo';
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";
import { TagLista } from "./tag-lista/tag-lista";
import { TagLink } from "./tag-link/tag-link";
import { TagImagem } from "./tag-imagem/tag-imagem";
import { TagVideo } from "./tag-video/tag-video";
import { TagsSemanticas } from "./tags-semanticas/tags-semanticas";
import { TabelaEstatica01 } from "./tabela-estatica01/tabela-estatica01";
import { TabelaEstatica02 } from "./tabela-estatica02/tabela-estatica02";
import { FormularioEstatico } from "./formulario-estatico/formulario-estatico";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagParagrafo, TagTitulo, TagLista, TagLink, TagImagem, TagVideo, TagsSemanticas, TabelaEstatica01, TabelaEstatica02, FormularioEstatico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio-1');
}
