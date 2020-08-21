package com.techtrade.app.DAO;

import java.util.Date;
import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Bill;

@Repository
public interface BillRepository extends CrudRepository<Bill, Long> {
    
    public Set<Bill> findBy_date(Date date);

}
