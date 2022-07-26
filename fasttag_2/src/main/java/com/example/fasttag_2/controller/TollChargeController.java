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
import com.example.fasttag_2.repository.TollChargeRepository;

@RestController
@RequestMapping("/ftag")
@CrossOrigin("*")
public class TollChargeController {

	@Autowired
	private TollChargeRepository tRepo;
	
//	Handler method
	@GetMapping("/charges")
	public List<TollCharges> getAllCharges(){
		return tRepo.findAll();
	}
	
	@PostMapping("/charges")
	public TollCharges saveTollCharges(@RequestBody TollCharges charge) {
		return tRepo.save(charge);
	}
	
	@GetMapping("/charges/{id}")
	public TollCharges getSingleFasttag(@PathVariable Long id) {
		return tRepo.findById(id).get();
	}
	
	@PutMapping("/charges")
	public TollCharges updateFasttagDetails(@RequestBody TollCharges charge) {
		return tRepo.save(charge);
	}
	
	@DeleteMapping("/charges/{id}")
	public ResponseEntity<HttpStatus> deleteTollById(@PathVariable Long id) {
		tRepo.deleteById(id);
	 return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
		
	}
	
}
