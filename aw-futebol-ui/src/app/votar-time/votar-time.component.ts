import { Component, OnInit } from '@angular/core';
import { TimeservicoService } from '../servicos/timeservico.service';
import { Time } from '../model/time.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-votar-time',
  templateUrl: './votar-time.component.html',
  styleUrls: ['./votar-time.component.css']
})
export class VotarTimeComponent implements OnInit {

  times: Array<Time>;
  time: Time;
  timeSelecionado: any;
  retornaMensagemVotacao: boolean;
  retornaApuracaoVotacao: boolean;

  constructor(private timeservico: TimeservicoService) { }

  ngOnInit() {
    this.novoVoto();
    this.retornaMensagemVotacao = false;
    this.retornaApuracaoVotacao = false;
  }

  novoVoto(){
     this.listarTodosTimes();
     this.timeSelecionado = {};
  }

  listarTodosTimes(){
    this.timeservico.listarTodasEquipes().subscribe(response => this.times = response);
  }

  votar(frm: FormGroup){
    this.timeservico.votartime(this.timeSelecionado).subscribe(response =>{
       this.retornaMensagemVotacao = true;
       this.time = response;  
       frm.reset(); 
    });
  }

  finalizarvotar(){
    this.retornaMensagemVotacao = false;
  }

  apuracao(){
    this.timeservico.apuracao().subscribe(response =>{
      this.time = response;
      this.retornaApuracaoVotacao = true;
    });

  }

}
