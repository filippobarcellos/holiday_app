import { NativeBaseProvider } from 'native-base'
import { render, RenderAPI } from '@testing-library/react-native'
import { QueryClientProvider, QueryClient } from 'react-query'

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

const mockNavigate = jest.fn()
const mockGoBack = jest.fn()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

jest.mock('@react-navigation/native', () => {
  const navigate = jest.requireActual('@react-navigation/native')
  return {
    ...navigate,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
    }),
    useRoute: () => ({
      params: {
        holiday: 'token123',
      },
    }),
  }
})

function renderWithTheme(children: React.ReactNode): RenderAPI {
  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>
  )
}

function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

const holidaysResponseMock = {
  'england-and-wales': {
    division: 'england-and-wales',
    events: [
      {
        title: 'New Year’s Day',
        date: '2017-01-02',
        notes: 'Substitute day',
        bunting: true,
      },
      {
        title: 'Good Friday',
        date: '2017-04-14',
        notes: '',
        bunting: false,
      },
      {
        title: 'Easter Monday',
        date: '2017-04-17',
        notes: '',
        bunting: true,
      },
    ],
  },
}

const upComingHolidaysMock = [
  {
    title: 'New Year’s Day',
    date: '2017-01-02',
    notes: 'Substitute day',
    bunting: true,
  },
  {
    title: 'Good Friday',
    date: '2017-04-14',
    notes: '',
    bunting: false,
  },
  {
    title: 'Easter Monday',
    date: '2017-04-17',
    notes: '',
    bunting: true,
  },
  {
    title: 'Early May bank holiday',
    date: '2017-05-01',
    notes: '',
    bunting: true,
  },
  {
    title: 'Spring bank holiday',
    date: '2017-05-29',
    notes: '',
    bunting: true,
  },
]

export { renderWithTheme, wrapper, upComingHolidaysMock, holidaysResponseMock }
