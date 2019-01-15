import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Estado } from '../model/estado.model';
import { UfsservicosService } from '../servicos/ufsservicos.service';
import { TimeservicoService } from '../servicos/timeservico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-criar-time',
  templateUrl: './criar-time.component.html',
  styleUrls: ['./criar-time.component.css']
})
export class CriarTimeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

 
  time: any;
  ufs: Array<Estado>;
  mensagem: any;
  id: number;
  mensagemsucesso: boolean;

  constructor(private localeService: BsLocaleService, 
    private ufsservicosService: UfsservicosService,
    private timeservico: TimeservicoService, 
    private rota: ActivatedRoute,
    private _rota: Router) { 
     localeService.use('pt-br');
     this.datePickerConfig = Object.assign({}, { 
      containerClass:  'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      showWeekNumbers: true, 
    });
  }

  ngOnInit() {
    this.id = +this.rota.snapshot.paramMap.get('id');
    if(this.id===0){
        this.novoCadastro();
       }else{
        this.pesquisartime();
    }
    this.ufs = this.ufsservicosService.getUfs();
    this.novoCadastro();
    this.mensagemsucesso = false;
  }

  novoCadastro(){
    this.time = {};
  }

  cadastrar(frm: FormGroup){
    this.timeservico.cadastrar(this.time).subscribe(response =>{
      frm.reset();
      this.novoCadastro();
      this.mensagemsucesso = true;
    });
  }

  pesquisartime(){
    this.timeservico.pesquisartime(this.id).subscribe(response => this.time = response); 
  }

  uploadEscudoDoTime(event){
    this.timeservico.uploadEscudoDoTime(event);
  }

}
