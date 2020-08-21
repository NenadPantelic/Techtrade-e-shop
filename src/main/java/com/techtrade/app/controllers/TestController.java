package com.techtrade.app.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    
    @GetMapping("/proba/")
    public String testing() {
	System.out.println("USAO OVDEEEEEEE");
	return "Hello";
    }
}
