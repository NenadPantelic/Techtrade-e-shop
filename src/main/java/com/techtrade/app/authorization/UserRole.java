package com.techtrade.app.authorization;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.techtrade.app.models.UserType;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface UserRole {
    
    UserType[] roles() default {UserType.WORKER};

}
