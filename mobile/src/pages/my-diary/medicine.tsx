import React, {Component, useState} from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Button, Avatar, Appbar, Divider } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';
import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import RadioButton from '../../components/radioButton';
import FabButton from '../../components/fabButton';

Icon.loadFont();
IconFeather.loadFont();

export default function Medicine({navigation}){
    var listCheckResult: any[] = [];
    
    var medicines = [{
        name: "Etambutol "
      },
      {
        name: "Isoniazida "
      },
      {
        name: "Etionamida "
      },
      {
        name: "Isoniazida "
      },
      {
        name: "Pirazinamida "
      },
      {
        name: "Isoniazida "
      },
      {
        name: "Isoniazida "
      },];
       
    medicines.map((medicine, index) => (
        listCheckResult.push( { state: useState(false) })
    ));

    return (
        <Card containerStyle={styles.card}>
            <Animated.ScrollView
             decelerationRate="fast"
             bounces={false}
             scrollToOverflowEnabled={true}
             scrollEventThrottle={1}>
            <View style={styles.medicineTitleContent}>
              <Text style={styles.titleMedicine}>
                  Medicamentos
              </Text>
              <FabButton 
                  style={{ fontSize: 5, left: 75, top: 5}} 
              />
            </View>
            <Divider style={styles.divider}/>
                {
                    medicines.map((medicine, index) => {
                        let result = () => {listCheckResult[index].state[0] ? listCheckResult[index].state[1](false) : listCheckResult[index].state[1](true)};
                        return(
                            <View style={styles.option}>
                                <RadioButton checked={listCheckResult[index].state[0]} onPress={result}/>
                                <Text style={styles.optionName}>{medicine.name}</Text>
                            </View>
                        )
                    })
                }
            </Animated.ScrollView>
        </Card>
    );
};

const styles = StyleSheet.create({
    divider:{
        height: 3,
        marginBottom: 20,
        marginTop: 20,
    },
    component:{
        padding: 8,
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    checkboxText:{
        alignSelf: 'center',
        marginRight: 70,
        justifyContent: 'flex-start',
    },
    checkbox:{
        position:'absolute',
        alignSelf:'flex-end',
    },
    checkboxList:{
        borderColor: '#A9A9A9',
        borderWidth: 0.5,
        marginHorizontal: 20,
    },
    diaryText:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameList:{
        marginHorizontal: 20,
        backgroundColor:'#7B68EE',
        alignItems: 'flex-start',
    },
    nameListText:{
        fontSize: 15,
    },
    option:{
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    options:{
        marginTop: 40,
    },
    screen:{
        backgroundColor:'#fff', 
        flex: 1,
    },

    item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: 'row',
        marginTop: 30,
     },
     itemIn: {
         marginLeft: 20
     },
     itemOut: {
        alignSelf: 'flex-end',
        marginRight: 20
     },
     balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
     },
     arrowContainer: {
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         zIndex: -1,
         flex: 1
     },
     arrowLeftContainer: {
         justifyContent: 'flex-end',
         alignItems: 'flex-start'
     },
    
     arrowRightContainer: {
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
     },
    
     arrowLeft: {
         left: moderateScale(-6, 0.5),
     },
    
     arrowRight: {
         right:moderateScale(-6, 0.5),
     },
     avatarBot: {
         marginTop: 20,
         marginRight: 15,
     },
     message: {
        marginTop: 15,
        alignSelf: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
     },
     textMessage: {
        paddingTop: 5, 
        color: 'white', 
        fontSize: 15, 
        fontWeight: 'bold', 
        fontStyle: 'normal', 
        fontFamily: 'Arial'
     },


     card:{
        height: 430,
        marginTop: 20,
        borderRadius: 20
    },
    titleMedicine:{
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: 10,
    },
    divider2:{
        height: 3,
        marginBottom: 20,
        marginTop: 20,
    },
    optionName:{
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: 20,
        marginLeft: 20
    },
    medicineTitleContent:{
        flexDirection:'row', 
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
