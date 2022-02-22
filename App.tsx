import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { QueryClientProvider } from 'react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppProvider from './src/context'
import Navigation from './src/navigation'
import { queryClient } from './src/services/query'
import useCachedResources from './src/hooks/useCachedResources'

const config = {
  suppressColorAccessibilityWarning: true,
}

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <SafeAreaProvider>
            <NativeBaseProvider config={config}>
              <Navigation />
              <StatusBar style='dark' />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </AppProvider>
      </QueryClientProvider>
    )
  }
}
