import { Container, Box, Link } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";

export default function AddToDo() {
    return (
        <Container maxW="7xl">
        <Box display="flex" alignItems="center" justifyContent="space-around" pb="5%">
            <Link href="/" fontSize="xl">List All To Dos</Link>
            <Link href="/todonts" fontSize="xl">List All To Donts</Link>
        </Box>
        <AddTodo />
        </Container>
    );
}