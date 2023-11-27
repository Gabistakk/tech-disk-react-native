import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { epilogueFont, interFont } from "../assets/fonts/fontsExport";
import Lupa from "../assets/svg/crudFunc/lupa";
import CardServices from "../components/crudServices/CardServices";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/handleAuth";
import { IP } from "../utils/env";
import { Calendar } from "react-native-calendars";
import Toast from "react-native-toast-message";
import { toastConfig } from "../utils/Toast";
import DropDownPicker from "react-native-dropdown-picker";

function CrudServices({ navigation }) {
  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();

  const [data, setData] = useState([]);

  const [loaded, setLoaded] = useState(false);

  const [search, setSearch] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [isSet, setIsSet] = useState(false);
  const [authData, setAuthData] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isEmpregado, setIsEmpregado] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [empregadoId, setEmpregadoId] = useState("");
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  useEffect(() => {
    async function getAuth() {
      const [returnAuthData, authIsLogged, authIsEmpregado] = await useAuth();
      setAuthData(returnAuthData);
      setIsLogged(authIsLogged);
      setIsEmpregado(authIsEmpregado);
    }
    getAuth();
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(`http://${IP}:3000/servico`);
      setData(res.data);
      setLoaded(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  const handlePressModal = async (servicoId, empregadoId, clienteId) => {
    console.log(servicoId, empregadoId, clienteId);
    setServiceId(servicoId);
    setEmpregadoId(empregadoId);
    setClienteId(clienteId);
    setModalVisible(true);
  };

  const handleSubmit = async () => {
    if (selectedDay != "") {
      setSecondModalVisible(true)
    } else {
      Toast.show({
        type: "error",
        text1: "Erro.",
        text2: "Selecione um serviço e Data.",
      });
    }
  };

  const handleBuy = async () => {
    try {
      const res = await axios.post(`http://${IP}:3000/ordem-servico`, {
        clienteId: clienteId,
        empregadoId: empregadoId,
        servicoId: serviceId,
        data: formatDate(selectedDay),
      });

      setModalVisible(false);
      setSecondModalVisible(false)

      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2: `Serviço Agendado para o dia ${formatDate(selectedDay)}`,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  function formatDate(date) {
    var date = date.split("-");
    var year = date[0];
    var month = date[1];
    var day = date[2];
    return `${day}/${month}/${year}`;
  }
  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <View className="h-full w-screen flex flex-col items-center pt-5">
      <View className="flex flex-row items-center">
        <TextInput
          style={styles.shadowInput}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Pesquise aqui!"
        />
        <Lupa />
      </View>
      <ScrollView>
        <Text
          style={{
            fontFamily: "InterBold",
            fontSize: 20,
            textAlign: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Resultados da Pesquisa {"\n"}Serviços
        </Text>

        {loaded &&
          data
            .filter(
              (servico) =>
                servico.nome.toUpperCase().includes(search.toUpperCase()) ||
                servico.empregado.nome
                  .toUpperCase()
                  .includes(search.toUpperCase()) ||
                servico.detalhesContrato
                  .toUpperCase()
                  .includes(search.toUpperCase())
            )
            .map((servico) => {
              return (
                <Pressable
                  onPress={() =>
                    handlePressModal(
                      servico.id,
                      servico.empregado.id,
                      authData.id
                    )
                  }
                >
                  <CardServices
                    key={servico.id}
                    nome={servico.nome}
                    garantia={servico.garantia}
                    detalhes={servico.detalhesContrato}
                    empregado={servico.empregado.nome.split(" ")}
                  />
                </Pressable>
              );
            })}
      </ScrollView>
      <Modal
        elevation={5}
        style={{ elevation: 5 }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className="text-3xl mb-3 mt-3 text-center">
              Selecione uma data:
            </Text>

            <Calendar
              onDayPress={(day) => {
                setSelectedDay(day.dateString);
              }}
              markedDates={{
                [selectedDay]: { selected: true, selectedDotColor: "orange" },
              }}
              theme={{
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#4B2785",
                selectedDayBackgroundColor: "#4B2785",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#4B2785",
                dayTextColor: "#2d4150",
                arrowColor: "#4B2785",
              }}
            />
            <View className="flex flex-row items-center gap-5">
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Modal
          elevation={5}
          style={{ elevation: 5 }}
          animationType="slide"
          transparent={true}
          visible={secondModalVisible}
          onRequestClose={() => {
            setSecondModalVisible(!secondModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  fontFamily: "InterSemiBold",
                  fontSize: 30,
                  color: "#34567E",
                }}
              >
                PAGAMENTO
              </Text>

              <Text className="text-xl">Número do cartão:</Text>
              <TextInput
              keyboardType="numeric"
                style={styles.shadowInput}
                placeholder="99999-9999-9999"
              />
              <View className="flex flex-row w-96 justify-center items-center">
                <View>
                  <Text className="text-xl ml-10">CVV:</Text>
                  <TextInput
              keyboardType="numeric"
              style={[styles.shadowInput, { width: 150 }]}
                    placeholder="***"
                  />
                </View>

                <View>
                  <Text className="text-xl ml-10">Validade:</Text>
                  <TextInput
              keyboardType="numeric"
              style={[styles.shadowInput, { width: 150 }]}
                    placeholder="12/12"
                  />
                </View>
              </View>

              <Text className="text-xl">Nome Impresso:</Text>
              <TextInput
                style={styles.shadowInput}
                onChangeText={(text) => {}}
                placeholder="Nome impresso no cartão"
              />

              <View className="flex flex-row items-center gap-5">
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setSecondModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonConfirm]}
                  onPress={() => {
                    handleBuy();
                  }}
                >
                  <Text style={styles.textStyle}>Confirmar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </Modal>
      <Toast config={toastConfig} position="bottom" bottomOffset={150} />
    </View>
  );
}
const styles = StyleSheet.create({
  shadowInput: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 0.3,
    height: 70,
    fontSize: 20,
    width: 300,
    margin: 12,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#DD0004",
  },
  buttonConfirm: {
    backgroundColor: "#53389E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  modalText: {
    textAlign: "center",
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    Width: 350,
    borderRadius: 20.0,
    backgroundColor: "#8254CD",
  },
});

export default CrudServices;
