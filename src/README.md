# Arquitectura del proyecto

Este proyecto usa una arquitectura simple por features.

- app/: contiene solo rutas y configuracion de navegacion de Expo Router.
- src/features/: contiene las pantallas reales organizadas por funcionalidad.
- src/shared/: espacio para componentes, hooks, constantes o utilidades reutilizables nuevas.

Flujo recomendado:

1. Crear o mantener la pantalla real dentro de src/features/nombre-feature/.
2. Dejar en app/ solo un archivo pequeno que exporte esa pantalla.
3. Poner codigo compartido en src/shared/ cuando se reutilice en mas de una feature.
