import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Render a loader or splash screen while fonts load
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Define your screens here */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
