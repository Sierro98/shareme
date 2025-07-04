import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import ShareMeLogo from "../assets/images/shareME_logo.svg";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-bgPrimary">
      <View className="flex-1 items-center justify-around p-10">
        <View className="mt-10">
          <ShareMeLogo width={200} height={50} />
        </View>
        <Image
          source={require("../assets/images/sharing_intro.png")}
          className="w-full h-[45%]"
          resizeMode="contain"
        />

        {/* Buttons Container */}
        <View className="w-full">
          <TouchableOpacity
            className="bg-accent p-4 rounded-full items-center mb-4"
            onPress={() => router.push("/login")}
          >
            <Text className="text-white text-lg font-bold">login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-accent p-4 rounded-full items-center"
            onPress={() => router.push("/signin")}
          >
            <Text className="text-white text-lg font-bold">sign in</Text>
          </TouchableOpacity>

          {/* Social Logins */}
          <View className="flex-row justify-center items-center mt-10">
            <Text className="text-4xl mx-6"></Text>
            <Text className="text-4xl mx-6">G</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
