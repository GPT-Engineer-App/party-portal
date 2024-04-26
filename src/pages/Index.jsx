// Party Event Website using Chakra UI and React Icons
import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGV2ZW50fGVufDB8fHx8MTcxNDA5NDkwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Party Event" objectFit="cover" w="full" h="400px" />
        <Heading as="h1" size="2xl" textAlign="center">
          Summer Blast Party 2023
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join us for the ultimate summer party filled with music, fun, and unforgettable memories!
        </Text>
        <HStack spacing={4} justify="center">
          <Box textAlign="center">
            <Icon as={FaCalendarAlt} w={6} h={6} />
            <Text mt={2}>August 20, 2023</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaMapMarkerAlt} w={6} h={6} />
            <Text mt={2}>Sunset Beach, Miami</Text>
          </Box>
        </HStack>
        <Button rightIcon={<FaTicketAlt />} colorScheme="purple" size="lg">
          Get Tickets
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
