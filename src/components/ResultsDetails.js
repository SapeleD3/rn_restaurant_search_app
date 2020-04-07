import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const ResultsDetails = ({result}) => {
  return (
    <View style={styles.container}>
      {result.name ? (
        <>
          <Image style={styles.image} source={{uri: result.featured_image}} />
          <Text style={styles.name}>{result.name}</Text>
          <Text>
            {result.user_rating.aggregate_rating} Star,{' '}
            {result.all_reviews_count} Reviews
          </Text>
        </>
      ) : (
        <Text>None</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetails;
