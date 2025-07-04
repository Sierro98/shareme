import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AppleLogo from "../assets/images/apple_logo.svg";
import GoogleLogo from "../assets/images/google_logo.svg";
import ShareMeLogo from "../assets/images/shareME_logo.svg";


export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-bgPrimary">
      <View className="flex-1 items-center justify-around p-10">
        <View className="mt-10">
          <ShareMeLogo className="w-[50%] h-[50%]" />
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
            <View className="mx-5">
              <AppleLogo className="w-[50%] h-[50%]" />
            </View>
            <View className="mx-5">
              <GoogleLogo className="w-[50%] h-[50%]" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
