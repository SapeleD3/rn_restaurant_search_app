import {FlatList, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import ResultsDetails from '../components/ResultsDetails';

const ResultList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{marginLeft: 15, marginBottom: 5}}>
        Results: {results.length}
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.restaurant.id}
        renderItem={({item}) => {
          return <ResultsDetails result={item.restaurant} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultList;
