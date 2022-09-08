import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home(){
  const participants = ['Cauan', 'Igor', 'Jacó', 'Pedro', 'Kauã'];

  function handleParticipantAdd(){
    console.log("Você pressionou o botão.")
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