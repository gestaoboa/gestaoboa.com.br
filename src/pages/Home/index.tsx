import { FunctionComponent } from "react";
import Header from "../../components/Header";
import { Container, Grid } from "./styles";

const Home: FunctionComponent = () => {

	return (
		<Container>
			<Grid>
				<Header />
			</Grid>		
		</Container>
	);
};

export default Home;
