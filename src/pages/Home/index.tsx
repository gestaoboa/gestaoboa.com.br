import { FunctionComponent } from "react";
import Header from "../../components/Header";
import { Awards, Banner, Contact, Container, Grid, Solutions, Team } from "./styles";
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
						<img src="/text-decoration.png" alt="" />
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

					<div className="block"></div>

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
				<Team>
					<div className="title">Conheça o nosso time!</div>
					<div className="items">
						<div className="member">
							<img src="/bruno.png" alt="" />
							<div className="name">Bruno Nascimento</div>
							<div className="subtitle">Desenvolvedor back-end</div>
						</div>
						<div className="member">
							<img src="/silvio.png" alt="" />
							<div className="name">Silvio Quintana</div>
							<div className="subtitle">CEO/COO</div>
						</div>
						<div className="member">
							<img src="/karine.png" alt="" />
							<div className="name">Karine Quintana</div>
							<div className="subtitle">CMO/CFO</div>
						</div>
						<div className="member">
							<img src="/victor.png" alt="" />
							<div className="name">Victor Amaral</div>
							<div className="subtitle">CTO</div>
						</div>
					</div>
				</Team>
				<Contact>
					<div className="info">
						<div className="title">Entre em contato conosco!</div>
						<div className="links">
							<a href="https://www.instagram.com/beasieroficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
								<img src="/public/instagram-1@2x.png" alt="" />
								@BEasierOficial
							</a>
							<a href="https://wa.me/5553999461551?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+BEasier%21">
								<img src="/public/whatsapp-1@2x.png" alt="" />
								(53) 99946-1551
							</a>
							<a href="mailto:BEasier.IG@gmail.com">
								<img src="/public/envelope-1@2x.png" alt="" />
								BEasier.IG@gmail.com
							</a>
						</div>
					</div>
					<div className="space"></div>
					<div className="form">
						<form>
							<input type="text" name="name" id="" />
							<input type="text" name="last-name" id="" />
							<input type="email" name="email" id="" />
							<textarea name="message" id="" cols={30} rows={10}></textarea>
						</form>
					</div>
				</Contact>
			</Grid>
		</Container>
	);
};

export default Home;
