import { Component, OnInit } from '@angular/core';
import { TimeservicoService } from '../servicos/timeservico.service';
import { Time } from '../model/time.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-time',
  templateUrl: './detalhes-time.component.html',
  styleUrls: ['./detalhes-time.component.css']
})
export class DetalhesTimeComponent implements OnInit {

  time: Time;
  id: number;

  constructor(private timeservicoService: TimeservicoService, 
    private rota: ActivatedRoute, 
    private _rota: Router) { }

  ngOnInit() {
    this.id = +this.rota.snapshot.paramMap.get('id');
    this.pesquisartime();
  }

  pesquisartime(){
    this.timeservicoService.pesquisartime(this.id).subscribe(response => this.time = response);
  }

}
