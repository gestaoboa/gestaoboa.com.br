import { FunctionComponent } from "react";
import Header from "../../components/Header";
import { Awards, Banner, Container, Grid, Solutions } from "./styles";
import Button from "../../components/Button";

const Home: FunctionComponent = () => {

	return (
		<Container>
			<Grid>
				<Header />

				<Banner>
					<div className="content">
						<div className="title">
							Gestão financeira simplificada para o seu negócio
						</div>
						<div className="subtitle">
							Para alavancar o seu empreendimento, com tecnologia e simplicidade. Vem ser Beasier!
						</div>
						<div className="buttons">
							<Button width="308px" text="COMEÇAR" method={() => {}} type={"focused"} />
							OU
							<Button width="308px" text="INSTALE O APP" method={() => {}} type={"unfocused"} />
						</div>
					</div>
					<div className="images">
						<img className="cellphone" src="/cellphone.svg" alt="" />
						<img className="elipse" src="/Ellipse.svg" alt="" />
					</div>
				</Banner>

				<Awards>
					<div className="item">
						<div className="number">1°</div>
						<div className="text">Colocada na pré-incubação de Rio Grande</div>
					</div>
				</Awards>

				<Solutions>
					<div className="text">
						<img src="/public/text-decoration.png" alt="" />
						<div className="title">Como a BEasier pode te ajudar?</div>
						<div className="subtitle">Veja nassa variedade de benefícios</div>
					</div>
					
					<div className="benefits">
						<img src="/checklist-1@2x.png" alt="" />
						<div className="title">Vendas</div>
						<div className="subtitle">Através da plataforma você pode fazer o registro das suas vendas, e ter controle do lucro que você tem no mês</div>
					</div>

					<div className="benefits">
						<img src="/store-1@2x.png" alt="" />
						<div className="title">Clientes</div>
						<div className="subtitle">Registre seus clientes com email e telefone, e oferecemos diversas soluções para vocês automatizar seu relacionamento, e ter mais conexões</div>
					</div>

					<div className="benefits">
						<img src="/monitoring-1@2x.png" alt="" />
						<div className="title">Produtos e serviços</div>
						<div className="subtitle">Registres seus produtos, ou serviços junto do valor de custo, e obtenha uma gestão simplificada de estoque e lucro.</div>
					</div>

					<div></div>

					<div className="buying">
						<img src="/partnership-1@2x.png" alt="" />
					</div>

					<div className="works">
						<div className="title">Como funciona?</div>
						<div className="rectangle blue">Resgistre produtos e clientes</div>
						<div className="rectangle blue">Resgistre cada venda</div>
						<div className="rectangle blue">Veja os seus resultados</div>
						<div className="rectangle yellow">Uma IA irá fornecer insights</div>
					</div>
				</Solutions>
			</Grid>
		</Container>
	);
};

export default Home;
