package com.gesabs.projet.model;

import lombok.Data;
import lombok.Getter;

import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;



@Entity

 public class Collaborateur {
@Data
@Getter
@Setter
    @Id
    @Column(length = 64)
    private String matr;
    private String nom;
    private String prenom;
	@OneToMany(mappedBy = "collaborateur")
	private List<Absence> absences;
	




    public Collaborateur(String matr, String nom, String prenom) {
        this.matr = matr;
        this.nom = nom;
        this.prenom = prenom;
    }
    public Collaborateur() {
    }

}
