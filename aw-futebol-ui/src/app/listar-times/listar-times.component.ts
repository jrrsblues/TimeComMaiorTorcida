import { Component, OnInit } from '@angular/core';
import { Time } from '../model/time.model';
import { TimeservicoService } from '../servicos/timeservico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-times',
  templateUrl: './listar-times.component.html',
  styleUrls: ['./listar-times.component.css']
})
export class ListarTimesComponent implements OnInit {

  times:Array<Time>;

  constructor(private timeservico: TimeservicoService, private rota: Router) { }

  ngOnInit() {
    this.listarTodasEquipes();
  }

  novalistagem(){
    this.times = [];
  }

  listarTodasEquipes(){
    this.timeservico.listarTodasEquipes().subscribe( response => this.times = response);
  }

  verDetalhesTime(id: number){
    this.rota.navigate(['/detalhes',id]);
  }

  alterarDadosTime(id: number){
    this.rota.navigate(['/criar',id]);
  }

}
