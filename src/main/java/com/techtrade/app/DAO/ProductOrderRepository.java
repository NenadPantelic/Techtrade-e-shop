package com.techtrade.app.DAO;

import java.util.List;
import java.util.Set;

import org.springframework.data.repository.CrudRepository;

import com.techtrade.app.models.OrderState;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.SupplyOrder;

public interface ProductOrderRepository extends CrudRepository<ProductOrder, Long>{
    public Set<ProductOrder> findBy_supplyOrder(SupplyOrder so);
    public List<ProductOrder> findBy_orderState(OrderState state);
}
