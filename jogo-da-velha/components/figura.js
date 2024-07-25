import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Figura({ vetor, posicao, clicado }) {
    const getIcon = () => {
        if (vetor[posicao] !== 0) {
            return vetor[posicao] ? "cross" : "circle";
        }
        return "pencil";
    };

    const winGame = (number) => {
        if (
            // Linhas iguais
            (array[0] === array[number] && array[1] === array[number] && array[2] === array[number])
            || (array[0] === array[number] && array[1] === array[number] && array[2] === array[number])
            || (array[0] === array[number] && array[1] === array[number] && array[2] === array[number])

            // Colunas iguais
            || (array[0] === array[number] && array[3] === array[number] && array[6] === array[number])
            || (array[1] === array[number] && array[4] === array[number] && array[7] === array[number])
            || (array[2] === array[number] && array[5] === array[number] && array[8] === array[number])
            
            // Diagonais iguais
            || (array[0] === array[number] && array[4] === array[number] && array[8] === array[number])
            || (array[2] === array[number] && array[4] === array[number] && array[6] === array[number])
            
        ){

        }
    }

    return (
        <TouchableOpacity onPress={clicado}>
            <Entypo name={getIcon()} size={80} color="#000" />
        </TouchableOpacity>
    )
}