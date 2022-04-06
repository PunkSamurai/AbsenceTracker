package com.gesabs.projet.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Data
@Getter
@Setter
public class Collaborateur {
    @Id
    @Column(length = 64)
    private String matr;
    private String nom;
    private String prenom;



    public Collaborateur(String matr, String nom, String prenom) {
        this.matr = matr;
        this.nom = nom;
        this.prenom = prenom;
    }
    public Collaborateur() {
    }

}
