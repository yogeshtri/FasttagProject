package com.example.fasttag_2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fasttag_2.entity.TollCharges;

@Repository
public interface TollChargeRepository extends JpaRepository<TollCharges, Long>{

}
