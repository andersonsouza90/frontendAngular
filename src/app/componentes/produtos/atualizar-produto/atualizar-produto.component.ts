import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: '',
    validade: new Date,
    preco: 0
  };

  constructor(private produtosService: ProdutosService,
              private route: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produto = this.produtosService.buscarPorId(id);
    //this.produtosService.buscarPorId(id).subscribe(retorno =>{
    //  this.produto = retorno;
    //});
  }

  salvarProduto(): void{

    this.produtosService.atualizar(this.produto);
    this.produtosService.exibirMensagem(
           'SISTEMA',
           `${this.produto.nome} foi atualizado com sucesso.`,
           'toast-success'
         );
    this.route.navigate(['/produtos']);

    // this.produtosService.atualizar(this.produto).subscribe(retorno =>{
    //   this.produto = retorno;
    //   this.produtosService.exibirMensagem(
    //     'SISTEMA',
    //     `${this.produto.nome} foi atualizado com sucesso.`,
    //     'toast-success'
    //   );
    //   this.route.navigate(['/produtos']);
    // });
  }

}
