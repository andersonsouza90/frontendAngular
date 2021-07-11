import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumbers: number[] = [10,20,30];

  objetoModelo= {
    nome: "Dandy",
    idade: 31,
    altura: 1.76,
    graduado: true
  };

  listaProdutos: IProduto[] = [];

  constructor(private produtoService: ProdutosService) {

  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.produtoService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    });
  }

  deletar(produto: IProduto | any): void{
    this.produtoService.excluir(produto.id).subscribe(() => {
      this.produtoService.exibirMensagem('SISTEMA', `${produto.nome} foi excluido com sucesso`, 'toast-error');
      this.carregarProdutos();
    });

  }

}
