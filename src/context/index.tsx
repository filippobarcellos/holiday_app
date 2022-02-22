import { HolidaysProvider } from './holidays'

type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return <HolidaysProvider>{children}</HolidaysProvider>
}
