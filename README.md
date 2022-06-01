<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

	Escriba un algoritmo que dada una matriz lineal de números enteros, encuentre el número que 
	aparece más veces teniendo un número de apariciones impar.

	Ejemplo:

		[ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ] 
		
    Apariciones:

        	1  -> 10 
        	10 -> 1

    Solución:

       	 10
		
    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    

    [Suite Tests]
    
 	 PASS  test/suite.test.js
		
        ✓ [ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ] (2ms)
        ✓ [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ] (1ms)
        ✓ [ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]
        ✓ [-10]
        ✓ [ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]
        ✓ [ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ] (1ms)
        ✓ [ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10, 10 ]
        ✓ [ 5, 4, 3, 2, 1, 5, 4, 4, 2, 10, 10 ]
        ✓ [ 5, 4, 3, 2, 1, 5, 4, 3, 2, 2, 10 ]
        ✓ [ 5, 4, 3, 2, 1, 7, 4, 3, 2, 10, 10 ] (1ms)
        ✓ [ 5, 4, 3, 2, 1, 5, 4, 3, 2, 7, 7 ]
        ✓ [ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16]
        ✓ [ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10 ... ]
        ✓ [ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10 ... ] (3ms)
        ✓ [ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10 ... ] (1ms)
            
    Test Suites: 1 passed, 1 total
    Tests:       15 passed, 15 total
    Snapshots:   0 total
    Time:        1.25s		

## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
