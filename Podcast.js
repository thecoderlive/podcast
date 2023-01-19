import React from 'react'
import { TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const Podcast = () => (
<ScrollView style={styles.podcast} showsVerticalScrollIndicator={false}>
<Text style={styles.podcast_title}>{item.podcast_title}</Text>
<Text style={styles.about_podcast}>{item.about_podcast}</Text>
<Text style={styles.Podcast_name}>{item.Podcast_name}</Text>
<TextInput style={styles.uiresources} placeholder={'Uiresources'} />
<Text style={styles.suggestion}>{item.suggestion}</Text>
</ScrollView>
)

export default Podcast;

const styles = StyleSheet.create({
    'podcast_title': {
        'fontSize': 18,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    },
    'about_podcast': {
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginTop': 10
    },
    'Podcast_name': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginTop': 80
    },
    'uiresources': {
        'fontSize': 15,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke',
        'borderWidth': 1
    },
    'suggestion': {
        'fontSize': 14,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginTop': 220,
        'alignSelf': 'center'
    }
});