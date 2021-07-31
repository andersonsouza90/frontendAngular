import { environment } from './../../environments/environment';
import { IProduto } from './../model/IProduto.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = environment.URL;
  produtoSelecionado: any;

  constructor(private http: HttpClient, private toastr: ToastrService, private dtPipe: DatePipe) { }

  buscarTodos(): any{
    return produtos;
  }

  /*buscarTodos(): Observable<any>{

    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );

  }*/

  buscarPorId(id: number): IProduto{

    this.produtoSelecionado = produtos.filter(p => p.id === id)[0];
    this.produtoSelecionado.validade = this.dtPipe.transform(this.produtoSelecionado.validade, 'yyyy-MM-dd');

    return this.produtoSelecionado;
  }

  // buscarPorId(id: number): Observable<IProduto>{
  //   return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
  //     map(retorno => retorno),
  //     catchError(erro => this.exibeErro(erro))
  //   );
  // }

  atualizar(produto: IProduto){
    return '';
  }

  // atualizar(produto: IProduto): Observable<IProduto>{
  //   return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
  //     map(retorno => retorno),
  //     catchError(erro => this.exibeErro(erro))
  //   );
  // }

  excluir(id: number){
    let p = produtos.filter(p => p.id === id)[0];
    produtos = produtos.filter(obj => obj !== p);


  }

  // excluir(id: number): Observable<any>{
  //   return this.http.delete<any>(`${this.URL}/${id}`).pipe(
  //     map(retorno => retorno),
  //     catchError(erro => this.exibeErro(erro))
  //   );
  // }

  cadastrar(p: IProduto){
    if(produtos.length == 0){
      p.id = 1;
      return produtos.push(p);
    }else{
      p.id = Number(produtos[produtos.length-1].id) + 1;
    return produtos.push(p);
    }

  }

  // cadastrar(produto: IProduto): Observable<IProduto>{
  //   return this.http.post<IProduto>(this.URL, produto).pipe(
  //     map(retorno => retorno),
  //     catchError(erro => this.exibeErro(erro))
  //   );
  // }

  exibeErro(e: any):Observable<any>{
    this.exibirMensagem('Erro!', 'Não foi possível realizar a operação.', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

}

var produtos: IProduto [] = [
{
  id: 1,
  nome: 'Angular: CLI',
  validade: new Date() + '',
  preco: '12.99'
},
{
  id: 2,
  nome: 'Angular: Forms',
  validade: new Date() + '',
  preco: '24.99'
},
{
  id: 3,
  nome: 'Angular: HTTP',
  validade: new Date() + '',
  preco: '36.99'
},
{
  id: 4,
  nome: 'Angular: Router',
  validade: new Date() + '',
  preco: '46.99'
},
{
  id: 5,
  nome: 'Angular: Animations',
  validade: new Date() + '',
  preco: '56.99'
}
];
