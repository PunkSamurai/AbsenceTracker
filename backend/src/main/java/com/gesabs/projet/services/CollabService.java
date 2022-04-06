package com.gesabs.projet.services;

import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.repository.CollabRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollabService {
    @Autowired
    private CollabRepository collabRepository;

    public List<Collaborateur> getCollabs() {
        return collabRepository.findAll();
    }


    public Collaborateur addCollab(Collaborateur c){
        collabRepository.save(c);
        return c;
    }

    public Collaborateur getCollab(String matr) {
        return collabRepository.findById(matr).orElseThrow(() -> new ResourceNotFoundException("Collab n'est pas trouvé avec ce matr :" + matr));
    }

    public Collaborateur updateCollab(Collaborateur collab,String matr) {
        Collaborateur existingCollab = collabRepository.findById(matr)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + matr));
        existingCollab.setNom(collab.getNom());
        existingCollab.setPrenom(collab.getPrenom());

        Collaborateur updatedCollaborateur = collabRepository.save(existingCollab);
        return updatedCollaborateur ;
    }

    //Delete
    public String deleteCollab(String matr){
        collabRepository.deleteById(matr);
        return "product removed !! " + matr;
    }

}

