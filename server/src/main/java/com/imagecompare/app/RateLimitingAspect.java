package com.imagecompare.app;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.imagecompare.app.exception.TooManyRequestsException;

import jakarta.servlet.http.HttpServletRequest;

@Aspect
@Component
public class RateLimitingAspect {
    
    private final Map<String, Integer> requestCounts = new ConcurrentHashMap<>();

    @Around("rateLimited()")
    public Object rateLimitRequest(ProceedingJoinPoint joinPoint) throws Throwable {
        // Get the IP address of the client making the request
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String ipAddress = request.getRemoteAddr();

        // Get the current count of requests for this IP address
        Integer count = requestCounts.get(ipAddress);
        if (count == null) {
            count = 0;
        }

        // Check if the rate limit has been exceeded
        int maxRequestsPerMinute = 20;
        if (count >= maxRequestsPerMinute) {
            throw new TooManyRequestsException("Only 20 comparisons/uploads per minute are allowed");
        }

        // Increment the request count for this IP address
        requestCounts.put(ipAddress, count + 1);

        // Proceed with the annotated method
        return joinPoint.proceed();
    }

    @Pointcut("@annotation(com.imagecompare.app.controller.RateLimited)")
    public void rateLimited() {}
}

