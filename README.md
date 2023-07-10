

# **POKEMON** 

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 12.18.3 o mayor
-  **NPM**: 6.14.16 o mayor

**ACLARACIÓN:** las dependencias actuales se encuentran en las siguientes versiones.

-  **react**: 17.0.1
-  **react-dom**: 17.0.1
-  **react-router-dom**: 5.2.0
-  **redux**: 4.0.5
-  **react-redux**: 7.2.3
 

Este proyecto es una aplicación web a partir de la API [**pokeapi**](https://pokeapi.co/) en la que se pueda:

-  Buscar pokemones.
-  Visualizar la información de los pokemones.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos pokemones.



### **🖱 BASE DE DATOS**

**📍 MODELO 1 | Pokemons**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Vida. \*
-  Ataque. \*
-  Defensa. \*
-  Velocidad.
-  Altura.
-  Peso.

<br />

**📍 MODELO 2 | Type**

-  ID. \*
-  Nombre. \*

<br />

---

<br />

### **🖱 BACK-END**

 El servidor cuenta con las siguientes rutas:

#### **📍 GET | /pokemons**

-  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

#### **📍 GET | /pokemons/:idPokemon**

-  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
-  El pokemon es recibido por parámetro (ID).
-  Tiene que incluir los datos del tipo de pokemon al que está asociado.
-  Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

#### **📍 GET | /pokemons/name?="..."**

-  Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el pokemon, debe mostrar un mensaje adecuado.
-  Debe buscar tanto los de la API como los de la base de datos.

#### **📍 POST | /pokemons**

-  Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).

#### **📍 GET | /types**

-  Obtiene un arreglo con todos los tipos de pokemones.
-  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

Se desarrolló una aplicación utilizando **React** y **Redux** que contiene las siguientes vistas:

**📍 LANDING PAGE |**

-  Imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de la SPA contiene:

-  SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
-  Sector en el que se ve un listado de cards con los pokemones. Al iniciar carga los primeros resultados obtenidos desde la ruta **`GET /pokemons`** y muestra su:
   -  Imagen.
   -  Nombre.
   -  Tipos.
-  Cuando se le hace click a una Card redirige al detalle de ese pokemon específico.
-  Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
-  Paginado

<br />

**📍 DETAIL PAGE |** en esta vista se muestra toda la información específica de un pokemon:

-  ID.
-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Tipo.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo pokemon.
Cuenta con los siguientes campos:

-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-  Botón para crear el nuevo pokemon.


<br />

---

<br />


<img src="./pokemon.png" alt="" />
