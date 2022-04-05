package com.gesabs.projet.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Collaborateur {
    @Id
    @Column(length = 64)
    private String matr;
    private String nom;
    private String prenom;



}
