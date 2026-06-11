import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//importa las pantallas
import ButtonsScreen from "./buttons";
import CalculatorScreen from "./calculator";
import DropdownScreen from "./dropdown";
import HomeScreen from "./index";
import ModalScreen from "./modal";
import ScrollLoadingScreen from "./scrollloading";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator - Muestra todas las pantallas como pestañas
function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "HomeTab") {
            iconName = focused ? "bug" : "home-outline";
          } else if (route.name === "ButtonsTab") {
            iconName = focused ? "finger-print" : "finger-print-outline";
          } else if (route.name === "ModalTab") {
            iconName = focused ? "alert-circle" : "alert-circle-outline";
          } else if (route.name === "DropdownTab") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "CalculatorTab") {
            iconName = focused ? "calculator" : "calculator-outline";
          } else if (route.name === "ScrollTab") {
            iconName = focused ? "swap-vertical" : "swap-vertical-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ddd",
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
          headerTitle: "Ejercicios React Native",
        }}
      />
      <Tab.Screen
        name="ButtonsTab"
        component={ButtonsScreen}
        options={{
          title: "Botones",
          tabBarLabel: "Botones",
          headerTitle: "Parte 1: Botones",
        }}
      />
      <Tab.Screen
        name="ModalTab"
        component={ModalScreen}
        options={{
          title: "Modal",
          tabBarLabel: "Modal",
          headerTitle: "Parte 2: Modal",
        }}
      />
      <Tab.Screen
        name="DropdownTab"
        component={DropdownScreen}
        options={{
          title: "Dropdown",
          tabBarLabel: "Dropdown",
          headerTitle: "Parte 3: Dropdown",
        }}
      />
      <Tab.Screen
        name="CalculatorTab"
        component={CalculatorScreen}
        options={{
          title: "Calculadora",
          tabBarLabel: "Calc",
          headerTitle: "Parte 4: Calculadora",
        }}
      />
      <Tab.Screen
        name="ScrollTab"
        component={ScrollLoadingScreen}
        options={{
          title: "Scroll",
          tabBarLabel: "Scroll",
          headerTitle: "Parte 5: Scroll Loading",
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer Navigator - Menú lateral con acceso a todas las pantallas
export default function TabsLayout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#4F46E5",
        headerStyle: {
          backgroundColor: "#f8f8f8",
        },
        drawerActiveTintColor: "#4F46E5",
        drawerInactiveTintColor: "#888",
        drawerType: "front",
        swipeEnabled: true,
      }}
    >
      <Drawer.Screen
        name="TabsGroup"
        component={TabsNavigator}
        options={{
          title: "Ejercicios React Native",
          drawerLabel: "Inicio",
          headerTitle: "Ejercicios React Native",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bug" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BotonDrawer"
        component={ButtonsScreen}
        options={{
          title: "Parte 1: Botones",
          drawerLabel: "Botones",
          headerTitle: "Parte 1: Botones",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="finger-print" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ModalDrawer"
        component={ModalScreen}
        options={{
          title: "Parte 2: Modal",
          drawerLabel: "Modal",
          headerTitle: "Parte 2: Modal",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="alert-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DropdownDrawer"
        component={DropdownScreen}
        options={{
          title: "Parte 3: Dropdown",
          drawerLabel: "Dropdown",
          headerTitle: "Parte 3: Dropdown",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="CalculatorDrawer"
        component={CalculatorScreen}
        options={{
          title: "Parte 4: Calculadora",
          drawerLabel: "Calculadora",
          headerTitle: "Parte 4: Calculadora",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ScrollDrawer"
        component={ScrollLoadingScreen}
        options={{
          title: "Parte 5: Scroll Loading",
          drawerLabel: "Scroll Loading",
          headerTitle: "Parte 5: Scroll Loading",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="swap-vertical" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
