import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

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

const Products = () => {
  return (
    <Box p={4}>
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
  );
};

export default Products;