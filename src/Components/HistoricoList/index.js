import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Tipo, IconView, TipoText, ValorText} from './styles';

export default function HistoricoList({ data, deleteItem }) {
 return (
    <TouchableWithoutFeedback onLongPress={ () => deleteItem(data) }>
      <Container>
          <Tipo>
                <IconView tipo={data.tipo}>
                    <Feather 
                    name={ data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                    color="#fff" 
                    size={20} />
                    <TipoText>{data.tipo}</TipoText>
                </IconView>
          </Tipo>
          <ValorText>R$ {data.valor} </ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}