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


@Data
@Entity
 public class Collaborateur {
    @Id
    @Column(length = 64)
    private String matr;
    private String nom;
    private String prenom;
	@OneToMany(mappedBy = "collaborateur")
	private List<Absence> absences;
	




}
