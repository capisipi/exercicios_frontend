import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-lista',
  imports: [],
  templateUrl: './tag-lista.html',
  styleUrl: './tag-lista.css',
})
export class TagLista {
minhastring: string = "paulo";
//isto é um ARRAY de string, ou um prédio de string na memória.
minhalista: string[] = ["catarina", "tony", "paulo", "samanta", "leonardo", "1", "false", this.minhastring];

//minha lista de any, não é comum usar um any, ele desliga o TypeScript (é um super JavaScript).
minhalistaJS: any[] = ["catarina", "tony", "paulo", "samanta", "leonardo", 1, false];
// minha listar (super array com erro)

// minhalistaJSNumber: number[] = ["catarina", "tony", "paulo", "samanta", "leonardo", 1, false]

}
