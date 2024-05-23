import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDetail: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const MyDocument = ({ selectedDeveloper, calendarEvents }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.title}>Developer Summary</Text>
        <Text style={styles.section}>Name: {selectedDeveloper?.Name || 'N/A'}</Text>
        {calendarEvents.length > 0 ? (
          calendarEvents.map((event, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.eventDetail}>Project Name: {event.projectName}</Text>
              <Text style={styles.eventDetail}>Hours: {event.title.replace('Hours: ', '')}</Text>
              <Text style={styles.eventDetail}>Actual Hours: {event.actualHours}</Text>
              <Text style={styles.eventDetail}>Date: {moment(event.start).format('MMMM Do YYYY, h:mm:ss a')}</Text>
            </View>
          ))
        ) : (
          <Text>No events to display</Text>
        )}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
