package com.jrrs.futebol.recurso;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jrrs.futebol.modelo.Time;
import com.jrrs.futebol.repositorio.Times;

@CrossOrigin("*")
@RestController
@RequestMapping("/equipe")
public class TimeRecurso {
    
	@Autowired
	private Times times;
	
	@GetMapping
	public List<Time> listar(){
		return times.findAll();
	}
	
	@PostMapping
	public Time cadastrar(@RequestBody @Valid Time time) {
		return times.save(time);
	}
	
}
