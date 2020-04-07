import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import ResultList from '../components/ResultList';
import SeachBar from '../components/SeachBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchapi, result, errorMsg] = useResults();

  const filterResultByPrice = (price) => {
    return result.filter((resu) => resu.restaurant.price_range == price);
  };

  return (
    <View style={styles.bckg}>
      <SeachBar
        onTermSubmit={() => searchapi(term)}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text style={{margin: 15}}>We have found {result.length} results</Text>
      <ScrollView>
        <ResultList results={filterResultByPrice(1)} title="Cost Effective" />
        <ResultList results={filterResultByPrice(2)} title="Bit Pricier" />
        <ResultList results={filterResultByPrice(3)} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bckg: {
    backgroundColor: 'white',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default SearchScreen;
