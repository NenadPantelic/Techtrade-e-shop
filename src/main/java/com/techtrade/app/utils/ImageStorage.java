package com.techtrade.app.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;

public class ImageStorage {

    //private static final String uploadDir = Paths.get("").toAbsolutePath().toString() +  "/uploads/";
    /*server version - for production*/
    private static final String uploadDir = "/var/www/html/techtrade/uploads/";
    
    public static String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(!new File(uploadDir).exists()){
            new File(uploadDir).mkdir();
        }
        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new ServerException("Sorry! Filename contains invalid path sequence " + fileName, ExceptionType.INVALID_VALUE);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = Paths.get(uploadDir + fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return "uploads/" + fileName;
        } catch (IOException ex) {
            System.out.println(ex);
            return null;
            //throw new ServerException("Could not store file " + fileName + ". Please try again!", ExceptionType.INTERNAL_ERROR);
        }
    }

}
