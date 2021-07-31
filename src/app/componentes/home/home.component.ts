import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foto: string = 'assets/img/crud.png';
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`; //Concatenação de texto e variável
  idProduto: number = 35;
  precoProduto: number = 120.99
  promocao: boolean = true;
  dataValidade = '2021-07-05';


  constructor() {
    //Variáveis de string com concatenação
    //this.anuncio = 'O ' + this.nomeProduto + ' está em promoção.';

    console.log('Produto: ' + this.nomeProduto);

  }

  ngOnInit(): void {
  }

}
