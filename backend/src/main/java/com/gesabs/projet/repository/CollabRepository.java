package com.gesabs.projet.repository;

import com.gesabs.projet.model.Collaborateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollabRepository  extends JpaRepository<Collaborateur,String> {




}