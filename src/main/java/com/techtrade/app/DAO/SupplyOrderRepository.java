package com.techtrade.app.DAO;

import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Supplier;
import com.techtrade.app.models.SupplyOrder;
@Repository
public interface SupplyOrderRepository extends CrudRepository<SupplyOrder, Long>{
    
    public Set<SupplyOrder> findBy_supplier(Supplier s);
    public Set<SupplyOrder> findBy_arrived(boolean status);

}
