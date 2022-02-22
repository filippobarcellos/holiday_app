import { Skeleton, Center, VStack, View } from 'native-base'

export default function HolidaysLoading() {
  return (
    <View flex='1' bg='white' testID='holidayLoading'>
      <Center w='100%' mt='24px'>
        <VStack w='100%'>
          <Skeleton px='4' w='100%' mb='2' />
          <Skeleton px='4' w='100%' mb='2' />
          <Skeleton px='4' w='100%' mb='2' />
          <Skeleton px='4' w='100%' mb='2' />
          <Skeleton px='4' w='100%' mb='2' />
        </VStack>
      </Center>
    </View>
  )
}
