   // Función para cambiar el color del título    
        function cambiarColor(elemento){
            elemento.style.color = "blue"; // Cambiar el color del texto a rojo
    }

    // Función para restaurar el color original del título  
    function restaurarColor(elemento){
            elemento.style.color = "black"; // Cambiar el color del texto a azul        
    }

    // Obtener el elemento del título por su ID
    const bvb = document.getElementById("bvb");
            
    // Agregar eventos para cambiar el color cuando se pasa el mouse por encima y restaurar el color cuando se saca el mouse
            
    bvb.addEventListener("mouseover", function () { 
        
        cambiarColor(bvb);
        
    });
            
    bvb.addEventListener("mouseout", function () { 
        
        restaurarColor(bvb);
        
    });
              
                            
                    