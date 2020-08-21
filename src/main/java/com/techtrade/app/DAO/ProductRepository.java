package com.techtrade.app.DAO;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.Producer;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.ProductType;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    public List<Product> findBy_producer(Producer producer);

    public List<Product> findBy_productType(ProductType type);

    public Product findBy_productOrder(ProductOrder productOrder);

    public Product findBy_name(String name);

    public List<Product> findBy_toBeDiscounted(boolean status);

    public List<Product> findBy_availableForSale(boolean status);

    @Query("SELECT p FROM Product p WHERE p.id IN :idList")
    public List<Product> findProductsByIds(@Param("idList") List<Long> idList);

    @Query("SELECT p FROM Product p WHERE p._producer.id = :producerID AND p._productType.id = :productType")
    public List<Product> findProductsByProducerAndProductType(@Param("producerID") long producerID,
	    @Param("productType") long productType);

}
