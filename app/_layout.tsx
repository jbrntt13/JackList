import AddListButton from '@/components/HeaderButtons/AddListButton';
import { TodoProvider } from '@/context/TodoContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView>
      <TodoProvider>
        <BottomSheetModalProvider>
          <ThemeProvider value={DefaultTheme}>
            <Stack>
              <Stack.Screen
                name="index"
                options={{
                  headerRight: () => {
                    return <AddListButton />;
                  },
                }}
              />
            </Stack>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </TodoProvider>
    </GestureHandlerRootView>
  );
}
