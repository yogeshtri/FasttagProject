package com.example.fasttag_2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fasttag_2.entity.Fasttag2;

@Repository
public interface FasttagRepository extends JpaRepository<Fasttag2, Long>{

}
