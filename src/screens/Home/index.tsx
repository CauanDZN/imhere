import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Já existe um participante com esse mesmo nome.")
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  };

  function handleParticipantRemove(){
    console.log("Você pressionou o botão de remover.")
  };

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item}
              onRemove={handleParticipantRemove}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda. Adicione participantes.
          </Text>
        )}
      />


    </View>
  );
}