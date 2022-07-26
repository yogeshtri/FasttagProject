package com.example.fasttag_2.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name= "tbl_tollcharge")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TollCharges {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	private String typeOfVehicle;
	
	private Long singleJ;
	
	private Long returnJ;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getTypeOfVehicle() {
		return typeOfVehicle;
	}

	public void setTypeOfVehicle(String typeOfVehicle) {
		this.typeOfVehicle = typeOfVehicle;
	}

	public Long getSingleJ() {
		return singleJ;
	}

	public void setSingleJ(Long singleJ) {
		this.singleJ = singleJ;
	}

	public Long getReturnJ() {
		return returnJ;
	}

	public void setReturnJ(Long returnJ) {
		this.returnJ = returnJ;
	}
}
