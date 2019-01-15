package com.jrrs.futebol.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jrrs.futebol.modelo.Time;

public interface Times extends JpaRepository<Time, Long> {

}
