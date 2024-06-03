import { Container, Text, VStack, Box, IconButton } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const bikePumpStations = [
  { id: 1, name: "Pump Station 1", lat: 59.3293, lng: 18.0686 },
  { id: 2, name: "Pump Station 2", lat: 59.3325, lng: 18.0649 },
  { id: 3, name: "Pump Station 3", lat: 59.334, lng: 18.07 },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
        <Box width="100%" height="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
          <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" fontSize="lg" color="gray.500">
            Map Placeholder
          </Text>
          {bikePumpStations.map((station) => (
            <IconButton key={station.id} aria-label={station.name} icon={<FaMapMarkerAlt />} size="lg" position="absolute" top={`calc(50% + ${station.lat - 59.3293} * 100px)`} left={`calc(50% + ${station.lng - 18.0686} * 100px)`} transform="translate(-50%, -50%)" colorScheme="red" />
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
