import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const LanguageSelection = () => {
  const [selected, setSelected] = React.useState({
    english: true,
    afanOromo: false,
    amharic: false,
    chinese: false,
  });
  return (
    <View>
      <Text style={styles().textTitle}>Change Language</Text>
      <TouchableOpacity
        onPress={() =>
          setSelected({
            english: true,
            afanOromo: false,
            amharic: false,
            chinese: false,
          })
        }>
        <Text style={styles(selected.english).textSelected}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setSelected({
            english: false,
            afanOromo: true,
            amharic: false,
            chinese: false,
          })
        }>
        <Text style={styles(selected.afanOromo).textSelected}>Afan Oromo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setSelected({
            english: false,
            afanOromo: false,
            amharic: true,
            chinese: false,
          })
        }>
        <Text style={styles(selected.amharic).textSelected}>Amharic</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setSelected({
            english: false,
            afanOromo: false,
            amharic: false,
            chinese: true,
          })
        }>
        <Text style={styles(selected.chinese).textSelected}>Chinese</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (selected?: boolean) =>
  StyleSheet.create({
    textSelected: {
      color: selected ? '#34abeb' : 'black',
      borderBottomColor: selected ? '#34abeb' : 'gray',
      borderBottomWidth: 1,
      fontWeight: selected ? '900' : '500',
      fontSize: selected ? 18 : 14,
      marginBottom: 3,
    },
    textTitle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
