package com.gesabs.projet.repository;

import com.gesabs.projet.model.Absence;
import com.gesabs.projet.model.Collaborateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbsenceRepository  extends JpaRepository<Absence,Integer> {




}