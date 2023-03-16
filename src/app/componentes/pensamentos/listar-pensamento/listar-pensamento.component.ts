import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPnesamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria:  'Componente pai',
      modelo: "modelo3"
    },
    {
      conteudo: 'lorem',
      autoria:  'Componente filho',
      modelo: "modelo2"
    },
    {
      conteudo: 'Aenean feugiat imperdiet mauris, a placerat turpis interdum sed. Praesent turpis est, laoreet id lobortis vel, pulvinar ut lorem. Aenean id auctor eros. Quisque varius elit non erat varius, in ultricies arcu bibendum. Nulla convallis euismod sapien, eget eleifend felis aliquet in. Duis euismod nibh quis ante pulvinar, ut venenatis arcu efficitur. Donec tempus risus sit amet nisi feugiat iaculis. Integer non ligula metus. Nam iaculis lobortis augue, at tincidunt eros convallis eget. Mauris sed luctus felis. Etiam eu risus vehicula neque tincidunt malesuada. Pellentesque luctus fermentum pharetra.Duis quis pretium ligula. Integer dignissim vestibulum ante, in semper eros ultrices in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum condimentum nulla sed finibus sollicitudin. Ut et est nulla. Sed porttitor porttitor ipsum rutrum interdum.',
      autoria:  'Componente filho',
      modelo: "modelo1"
    }

  ];

  constructor () {}

  ngOnInit(): void {

  }


}


