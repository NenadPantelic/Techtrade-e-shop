package com.techtrade.app.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Producer;

@Repository
public interface ProducerRepository extends CrudRepository<Producer, Long>{

    
    public Producer findBy_name(String name);
}
