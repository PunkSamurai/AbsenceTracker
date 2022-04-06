package com.gesabs.projet.services;

import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.repository.CollabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TacheService {
    @Autowired
    private CollabRepository collabRepository;

    public List<Collaborateur> getCollabs() {
        return collabRepository.findAll();
    }
    
   public Collaborateur addCollabs(Collaborateur c) {
	   return collabRepository.save(c);
	
}
}

