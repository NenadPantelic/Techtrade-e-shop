package com.techtrade.app.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Invoice;
import com.techtrade.app.models.SupplyOrder;

@Repository
public interface InvoiceRepository extends CrudRepository<Invoice, Long> {
    
    public Invoice findBy_supplyOrder(SupplyOrder so);

}
