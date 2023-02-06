import styled from "styled-components/native";

export const Container = styled.View`
    border: 2px solid ${({theme})=> theme.colors.third};
    margin-top: 10px;
    border-radius: 5px;
    min-width: 170px;
`