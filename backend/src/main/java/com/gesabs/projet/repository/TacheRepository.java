package com.gesabs.projet.repository;

import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.model.Tache;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TacheRepository  extends JpaRepository<Tache,Integer> {




}