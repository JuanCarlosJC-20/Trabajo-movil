# 📱 Ejercicios React Native - Guía de Uso

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar la aplicación
```bash
# Para iOS
npm run ios

# Para Android
npm run android

# Para Web
npm run web

# O usar Expo directamente
expo start
```

---

## 📋 Descripción de los Ejercicios

### 🔘 Parte 1: Botones (Nivel Básico)
**Ubicación:** `app/(tabs)/buttons.tsx`

Demuestra:
- Uso de componentes `TouchableOpacity`
- Eventos `onPress`
- Manejo de estado con `useState`
- Cambio dinámico de estilos y texto

**Funcionalidad:**
- 3 botones interactivos
- El primer botón cambia de color al presionarlo
- Cambio de texto dinámico

---

### 📝 Parte 2: Modal/Dialog (Nivel Básico)
**Ubicación:** `app/(tabs)/modal.tsx`

Demuestra:
- Componente `Modal` de React Native
- Apertura y cierre de modales
- Contenido personalizado dentro del modal
- Diseño con fondo oscuro semi-transparente

**Funcionalidad:**
- Botón para abrir el modal
- Diálogo con mensajes informativos
- Botones de aceptar y cancelar
- Cierre automático del modal

---

### 🎯 Parte 3: Dropdown/Picker (Nivel Básico-Intermedio)
**Ubicación:** `app/(tabs)/dropdown.tsx`

Demuestra:
- Componente `Picker` (compatible iOS y Android)
- Manejo de selecciones
- Visualización de opciones
- Descripciones dinámicas

**Funcionalidad:**
- Picker con múltiples opciones
- Muestra el valor seleccionado
- Descripción contextual
- Botones alternativos para seleccionar opciones

---

### 🧮 Parte 4: Calculadora Básica (Nivel Intermedio)
**Ubicación:** `app/(tabs)/calculator.tsx`

Demuestra:
- Manejo complejo de estado
- Operaciones matemáticas
- Interfaz de usuario similar a calculadora real
- Validación de entrada

**Funcionalidad:**
- Suma, resta, multiplicación y división
- Soporte para números decimales
- Botón de limpiar (C)
- Display dinámico
- Operaciones en tiempo real

**Operaciones soportadas:**
- ➕ Suma
- ➖ Resta
- ✖️ Multiplicación
- ➗ División

---

### 📜 Parte 5: Scroll Loading (Nivel Intermedio)
**Ubicación:** `app/(tabs)/scrollloading.tsx`

Demuestra:
- Componente `FlatList`
- Carga dinámica de elementos
- Indicador de carga (`ActivityIndicator`)
- Pull-to-refresh
- Validación de fin de lista

**Funcionalidad:**
- Lista infinita de elementos
- Carga automática al llegar al final
- Indicador de carga mientras se cargan datos
- Pull-to-refresh para recargar la lista
- Diseño atractivo con bordes de color

---

## 🎨 Estructura del Código

### Componentes Reutilizables Usados
- `ThemedView` - Vista con tema automático
- `ThemedText` - Texto adaptable al tema
- `TouchableOpacity` - Botones interactivos
- `Modal` - Diálogos modales
- `FlatList` - Listas eficientes
- `Picker` - Selector de opciones

### Estilos
Todos los componentes usan `StyleSheet` de React Native para:
- Estilos optimizados
- Colores consistentes
- Responsive design

---

## 🎯 Colores Principales

- **Primario:** `#4F46E5` (Púrpura)
- **Éxito:** `#10B981` (Verde)
- **Peligro:** `#EF4444` (Rojo)
- **Advertencia:** `#DC2626` (Rojo oscuro)
- **Fondo claro:** `#F3F4F6` (Gris claro)
- **Texto oscuro:** `#1F2937` (Gris oscuro)

---

## 📚 Conceptos Clave Aprendidos

✅ Manejo de estado con `useState`
✅ Componentes interactivos
✅ Eventos touch (onPress)
✅ Renderizado condicional
✅ Listas y FlatList
✅ Modales y diálogos
✅ Pickers/Dropdowns multiplataforma
✅ Estilos con StyleSheet
✅ Componentes reutilizables

---

## 🔧 Requisitos

- Node.js 16+
- Expo CLI
- React Native
- TypeScript

---

## 📱 Compatibilidad

✅ iOS
✅ Android
✅ Web (limitado)

---

## 💡 Notas Adicionales

- Todos los componentes están optimizados para rendimiento
- El código está comentado para facilitar la comprensión
- Los estilos son modulares y reutilizables
- La aplicación es responsive

---

## 🚀 Próximos Pasos

Para la Parte 6 (Navegación), puedes agregar:
- Bottom Tabs Navigation
- Stack Navigation
- Drawer Navigation
- Pantallas adicionales (Home, Perfil, Configuración, Detalle)

---

Desarrollado con ❤️ usando React Native y Expo
