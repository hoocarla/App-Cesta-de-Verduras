import React from "react";  //primeira a coisa a se fazer é importar o react;
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create ({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})