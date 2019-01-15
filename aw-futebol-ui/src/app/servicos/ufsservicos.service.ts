import { Injectable } from '@angular/core';
import { Estado } from '../model/estado.model';

@Injectable({
  providedIn: 'root'
})

export class UfsservicosService {

  private listUfs: Array<Estado> = [
    {uf:'AL'},
    {uf:'AP'},
    {uf:'AM'},
    {uf:'BA'},
    {uf:'CE'},
    {uf:'DF'},
    {uf:'ES'},
    {uf:'GO'},
    {uf:'MA'},
    {uf:'MT'},
    {uf:'MS'},
    {uf:'MG'},
    {uf:'PA'},
    {uf:'PB'},
    {uf:'PR'},
    {uf:'PE'},
    {uf:'PI'},
    {uf:'RJ'},
    {uf:'RN'},
    {uf:'RS'},
    {uf:'RO'},
    {uf:'RR'},
    {uf:'SC'},
    {uf:'SP'},
    {uf:'SE'},
    {uf:'TO'}
  ];

  getUfs(): Array<Estado>{
    return this.listUfs;
  }

  constructor() { }

}
