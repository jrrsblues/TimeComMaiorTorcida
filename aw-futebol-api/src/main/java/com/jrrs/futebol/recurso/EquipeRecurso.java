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
@RequestMapping("/timerecurso")
public class EquipeRecurso {

	@Autowired
	private Times times;
	
	@GetMapping("/{id}")
	public Time getAcionamaneto(@PathVariable Long id){
		return times.findById(id).get();
	}
	
}


