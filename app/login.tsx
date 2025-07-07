import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ShareMeLogo from "../assets/images/shareME_logo.svg";

export default function Login() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-bgPrimary">
      <View className="absolute top-16 left-4 z-10">
        <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.replace("/")
        }} className="p-2">
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
              <View className="mb-10">
                <ShareMeLogo className="w-[50%] h-[50%]" />
              </View>

              {/* Inputs Container */}
              <View className="w-full">
                <TextInput
                  placeholder="Email"
                  className="bg-white p-4 rounded-full mb-4 text-lg"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                <View className="flex-row items-center bg-white rounded-full mb-4 pr-4">
                  <TextInput
                    placeholder="Password"
                    className="flex-1 p-4 text-lg"
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setIsPasswordVisible((prev) => !prev)}
                  >
                    <Ionicons
                      name={isPasswordVisible ? "eye-off" : "eye"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  className="bg-accent p-4 rounded-full items-center mb-4"
                  onPress={() => { }}
                >
                  <Text className="text-white text-lg font-bold">Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="items-center flex-row justify-center"
                  onPress={() => router.push("/signin")}
                >
                  <Text className="text-lg text-tBase pr-2">
                    Don't have an account?
                  </Text>
                  <Text className="text-accent font-bold">Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
