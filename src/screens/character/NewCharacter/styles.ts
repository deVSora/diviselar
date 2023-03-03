import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.colors.primary};
`

export const ScrollContainer = styled.ScrollView`
    padding-left: 20px;
    padding-right: 20px;
`

export const LineContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CharImg = styled.Image`
    margin-top: 10px;
    width: 200px;
    height: 250px;
    align-self: center;
    border: 2px solid ${({theme})=> theme.colors.secondary};
    border-radius: 5px;
`

export const Line = styled.View`
    width: 80px;
    align-self: center;
    border: 2px solid ${({theme}) => theme.colors.fourth};
    margin-top: 10px; 
    border-radius: 5px;
`

export const EndContainer = styled.View`
    background-color: transparent;
    height: 20px;
`