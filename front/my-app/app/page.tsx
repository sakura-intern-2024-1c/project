import { Header } from "@/components/Header"
type User = {
	id: number;
	name: string;
	status: number;
	experience: string;
};
const users: User[] = [
	{ id: 1, name: "tanaka", status: 1, experience: "new" },
	{ id: 1, name: "yamada", status: 2, experience: "new" },
	{ id: 1, name: "sato", status: 3, experience: "new" },
]
const Home= ()=> {
	return (
		<>
		</>
	);
}
export default Home
