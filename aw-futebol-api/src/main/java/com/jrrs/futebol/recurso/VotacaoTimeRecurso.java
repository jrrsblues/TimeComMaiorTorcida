package com.jrrs.futebol.recurso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jrrs.futebol.modelo.Time;
import com.jrrs.futebol.repositorio.Times;

@CrossOrigin("*")
@RestController
@RequestMapping("/votarnotime")
public class VotacaoTimeRecurso {

	@Autowired
	private Times times;
	
	@GetMapping("/{id}")
	public Time getAcionamaneto(@PathVariable Long id){
		int voto = 0;
		Time time = new Time();
		time = times.findById(id).get();
		voto = time.getVotos();
		voto++;
		time.setVotos(voto);
		return times.save(time);		
	}
	
}

