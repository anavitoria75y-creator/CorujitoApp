import React, { useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, Pressable, StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('splash'); 
  const [categoryTitle, setCategoryTitle] = useState('');

  const openCategory = (title) => {
    setCategoryTitle(title);
    setScreen('category');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* --- TELA DE SPLASH COM IMAGEM DE FUNDO --- */}
      {screen === 'splash' && (
        <ImageBackground
          source={require('./assets/corujito_img.png')}
          style={styles.fullImage}
          resizeMode="cover"
        >
          <View style={styles.splashContent}>
            <Pressable style={styles.startButton} onPress={() => setScreen('home')}>
              <Text style={styles.startText}>CORUJITO</Text>
            </Pressable>
          </View>
        </ImageBackground>
      )}

      {/* --- TELA HOME --- */}
      {screen === 'home' && (
        <View style={styles.container}>
          <View style={styles.topDecor} />

          <ScrollView contentContainerStyle={styles.grid}>
            <Pressable style={styles.tile} onPress={() => openCategory('Memorização')}>
              <Text style={styles.tileText}>Memorização</Text>
            </Pressable>

            <Pressable style={styles.tile} onPress={() => openCategory('Organização')}>
              <Text style={styles.tileText}>Organização</Text>
            </Pressable>

            <Pressable style={styles.tile} onPress={() => openCategory('Motivação')}>
              <Text style={styles.tileText}>Motivação</Text>
            </Pressable>

            <Pressable style={styles.tile} onPress={() => openCategory('Técnicas de estudos')}>
              <Text style={styles.tileText}>Técnicas de estudos</Text>
            </Pressable>
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>CORUJITO</Text>
          </View>
        </View>
      )}

      {/* --- TELA CATEGORY --- */}
      {screen === 'category' && (
        <View style={styles.container}>
          <View style={styles.topRow}>
            <Pressable onPress={() => setScreen('home')} style={styles.back}>
              <Text style={styles.backText}>←</Text>
            </Pressable>
            <Text style={styles.categoryTitle}>{categoryTitle}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.placeholder}>Aqui vai o conteúdo de {categoryTitle}.</Text>
            <Text style={styles.small}></Text>
          </View>

          <View style={styles.bottomDecor} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F7E6CE' },

  /* --- SPLASH --- */
  fullImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  splashContent: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },

  startButton: { paddingVertical: 8, paddingHorizontal: 40, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
  startText: { fontSize: 18, letterSpacing: 4, color: '#6b4a2a', fontWeight: '700' },

  /* --- HOME --- */
  container: { flex: 1, alignItems: 'center', backgroundColor: '#F7E6CE' },

  topDecor: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(200,170,130,0.15)',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },

  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 30,
  },

  tile: {
    width: '47%',
    paddingVertical: 22,
    marginVertical: 10,
    borderRadius: 14,
    backgroundColor: '#E4D4B9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: { color: '#6b4a2a', fontWeight: '600', textAlign: 'center' },

  footer: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(200,170,130,0.12)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  footerText: { color: '#6b4a2a', fontWeight: '700', letterSpacing: 4 },

  /* --- CATEGORY --- */
  topRow: { width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingTop: 12 },
  back: { padding: 8 },
  backText: { fontSize: 22, color: '#6b4a2a' },
  categoryTitle: { marginLeft: 8, fontSize: 16, color: '#6b4a2a', fontWeight: '600' },

  content: { flex: 1, width: '100%', padding: 20 },
  placeholder: { color: '#7b5a3a', fontSize: 16 },
  small: { marginTop: 12, color: '#7b5a3a' },

  bottomDecor: {
    height: 70,
    width: '100%',
    backgroundColor: 'rgba(200,170,130,0.12)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
});
