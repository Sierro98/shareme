import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignIn() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-bgPrimary">
      <View className="absolute top-16 left-4 z-10">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 40,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="w-full items-center">
              <Text className="text-4xl font-bold text-tertiary mb-10">Create Account</Text>

              {/* Inputs Container */}
              <View className="w-full">
                <TextInput placeholder="Username" className="bg-white p-4 rounded-full mb-4 text-lg" value={user} onChangeText={setUser} />
                <TextInput placeholder="Email" className="bg-white p-4 rounded-full mb-4 text-lg" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                <TextInput placeholder="Name" className="bg-white p-4 rounded-full mb-4 text-lg" value={name} onChangeText={setName} />
                <TextInput placeholder="Surname" className="bg-white p-4 rounded-full mb-4 text-lg" value={surname} onChangeText={setSurname} />
                <TouchableOpacity
                  onPress={() => {
                    setTempDate(birthDate || new Date());
                    setShowDatePicker(true);
                  }}
                  className="bg-white p-4 rounded-full mb-4 w-full flex-row justify-between items-center"
                >
                  <Text className={`text-lg ${birthDate ? 'text-black' : 'text-gray-500'}`}>
                    {birthDate ? birthDate.toLocaleDateString() : 'Birth Date'}
                  </Text>
                  <Ionicons name="calendar-outline" size={24} color="gray" />
                </TouchableOpacity>

                {showDatePicker && Platform.OS === 'android' && (
                  <DateTimePicker
                    value={birthDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(false);
                      if (selectedDate) {
                        setBirthDate(selectedDate);
                      }
                    }}
                  />
                )}

                {showDatePicker && Platform.OS === 'ios' && (
                  <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showDatePicker}
                    onRequestClose={() => setShowDatePicker(false)}
                  >
                    <TouchableOpacity
                      className="flex-1"
                      activeOpacity={1}
                      onPressOut={() => setShowDatePicker(false)}
                    >
                      <View className="flex-1 justify-end">
                        <TouchableWithoutFeedback>
                          <View className="bg-white rounded-t-lg">
                            <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
                              <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                                <Text className="text-lg text-blue-500">Cancel</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  setBirthDate(tempDate);
                                  setShowDatePicker(false);
                                }}
                              >
                                <Text className="text-lg text-blue-500 font-bold">Done</Text>
                              </TouchableOpacity>
                            </View>
                            <DateTimePicker
                              value={tempDate}
                              mode="date"
                              display="spinner"
                              onChange={(event, date) => date && setTempDate(date)}
                              textColor="black"
                            />
                          </View>
                        </TouchableWithoutFeedback>
                      </View>
                    </TouchableOpacity>
                  </Modal>
                )}
                
                <View className="flex-row items-center bg-white rounded-full mb-4 pr-4">
                  <TextInput placeholder="Password" className="flex-1 p-4 text-lg" secureTextEntry={!isPasswordVisible} value={password} onChangeText={setPassword} />
                  <TouchableOpacity onPress={() => setIsPasswordVisible(prev => !prev)}>
                    <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                  </TouchableOpacity>
                </View>
                
                <View className="flex-row items-center bg-white rounded-full mb-4 pr-4">
                  <TextInput placeholder="Confirm Password" className="flex-1 p-4 text-lg" secureTextEntry={!isConfirmPasswordVisible} value={confirmPassword} onChangeText={setConfirmPassword} />
                  <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(prev => !prev)}>
                    <Ionicons name={isConfirmPasswordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity className="bg-accent p-4 rounded-full items-center mb-4">
                  <Text className="text-white text-lg font-bold">Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity className="items-center flex-row justify-center" onPress={() => router.push("/login")}>
                  <Text className="text-lg text-tBase pr-2">Already have an account?</Text>
                  <Text className="text-accent font-bold">Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
