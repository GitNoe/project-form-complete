# Validación de datos en el lado del cliente de un formulario

[Form Validation](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation)

## Pasos

1. Construcción de la estructura de archivos vía terminal de laragon
2. Lectura de la documentación de la página linkeada arriba
3. Hay dos validaciones posibles:
   1. incorporada en los formularios (poco JS), mediante los controles de HTML5 en el elemento **input**:
       - required (el campo debe completarse)
       - minlenght y maxlenght (de cadenas)
       - min y max (de números)
       - type (tipo de dato)
       - pattern (patrón que se debe seguir)
       - pseudoclase :valid de CSS
   2. con JavaScript:
       - en principio con API de validación de restricciones (métodos y propiedades de DOM)
       - elementos HTML y funciones ya existentes
       - se puede implementar un mensaje de error personalizado (más o menos detallado)
       - también se puede validar sin API incorporada, la diferencia sería que se escribiría todo el javascript a mano
4. Para la primera validación construyo un formulario medianamente extenso con diferentes campos a rellenar y/o contestar, y después otro más pequeño con los datos a validar (nombre, email y contraseña)
5. Le doy estilo a todo con el css - faltan medias queries bien
       - no consigo que se ajuste la altura
6. Código js para validar el email (simple, sin errores personalizados)
7. También me quedan por comprobar la funcionalidad de los patterns de los últimos inputs
