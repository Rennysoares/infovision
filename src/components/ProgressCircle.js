import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Circle } from 'react-native-svg';
import Svg from 'react-native-svg';

export default function ProgressCircle({title, progress}){
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);
  
    return (
      <View style={styles.circleelements}>
        <Svg height={2 * radius} width={2 * radius}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            strokeWidth={strokeWidth}
            stroke="#ddd"
            fill="transparent"
          />
          <View style={styles.viewCircle}>
            <Text style={styles.textCircle}>{title}</Text>
            <Text style={styles.textCircle}>{progress*100}%</Text>
          </View> 
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            strokeWidth={strokeWidth}
            stroke="#A020F0"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </Svg>
      </View>
    );
  };

const styles = StyleSheet.create({
    circleelements:{
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
        position:'relative'
    },
    viewCircle:{
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems:'center'
    },
    textCircle:{
        color: 'rgb(255, 255, 255)'
    }, 
})