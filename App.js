import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

const addZero = (number) => {
  if(number <= 9){
    return "0" + number;
  };
  return number;
};

const url = (qtdDays) => {
  const data = new Date();
  const listLastDays = qtdDays;
  const end_date = ;
  const start_date;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="dark-content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
      <QuotationsItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
