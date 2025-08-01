import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse position
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    
    // Cursor attraction settings
    const attractionRadius = 100; // Radius within which particles are attracted to cursor
    const attractionStrength = 0.05; // Strength of attraction (0-1)
    const maxSpeed = 2; // Maximum speed of particles
    
    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // For touch devices
    const handleTouchMove = (e) => {
      e.preventDefault();
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 2; // Bigger dots (2-4px)
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 0.5; // Slow random movement
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.isAttracting = false;
      }
      
      update() {
        // Random movement
        if (Math.random() < 0.02) {
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = (Math.random() - 0.5) * 0.5;
        }
        
        // Calculate distance to cursor
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distanceToCursor = Math.sqrt(dx * dx + dy * dy);
        
        // Reset attraction flag
        this.isAttracting = false;
        
        // Apply attraction to cursor if within radius
        if (distanceToCursor < attractionRadius) {
          // Calculate attraction strength based on distance (stronger when closer)
          const attractFactor = 1 - distanceToCursor / attractionRadius;
          const attractX = dx * attractionStrength * attractFactor;
          const attractY = dy * attractionStrength * attractFactor;
          
          // Apply attraction
          this.speedX += attractX;
          this.speedY += attractY;
          
          // Mark as attracting
          this.isAttracting = true;
          
          // Increase size slightly when attracted
          this.size = this.baseSize * (1 + attractFactor * 0.6);
        } else {
          // Return to original size
          this.size = this.baseSize;
        }
        
        // Apply friction
        this.speedX *= 0.98;
        this.speedY *= 0.98;
        
        // Limit maximum speed
        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        if (currentSpeed > maxSpeed) {
          this.speedX = (this.speedX / currentSpeed) * maxSpeed;
          this.speedY = (this.speedY / currentSpeed) * maxSpeed;
        }
        
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary check - wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.isAttracting) {
          ctx.fillStyle = 'rgba(138, 43, 226, 0.85)'; // Brighter purple when attracted
        } else {
          ctx.fillStyle = 'rgba(128, 0, 128, 0.7)'; // Purple with transparency
        }
        
        ctx.fill();
      }
    }
    
    // Create particles
    const particles = [];
    const maxParticles = 200;
    
    for (let i = 0; i < maxParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent black for subtle trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particles.forEach(particle => {
        particle.update();
      });
      
      // Draw connections between nearby particles
      const connectionDistance = 100; // Maximum distance for connection
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Calculate opacity based on distance (more transparent as distance increases)
            const opacity = 1 - (distance / connectionDistance);
            
            // Draw line between particles
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Determine line color based on attraction
            if (particles[i].isAttracting && particles[j].isAttracting) {
              ctx.strokeStyle = `rgba(138, 43, 226, ${opacity * 0.6})`; // Brighter for attracted particles
            } else if (particles[i].isAttracting || particles[j].isAttracting) {
              ctx.strokeStyle = `rgba(128, 0, 128, ${opacity * 0.5})`; // Medium for one attracted
            } else {
              ctx.strokeStyle = `rgba(128, 0, 128, ${opacity * 0.3})`; // Subtle for normal
            }
            
            ctx.lineWidth = 0.8; // Thicker lines
            ctx.stroke();
          }
        }
      }
      
      // Draw particles on top of connections
      particles.forEach(particle => {
        particle.draw();
      });
      
      // Add subtle glow effect around mouse
      if (mouseX !== canvas.width / 2 || mouseY !== canvas.height / 2) { // Only if mouse has moved
        const gradient = ctx.createRadialGradient(
          mouseX, mouseY, 1, 
          mouseX, mouseY, attractionRadius
        );
        gradient.addColorStop(0, 'rgba(138, 43, 226, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(mouseX - attractionRadius, mouseY - attractionRadius, attractionRadius * 2, attractionRadius * 2);
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      className="interactive-background"
    />
  );
};

export default InteractiveBackground;
