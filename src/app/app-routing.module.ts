import { AtualizarProdutoComponent } from './componentes/produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarProdutoComponent } from './componentes/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './componentes/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'produtos', component: ListarProdutosComponent},
  {path: 'produtos/cadastrar', component: CadastrarProdutoComponent},
  {path: 'produtos/atualizar/:id', component: AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
