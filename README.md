# Sistema de Facturación Web

## Introducción

El propósito de la presente actividad consiste en el desarrollo de un sistema de facturación web implementado mediante JavaScript, cuya finalidad es permitir la selección de productos o servicios desde un listado predefinido, efectuar el cálculo automático del valor correspondiente en función de la cantidad ingresada, y generar de manera dinámica el subtotal, el impuesto al valor agregado (IVA) y el monto total a cancelar. En el desarrollo del sistema se implementaron progresivamente las estructuras sintácticas necesarias para representar, dentro de la tabla de productos, la descripción, el código identificador, el valor unitario y la cantidad seleccionada de cada artículo, así como la funcionalidad que posibilita la eliminación de un producto previamente registrado en caso de que el usuario decida no adquirirlo.

## Objetivos

El objetivo general consiste en que los estudiantes implementen la funcionalidad del sistema empleando estructuras de datos tipo vector (arreglos) para el almacenamiento y la manipulación de los productos incorporados a la factura, así como documentar el funcionamiento del sistema desarrollado mediante HTML, CSS y JavaScript, describiendo su estructura, sus características y el proceso de cálculo implementado, a través del desarrollo de un sistema de facturación web que complemente dinámicamente la tabla de productos.

### Objetivos específicos

- Explicar la estructura de la interfaz gráfica del sistema.
- Describir el funcionamiento del código JavaScript responsable de la gestión de productos y de los cálculos asociados.
- Analizar la lógica de programación empleada en el procesamiento de los datos de facturación.
- Implementar el código completo en JavaScript correspondiente a la tabla de artículos.

## Desarrollo

El sistema de facturación fue construido a partir de los archivos HTML, CSS y JavaScript, siendo este último el encargado de implementar la lógica de funcionamiento. El sistema cuenta con un arreglo que almacena los productos disponibles junto con su código, precio y descripción correspondientes. Cuando el usuario selecciona un producto, el sistema recupera automáticamente su precio y, en función de la cantidad especificada, calcula el valor total correspondiente. Se completó la implementación del código en JavaScript incorporando los códigos de los productos, su descripción, valor unitario, cantidad, total y la acción de eliminación de un producto ya registrado en la tabla de artículos.

## Preguntas

**¿Cómo se implementa la funcionalidad para agregar y mostrar los productos en la tabla de la factura?**

Se emplearon arreglos, como el denominado `facturaDetalles`, que permiten almacenar la información correspondiente a cada producto agregado a la factura: el código, la cantidad, el precio y el total. Al momento de pulsar el botón "Agregar", el sistema recupera los datos del producto seleccionado y los incorpora al arreglo mediante el método `push`. Posteriormente, se invoca la función `mostrarTabla`, la cual recorre el arreglo y genera dinámicamente el contenido de la tabla mediante la propiedad `innerHTML`, mostrando la totalidad de los datos registrados.

**¿De qué manera se realizó la eliminación de un producto y cómo se actualizan automáticamente el subtotal, el IVA y el total a pagar?**

Cada fila generada dentro de la tabla incorpora un botón "Eliminar" que ejecuta la función `eliminarProducto(index)`, la cual emplea el método `splice` para remover del arreglo `facturaDetalles` el producto seleccionado. Posteriormente, se actualiza la tabla y se recalculan de manera automática el subtotal, el IVA y el total a pagar, en función de los productos restantes.

**¿Qué funciones y estructuras de JavaScript se utilizaron para gestionar los productos y realizar los cálculos de la factura?**

El sistema utiliza estructuras de tipo arreglo (vectores) tanto para el almacenamiento de los productos disponibles como para el registro de los productos incorporados a la factura. Se emplean funciones como `cargarProductos`, `mostrarTabla` y `eliminarProducto`, orientadas a organizar el código y facilitar su mantenimiento. Para el recorrido de los arreglos se utiliza la estructura de repetición `for`, mientras que los métodos `push` y `splice` permiten, respectivamente, agregar y eliminar elementos. Los eventos `change` y `click` posibilitan la actualización automática del precio, el total individual de cada producto, el subtotal, el IVA y el total a pagar.

## Conclusión

El propósito del desarrollo de este sistema radica en posibilitar la automatización del proceso de adquisición de productos, contribuyendo a agilizar y optimizar el respectivo procedimiento administrativo. Durante la elaboración del código se implementaron funciones específicas orientadas a la visualización dinámica de la tabla y a la eliminación de productos, con el consecuente recálculo automático de los valores correspondientes tras cada modificación efectuada. De este modo, se logró una implementación funcional que permite a los usuarios visualizar los artículos incorporados a la tabla, conocer la cantidad seleccionada de cada uno y proceder a su eliminación cuando así lo requieran.

## Autores

Alfredo Josua Cruz Chalen
