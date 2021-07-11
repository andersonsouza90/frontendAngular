import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: any;
  @Input() nomeProduto: any;
  @Input() promocao: any;
  @Input() idProduto: any;
  @Input() dataValidade: any;
  @Input() precoProduto: any;

  constructor() { }

  ngOnInit(): void {
  }


}
