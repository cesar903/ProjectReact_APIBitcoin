import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/';
import HistoryGraphic from './src/components/HistoryGraphic/';
import QuotationsList from './src/components/QuotationsList/'

function addZero(number) {

  if (number <= 9) {

    return "0" + number;

  }

  return number;

}

function url(qtdDays) {

  const date = new Date();

  const listLastDays = qtdDays;

  const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

  date.setDate(date.getDate() - listLastDays)

  const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`

}

async function getListCoins(url) {

  let response = await fetch(url);

  let returnApi = await response.json();

  let selectListQuotations = returnApi.bpi;

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    };
  })

  let data = queryCoinsList.reverse();
  //console.log(data)
  return data;

}

/*async function getPriceCoinsGraphic(url){

  let responseG = await fetch(url);

  let returnApiG = await responseG.json();

  let selectListQuotationsG = returnApiG.bpi;

  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key)=>{
      selectListQuotationsG[key]
  })
  
  let dataG = queryCoinsListG;
console.log(dataG)
  //return dataG;
}*/

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  //  console.log(dataG)
  return dataG;
}

export default function App() {

  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]); //o gráfico não pode começar vazio
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState(0);

  function priceCotation() {

    setPrice(coinsGraphicList.pop());
  }

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    });

    priceCotation();

    if (updateData) {
      setUpdateData(false);
    }

  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="light-content"
        style="auto"
      />
      <CurrentPrice lastCotation={price} />

      <HistoryGraphic infoDataGraphic={coinsGraphicList} />

      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});