package com.example.fasttag_2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fasttag_2.entity.Fasttag2;
import com.example.fasttag_2.entity.TollCharges;
import com.example.fasttag_2.repository.FasttagRepository;
import com.example.fasttag_2.repository.TollChargeRepository;

@RestController
@RequestMapping("/ftag")
@CrossOrigin("*")
public class Fasttag2Controller {

	@Autowired
	private FasttagRepository fRepo;
	
//	Handler method
	@GetMapping("/tolls")
	public List<Fasttag2> getAllFasttag(){
		return fRepo.findAll();
	}
	
	@PostMapping("/tolls")
	public Fasttag2 saveFasttagDetails(@RequestBody Fasttag2 fasttag) {
		return fRepo.save(fasttag);
	}
	
	@GetMapping("/tolls/{id}")
	public Fasttag2 getSingleFasttag(@PathVariable Long id) {
		return fRepo.findById(id).get();
	}
	
	@PutMapping("/tolls")
	public Fasttag2 updateFasttagDetails(@RequestBody Fasttag2 fasttag) {
		return fRepo.save(fasttag);
	}
	
	@DeleteMapping("/tolls/{id}")
	public ResponseEntity<HttpStatus> deleteTollById(@PathVariable Long id) {
	 fRepo.deleteById(id);
	 return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
		
	}
	
	
	

}
