### Programación con Tecnologías Web - Parcial 1

**Pasos para la ejecución**

1. Clonar el repositorio en la máquina local

2. Desde la carpeta del repositorio en la terminal ,acceder a la carpeta denominada /parcial1

3. Desde esa carpeta, ejecutar el comando ```npm install```

4. Luego, ejecutar ```npm start```, y la página se iniciará en un navegador predeterminado


**Desarrollo del Parcial y Reporte de Decisiones**

En primer lugar, se creó el repositorio y se hizo la configuración predeterminada de React para que se abriera una página web con dicha configuración por default, esta configuración se puede ver mediante el release inicial 

En segundo lugar, se hizo la instalación de las dependencias para utilizar Bootstrap, el cual fue muy útil en especial para crear la pantalla de Login, del menú principal y el detalle del inventario.

Posteriormente, se creó una carpeta de componentes en la cual se insertarían todos los archivos por separado correspondientes a la pantalla de login, del menú principal y de el detalle de cada elemento del menú principal.

*Pantalla de login*

Luego, se comenzó con el desarrollo del examen. En primer lugar, se utilizó la técnica de estados (useState) para la pantalla de login, la cual se utilizó principalmente para guardar el texto del correo electrónico, que es importante guardar para después pedirle la contraseña al usuario.

Posteriormente se instalaron las dependencias correspondientes al routing de la página ya que una vez ingresado el correo y la contraseña, se debía redirigir al menú principal de la página.

*Menú principal de la aplicación*

En esta parte, se creó el menú principal de la aplicación, para ello, debido a problemas con el fetch del archivo dado, se recrearon mediante un endpoint de Mockaroo. Este fetcch se paso mediante un efecto secundario (useEffect) y luego se inicializó mediante un estado.

Para el display de los elementos (20 según el endpoint), se utilizaron cartas de Bootstrap (Cards), se creó un componente Card para acomodar la información de forma predeterminada.

En el componente Home, correspondiente al menú principal, se recorrieron mediante un props las propiedades que se deben ver en el menú principal contenidas en el json (carName,carModeletc...).

*Componente Detalle del Inventario*

Al igual que con Home, el detalle del componente seleccionado se puede ver abajo, y se utilizó la misma técnica para encontrar las características (con props.cars). También se implementó la función onClick() para que el usuario una vez hiciera onClick(), se pudiera acceder directamente al componente detalle del elemento seleccionado.

*Internacionalización (I18N)*

Para esta parte del examen, se instalaron las dependencias correspondientes a react-intl, el cual permite internacionalizar el proyecto. Se hicieron cambios en el archivo index.js para reconocer el idioma. Y se creó una carpeta denominada /locales para nombrar los elementos en español y en inglés. En cada componente se hizo el cambio de la variable con FormattedMessage para que reconociera el elemento en su respectivo idioma.




