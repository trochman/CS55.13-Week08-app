import { Container, Box, Link } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

export default function Home() {
    return (
        <Container maxW="7xl">
        <Box display="flex" alignItems="center" justifyContent="space-around" pb="5%">
            <Link href="/add-todo" fontSize="xl">Add To Do</Link>
            <Link href="/add-todont" fontSize="xl">Add To Dont</Link>
        </Box>
        <TodoList />
        </Container>
    );
    }
