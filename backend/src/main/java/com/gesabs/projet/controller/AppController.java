package com.gesabs.projet.controller;


import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.services.CollabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AppController {
    @Autowired
    private CollabService collabService;

    //Get All Collabs
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








}
