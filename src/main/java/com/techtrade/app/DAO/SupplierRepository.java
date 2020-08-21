package com.techtrade.app.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Supplier;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long>{

    
}
