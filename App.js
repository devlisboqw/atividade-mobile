import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

function Formulario({ titulo, descricao }) {
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const enviar = () => {
    if (mensagem.trim() !== '') {
      setEnviado(true);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{titulo}</Text>

      <Text style={styles.description}>
        {descricao}
      </Text>

      <TextInput
        style={styles.textArea}
        placeholder="Digite sua mensagem..."
        multiline={true}
        maxLength={200}
        value={mensagem}
        onChangeText={(texto) => {
          setMensagem(texto);
          setEnviado(false);
        }}
      />

      <Text style={styles.counter}>
        {mensagem.length}/200 caracteres
      </Text>

      <TouchableOpacity
        style={styles.sendButton}
        onPress={enviar}
      >
        <Text style={styles.sendButtonText}>
          Enviar
        </Text>
      </TouchableOpacity>

      {enviado && (
        <Text style={styles.success}>
          Enviado com sucesso!
        </Text>
      )}
    </View>
  );
}

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tela, setTela] = useState('inicio');

  const abrirTela = (nomeTela) => {
    setTela(nomeTela);
    setMenuAberto(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuAberto(!menuAberto)}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Minha Faculdade
        </Text>
      </View>

      {menuAberto && (
        <View style={styles.menu}>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => abrirTela('inicio')}
          >
            <Text style={styles.menuText}>
              Início
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => abrirTela('disciplinas')}
          >
            <Text style={styles.menuText}>
              Disciplinas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => abrirTela('secretaria')}
          >
            <Text style={styles.menuText}>
              Secretaria
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => abrirTela('financeiro')}
          >
            <Text style={styles.menuText}>
              Financeiro
            </Text>
          </TouchableOpacity>

        </View>
      )}

      <ScrollView contentContainerStyle={styles.content}>

        {tela === 'inicio' && (
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>
              Seja bem-vindo(a)!
            </Text>
          </View>
        )}

        {tela === 'disciplinas' && (
          <View style={styles.screen}>

            <Text style={styles.title}>
              Disciplinas
            </Text>

            <Text style={styles.course}>
              Curso: Sistemas de Informação
            </Text>

            <Text style={styles.semester}>
              1º Semestre
            </Text>

            <Text style={styles.subject}>
              • Lógica de Programação
            </Text>

            <Text style={styles.subject}>
              • Matemática Aplicada
            </Text>

            <Text style={styles.subject}>
              • Fundamentos de Computação
            </Text>

            <Text style={styles.semester}>
              2º Semestre
            </Text>

            <Text style={styles.subject}>
              • Programação Orientada a Objetos
            </Text>

            <Text style={styles.subject}>
              • Banco de Dados
            </Text>

            <Text style={styles.subject}>
              • Engenharia de Software
            </Text>

            <Text style={styles.semester}>
              3º Semestre
            </Text>

            <Text style={styles.subject}>
              • Desenvolvimento Web
            </Text>

            <Text style={styles.subject}>
              • Estrutura de Dados
            </Text>

            <Text style={styles.subject}>
              • Sistemas Operacionais
            </Text>

            <Text style={styles.semester}>
              4º Semestre
            </Text>

            <Text style={styles.subject}>
              • Desenvolvimento Mobile
            </Text>

            <Text style={styles.subject}>
              • Redes de Computadores
            </Text>

            <Text style={styles.subject}>
              • Segurança da Informação
            </Text>

          </View>
        )}

        {tela === 'secretaria' && (
          <Formulario
            titulo="Secretaria"
            descricao="Digite sua solicitação para a Secretaria:"
          />
        )}

        {tela === 'financeiro' && (
          <Formulario
            titulo="Financeiro"
            descricao="Digite sua solicitação para o setor Financeiro:"
          />
        )}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    height: 65,
    backgroundColor: '#1e3a5f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  menuButton: {
    marginRight: 15,
  },

  menuIcon: {
    fontSize: 30,
    color: '#fff',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  menu: {
    position: 'absolute',
    top: 65,
    left: 0,
    width: 230,
    backgroundColor: '#fff',
    zIndex: 10,
    elevation: 5,
  },

  menuItem: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  menuText: {
    fontSize: 17,
  },

  content: {
    flexGrow: 1,
  },

  welcome: {
    flex: 1,
    minHeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a5f',
  },

  screen: {
    padding: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e3a5f',
  },

  course: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  semester: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },

  subject: {
    fontSize: 16,
    marginBottom: 7,
  },

  description: {
    fontSize: 16,
    marginBottom: 15,
  },

  textArea: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    height: 160,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
  },

  counter: {
    textAlign: 'right',
    marginTop: 5,
    color: '#666',
  },

  sendButton: {
    backgroundColor: '#1e3a5f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },

  sendButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  success: {
    color: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

});
