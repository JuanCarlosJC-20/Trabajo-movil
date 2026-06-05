import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface Item {
  id: string;
  title: string;
  description: string;
}

export default function ScrollLoadingScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    // Cargar datos iniciales
    loadMoreItems();
  }, []);

  const loadMoreItems = () => {
    // Simular un delay de carga
    setTimeout(() => {
      const newItems: Item[] = Array.from({ length: 10 }, (_, i) => ({
        id: `${items.length + i}`,
        title: `Elemento ${items.length + i + 1}`,
        description: `Este es el elemento número ${items.length + i + 1} de la lista`,
      }));

      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
      setRefreshing(false);
    }, 1000);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setItems([]);
    setTimeout(() => {
      const newItems: Item[] = Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        title: `Elemento ${i + 1}`,
        description: `Este es el elemento número ${i + 1} de la lista`,
      }));
      setItems(newItems);
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
      <ThemedText style={styles.itemDescription}>{item.description}</ThemedText>
    </View>
  );

  const renderFooter = () => {
    if (!loading && items.length > 0) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="large" color="#4F46E5" />
          <ThemedText style={styles.footerText}>
            Cargando más elementos...
          </ThemedText>
        </View>
      );
    }
    return null;
  };

  const handleEndReached = () => {
    if (!loading) {
      setLoading(true);
      loadMoreItems();
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Parte 5: Scroll Loading
      </ThemedText>

      {loading && items.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4F46E5" />
          <ThemedText style={styles.loadingText}>
            Cargando elementos...
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#DC2626',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
  itemContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#e5469d',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});
