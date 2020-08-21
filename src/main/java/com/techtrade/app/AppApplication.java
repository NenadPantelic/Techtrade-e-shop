package com.techtrade.app;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@ComponentScan("com.techtrade.app")
@SpringBootApplication
@EnableScheduling


public class AppApplication {

    public static void main(String[] args) {
	SpringApplication.run(AppApplication.class, args);

    }
    
    

}
