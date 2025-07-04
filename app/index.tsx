import { Text, View, Button } from "react-native";
import { useColorScheme } from "nativewind";

export default function Index() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-center items-center bg-bgPrimary dark:bg-dark-bgPrimary">
      <Text className="text-3xl text-tBase dark:text-dark-tBase font-bold">Home</Text>
      <View className="mt-4">
        <Button
          title={`Switch to ${colorScheme === 'light' ? 'Dark' : 'Light'} Mode`}
          onPress={toggleColorScheme}
        />
      </View>
    </View>
  );
}
