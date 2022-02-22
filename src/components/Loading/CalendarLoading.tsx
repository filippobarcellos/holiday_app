import { Skeleton, Center, VStack, View } from 'native-base'

export default function CalendarLoading() {
  return (
    <View flex='1' bg='white'>
      <Center w='100%' mt='24px'>
        <VStack w='100%'>
          <Skeleton px='4' w='100%' mb='2' h='300' />
          <Skeleton px='4' w='100%' mb='2' h='300' />
        </VStack>
      </Center>
    </View>
  )
}
