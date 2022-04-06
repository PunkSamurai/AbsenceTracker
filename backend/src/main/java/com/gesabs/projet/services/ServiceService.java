package com.gesabs.projet.services;

import com.gesabs.projet.repository.ServiceRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "http://localhost:4200")
@Service

public class ServiceService {
	//--------------------------------Autowiring------------------------------------
    @Autowired
    private ServiceRepository serviceRepository;
    
    //---------------------------------Functions--------------------------------

    public List<com.gesabs.projet.model.Service> getServices() {
        return serviceRepository.findAll();
    }
    
   public Object addService(com.gesabs.projet.model.Service s) {
	   return serviceRepository.save(s);
   }
	   public com.gesabs.projet.model.Service getService(int id) {
		   return serviceRepository.findById(id).orElseThrow();
	   }
}


