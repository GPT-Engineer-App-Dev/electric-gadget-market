import { Container, Text, VStack, Box, SimpleGrid, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "/images/smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    image: "/images/laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Tablet",
    image: "/images/tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="3xl" fontWeight="bold">
            Welcome to E-Shop
          </Text>
          <Text fontSize="xl">Your one-stop shop for all your electronic needs.</Text>
          <Box>
            <Text fontSize="2xl" mb={4}>
              Featured Products
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {sampleProducts.map((product) => (
                <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                  <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
                  <Text fontSize="xl" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text>{product.price}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Index;