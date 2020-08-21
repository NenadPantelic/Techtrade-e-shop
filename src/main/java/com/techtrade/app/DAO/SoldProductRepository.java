package com.techtrade.app.DAO;

import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Bill;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.SoldProduct;

@Repository
public interface SoldProductRepository extends CrudRepository<SoldProduct, Long>{

    public Set<SoldProduct> findBy_product(Product product);
    public Set<SoldProduct> findBy_bill(Bill bill);
}
