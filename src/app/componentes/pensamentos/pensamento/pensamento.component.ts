import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  pensamento = {
    conteudo: 'i love angular',
    autoria:  'Jean',
    modelo: "modelo3"
  }

  constructor ()  {}

  ngOnInit () {}

}
