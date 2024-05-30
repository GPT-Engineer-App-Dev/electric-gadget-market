import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet",
    image: "tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {product.name}
                </Heading>
                <Text fontSize="md" mb={4}>
                  {product.description}
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  {product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;