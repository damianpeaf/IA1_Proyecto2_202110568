
# Manual de Usuario

- Damián Ignacio Peña Afre 
- 202110568

Aquí tienes el manual de usuario detallado para la interfaz mostrada en la imagen del proyecto de IA:

---

## Manual de Usuario para el Proyecto 2 - IA1 - 202110568

### Descripción General
Este sistema permite cargar archivos CSV para aplicar algoritmos de aprendizaje automático, incluyendo regresión lineal, regresión polinómica y árboles de decisión. Los usuarios pueden entrenar modelos, realizar predicciones, visualizar tendencias y patrones, y ajustar parámetros específicos para cada modelo.

### Interfaz de Usuario
La interfaz se compone de las siguientes secciones:

1. **Selección de Archivo CSV o DataSet**
2. **Selección de Algoritmo de Machine Learning**
3. **Parámetros Específicos del Modelo**
4. **Botones de Acción**
5. **Resultados**

![Interfaz de Usuario](https://raw.githubusercontent.com/damianpeaf/IA1_Proyecto2_202110568/refs/heads/main/imgs/ui.png)

### Guía Paso a Paso

#### 1. Selección de Archivo CSV o DataSet
   - **Campo**: `Seleccionar archivo`
   - **Descripción**: En este campo, el usuario debe cargar el archivo CSV que contiene el conjunto de datos. El archivo debe estar en formato CSV y estructurado con las columnas correspondientes al modelo de aprendizaje automático que se desee aplicar.
   - **Instrucciones**:
     1. Haz clic en el botón **Seleccionar archivo**.
     2. Selecciona un archivo CSV desde tu dispositivo.
     3. Verifica que el nombre del archivo cargado se muestra junto a "Sin archivos seleccionados".

#### 2. Selección de Algoritmo de Machine Learning
   - **Campo**: `Seleccionar Algoritmo de Machine Learning`
   - **Descripción**: Un menú desplegable que permite al usuario seleccionar el tipo de modelo de aprendizaje automático a aplicar.
   - **Opciones Disponibles**:
     - **Regresión Lineal**: Utilizado para modelar la relación lineal entre una variable independiente y una dependiente.
     - **Regresión Polinómica**: Para modelar relaciones no lineales mediante un polinomio de grado especificado.
     - **Árbol de Decisión**: Algoritmo de clasificación o regresión basado en decisiones jerárquicas.
   - **Instrucciones**:
     1. Haz clic en el menú desplegable.
     2. Selecciona el modelo deseado (por ejemplo, "Regresión Lineal").

![Interfaz de Usuario](https://raw.githubusercontent.com/damianpeaf/IA1_Proyecto2_202110568/refs/heads/main/imgs/models.png) 


#### 3. Parámetros Específicos del Modelo
   - **Campo**: `Parámetros Específicos del Modelo`
   - **Descripción**: Permite ingresar parámetros adicionales específicos para el modelo seleccionado.
   - **Ejemplo de Uso**:
     - Si seleccionas **Regresión Polinómica**, puedes especificar el grado del polinomio en este campo. Por ejemplo, `degree=2`.
   - **Instrucciones**:
     1. Ingresa los parámetros en el formato adecuado (por ejemplo, `degree=2`).
     2. Asegúrate de que los parámetros sean correctos para el modelo seleccionado.

#### 4. Botones de Acción
   - **Botones Disponibles**:
     - **Entrenar**: Entrena el modelo seleccionado con el conjunto de datos proporcionado.
     - **Predecir**: Realiza predicciones en el conjunto de datos usando el modelo entrenado.
     - **Tendencias**: Muestra una gráfica de tendencia basada en los datos y el modelo.
     - **Patrones**: Identifica y muestra patrones relevantes en el conjunto de datos.
   - **Instrucciones**:
     1. Asegúrate de haber seleccionado el archivo, modelo y parámetros antes de usar estos botones.
     2. Haz clic en el botón de acción deseado para ejecutar la operación:
        - **Entrenar**: Entrena el modelo con el conjunto de datos. Una vez completado, se muestra una notificación de éxito.
        - **Predecir**: Genera predicciones en el conjunto de datos cargado y muestra una gráfica comparativa.
        - **Tendencias**: Muestra una gráfica de tendencias basada en los datos.
        - **Patrones**: Muestra patrones descubiertos en el conjunto de datos.

#### 5. Resultados
   - **Campo**: `Resultados`
   - **Descripción**: Muestra los resultados generados por cada acción. Esto puede incluir:
     - Parámetros y métricas del modelo entrenado.
     - Gráficos de predicción, tendencias y patrones.
   - **Instrucciones**:
     - Después de ejecutar una acción (como **Entrenar** o **Predecir**), revisa esta sección para ver los resultados. La información relevante será mostrada aquí para facilitar la interpretación de los datos.

### Ejemplo de Flujo de Trabajo

1. **Cargar un archivo CSV**: Selecciona un archivo de datos en formato CSV para cargar el dataset.
2. **Seleccionar el Modelo de Aprendizaje**: Elige el modelo deseado, como **Regresión Lineal**.
3. **Configurar Parámetros** (Opcional): Si el modelo lo requiere, ajusta los parámetros en el campo correspondiente, como `degree=2` para **Regresión Polinómica**.
4. **Entrenar el Modelo**: Haz clic en **Entrenar** para construir el modelo con los datos proporcionados.
5. **Realizar Predicciones**: Después de entrenar el modelo, usa el botón **Predecir** para ver los valores de predicción.
6. **Visualizar Tendencias y Patrones**: Utiliza los botones **Tendencias** y **Patrones** para analizar el comportamiento de los datos y obtener una visualización adicional.