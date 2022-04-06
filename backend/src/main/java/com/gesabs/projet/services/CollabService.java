package com.gesabs.projet.services;

import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.repository.CollabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollabService {
    @Autowired
    private CollabRepository collabRepository;
    
    //get all
    public List<Collaborateur> getCollabs() {
        return collabRepository.findAll();
    }
    
    //save
   public Collaborateur addCollab(Collaborateur c) {
	   return collabRepository.save(c);
	
        }
   //get by id
   public Collaborateur getCollab(String matr) {
       return collabRepository.findById(matr).orElseThrow();
   }
   
   //Update
   public Collaborateur updateCollab(Collaborateur collab,String matr) {
       Collaborateur existingCollab = collabRepository.findById(matr)
               .orElseThrow();
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

