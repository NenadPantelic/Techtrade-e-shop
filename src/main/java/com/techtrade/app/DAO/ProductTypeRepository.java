package com.techtrade.app.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.ProductType;
@Repository
public interface ProductTypeRepository extends CrudRepository<ProductType, Long> {

    public ProductType findBy_name(String name);
}
