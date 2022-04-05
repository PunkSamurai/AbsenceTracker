package com.gesabs.projet.controller;


import com.gesabs.projet.model.Collaborateur;
import com.gesabs.projet.services.CollabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AppController {
    @Autowired
    private CollabService collabService;
    @GetMapping("/collabs")
    public List<Collaborateur> finAllCollabs() {
        return collabService.getCollabs();
    }



}
