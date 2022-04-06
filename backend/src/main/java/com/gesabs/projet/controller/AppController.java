package com.gesabs.projet.controller;

import org.springframework.web.bind.annotation.*;
import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.model.Service;
import com.gesabs.projet.services.CollabService;
import com.gesabs.projet.services.ServiceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AppController {
	//------------------------------------Autowiring-----------------------------------
	
    @Autowired
    private CollabService collabService;
    @Autowired
    private ServiceService serviceService;
    
    //------------------------------------Collabs------------------------------------
    
    //get all collabs
    @GetMapping("/collabs")
    public List<Collaborateur> finAllCollabs() {
        return collabService.getCollabs();
    }
    
    //Add Collab
    @PostMapping("/collabs")
    public Collaborateur addCollab(@RequestBody Collaborateur collaborateur) {
        return collabService.addCollab(collaborateur);
    }
    
    //Get Collab by id
    @GetMapping("/collabs/{matr}")
    public Collaborateur getCollab(@PathVariable String matr) {
        return collabService.getCollab(matr);
    }

    //Update Collab
    @PutMapping("/collabs/{matr}")
    public Collaborateur updateCollab(@PathVariable String matr,@RequestBody Collaborateur collab) {
        return collabService.updateCollab(collab,matr);
    }

    //Delete Collab
    @DeleteMapping("/collabs/{matr}")
    public ResponseEntity<Map<String, Boolean>> deleteCollab(@PathVariable String matr){
         collabService.deleteCollab(matr);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    
   //----------------------------------------------  Services--------------------------------------

   
   //get all services
    @GetMapping("/services")
    public List<Service> finAllServices() {
        return serviceService.getServices();
    }

    //het service by id
    @GetMapping("/services/{id}")
    public com.gesabs.projet.model.Service getService(@PathVariable String id) {
    	int i=Integer.parseInt(id);
        return serviceService.getService(i);
    }
    
//    @PostMapping("/collabs")
//    public List<Collaborateur> addCollabs() {
//        return collabService.addCollabs();
//    }

    


}
