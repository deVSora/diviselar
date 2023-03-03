import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.colors.primary};
`

export const ScrollContainer = styled.ScrollView`
    padding-left: 20px;
    padding-right: 20px;
`

export const EndContainer = styled.View`
    height: 20px;
    background-color: transparent;
`