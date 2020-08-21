package com.techtrade.app.DAO;

import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techtrade.app.models.User;
import com.techtrade.app.models.UserType;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    public User findBy_username(String username);

    public User findBy_email(String email);

    public Set<User> findBy_role(UserType role);
}
