import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styled from 'styled-components';
import Developed from '../../components/developed';

const Dot = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: '#33fefe';
`;

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View></View> */}
      <View>
        <Text>
          The Coopbank with a total asset of more than 81.54 ETB Billion (As of
          June, 2021) . The bank has more than 450 branch networks, 7.3 million
          account holders, and has created a job opportunity for about 8,000
          individuals.
        </Text>
      </View>
      <View>
        <Text style={styles.textTitle}>Vision </Text>
        <Text>To be the leading private bank in Ethiopia by 2025.</Text>
      </View>
      <View>
        <Text style={styles.textTitle}>Mission </Text>
        <Text>
          We root our foundation in communities to provide banking solutions
          that create greater customer experience with emphasis to cooperatives
          and agro-based businesses through proper use of human resource and
          up-to-date technologies to maximize stakeholders’ value.
        </Text>
      </View>
      <View>
        <Text style={styles.textTitle}>Core Values</Text>
        <View>
          <Text>
            The following set of values will serve to guide the words and
            actions of all our employees;
          </Text>
          <View style={styles.lists}>
            <Text>{'=> '}Integrity </Text>
            <Text>{'=> '}Customer Satisfaction</Text>
            <Text>{'=> '}Learning Organization</Text>
            <Text>{'=> '}Teamwork</Text>
            <Text>{'=> '}Cost Consciousness</Text>
            <Text>{'=> '}Concern for Community</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Developed />
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 20,
    color: '#34abeb',
    fontWeight: '500',
  },
  lists: {
    marginTop: 2,
    marginLeft: 20,
  },
});
