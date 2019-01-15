package com.jrrs.futebol.recurso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jrrs.futebol.modelo.Time;
import com.jrrs.futebol.repositorio.Times;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/apuracao")
public class ApuracaoVotacaoRecurso {

	@Autowired
	private Times times;
	
	@GetMapping
	public Time maisVotado(){
		int votado = 0;
		long id = 0;
		Time timao = new Time();
		List<Time> lista = new ArrayList<Time>();
		lista = times.findAll();
		for(Time valor : lista) {  
			if(valor.getVotos() > votado) {
				votado = valor.getVotos();
				timao = valor;
			}
		}
		return timao;		
	}
	
}

