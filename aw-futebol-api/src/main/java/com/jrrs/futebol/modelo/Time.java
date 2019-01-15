package com.jrrs.futebol.modelo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Time {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	   
	private String chave;
	private String nomecompletodotime;
	private String nomedotime;
	private Date datafundacao;
	private String cores;
	private String email;
	private String uf;
	private String estadio;
	private double valor;
	private int votos;
	   
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getChave() {
		return chave;
	}
	public void setChave(String chave) {
		this.chave = chave;
	}
	public String getNomecompletodotime() {
		return nomecompletodotime;
	}
	public void setNomecompletodotime(String nomecompletodotime) {
		this.nomecompletodotime = nomecompletodotime;
	}
	public String getNomedotime() {
		return nomedotime;
	}
	public void setNomedotime(String nomedotime) {
		this.nomedotime = nomedotime;
	}
	public Date getDatafundacao() {
		return datafundacao;
	}
	public void setDatafundacao(Date datafundacao) {
		this.datafundacao = datafundacao;
	}
	public String getCores() {
		return cores;
	}
	public void setCores(String cores) {
		this.cores = cores;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getEstadio() {
		return estadio;
	}
	public void setEstadio(String estadio) {
		this.estadio = estadio;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	public int getVotos() {
		return votos;
	}
	public void setVotos(int votos) {
		this.votos = votos;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Time other = (Time) obj;
		if (id != other.id)
			return false;
		return true;
	}
	   
	   
}
