import React, { Fragment } from 'react';
import {View, ScrollView, TouchableOpacity, Text, FlatList} from 'react-native';

import styles from './style'
import QuotationsItems from './QuotationsItems';

export default function QuotationList(props){

    const daysQuery = props.filterDay;// vamos criar uma const que vai chamar nosso  propsfilterDay

    return(

        <Fragment>
            <View style={styles.filters}>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={() => daysQuery(7)}
                >
                    <Text style={styles.textBttonQyery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>daysQuery(15)}
                >
                    <Text style={styles.textBttonQyery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>daysQuery(30)}
                >
                    <Text style={styles.textBttonQyery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>daysQuery(90)}
                >
                    <Text style={styles.textBttonQyery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>daysQuery(180)}
                >
                    <Text style={styles.textBttonQyery}>6M</Text>
                </TouchableOpacity>

            </View>

            <ScrollView style={styles.listQuotationBitcoins}>

                <FlatList 
                        data={props.listTransactions}
                        renderItem={({item})=>{
                            return <QuotationsItems
                                valor={item.valor}
                                data={item.data}
                            />
                        }}
                    />
                
            </ScrollView>



        </Fragment>
    )
}
