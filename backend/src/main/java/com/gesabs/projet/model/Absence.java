package com.gesabs.projet.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Data
@Entity
public class Absence {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "collab_tahce_id")
    private int id;
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Collab_matr")  
	private Tache tache;
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tache_id")  
	private Collaborateur collaborateur;
	private Date date;
	private String heurDebut;
	private String heurfin;
	private String motif;

   



}
