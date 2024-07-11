/* eslint-disable no-irregular-whitespace */
import emailjs from "@emailjs/browser";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { FunctionComponent, useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import * as yup from "yup";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextArea";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UnformErrors } from "../../interfaces/interfaces";

import ReactPlayer from "react-player";
import {
	Awards,
	Banner,
	Contact,
	Container,
	Grid,
	Solutions,
	Team,
} from "./styles";

const Home: FunctionComponent = () => {
	// const [width, setWidth] = useState(window.innerWidth);
	// const updateDimensions = () => {
	// 	setWidth(window.innerWidth);
	// };
	// useEffect(() => {
	// 	window.addEventListener("resize", updateDimensions);
	// 	return () => window.removeEventListener("resize", updateDimensions);
	// }, []);

	const formRef = useRef<FormHandles>(null);

	const handleSubmit: SubmitHandler<FormData> = async (data) => {
		formRef.current?.setErrors({});
		try {
		const schemaLogin = yup
			.object()
			.shape({
			name: yup.string().required("Informe o seu nome"),
			email: yup
				.string()
				.email("Email inválido")
				.required("Informe o seu email"),
			phone: yup.string().required("Informe o seu número de celular"),
			message: yup.string(),
			})
			.required();

		await schemaLogin.validate(data, { abortEarly: false });

		console.log("Passou tudo");

		const emailBody = {
			from_name: formRef.current?.getFieldValue("name"),
			email: formRef.current?.getFieldValue("email"),
			phone: formRef.current?.getFieldValue("phone"),
			message: formRef.current?.getFieldValue("message"),
		};

		emailjs
			.send(
			import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
			import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
			emailBody,
			import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
			)
			.then((res) => {
			if (res && res.status == 200) {
				// setSuccess("success");
				formRef.current?.clearField("name");
				formRef.current?.clearField("email");
				formRef.current?.clearField("phone");
				formRef.current?.clearField("message");
			}
			// else setSuccess("error")
			});
		} catch (err) {
		const validationErrors: UnformErrors = {};
		if (err instanceof yup.ValidationError) {
			err.inner.forEach((error) => {
			if (error.path) validationErrors[error.path] = error.message;
			});
			formRef.current?.setErrors(validationErrors);
			console.log("validationErrors ", validationErrors);
		}
		}
	};

  	return (
		<ScrollSpy>
			<Container>
				<Grid>
					<Header />

					<Banner id="start">
						<div className="content">
							<div className="title">
								Gestão inteligente para o seu negócio
							</div>
							<div className="subtitle">
								Com o app <span>Gestão Boa para serviços</span>, a gestão é simplificada. Registre os seus serviços, agende vendas e cadastre seus clientes, tudo isso na palma da sua mão!
							</div>

							<div className="buttons">
								<a
								className="button"
								href="#demonstration"
								style={{ textDecoration: "none" }}
								>
								<Button
									width="100%"
									text="COMEÇAR AGORA!"
									method={() => {}}
									type={"focused"}
								/>
								</a>
							</div>
						</div>
						<div className="images">
							<img className="cellphone" src="/WhatsApp Image 2024-06-19 at 20.41.51 2.png" alt="" />
							<img className="elipse" src="/Ellipse.svg" alt="" />
						</div>
					</Banner>

					<Awards>
						<div className="item">
							<div className="number">1°</div>
							<div className="text">
								Colocada na pré-incubação de Rio Grande (2023)
							</div>
						</div>
					</Awards>

					<Solutions id="solution">
							<div className="solutionBanner">
								<div className="vignette"></div>
								<div className="title">
									Como a Gestão Boa pode te ajudar?
								</div>
							</div>

							<div className="benefits">
								<div className="benefit">
									<img src="/check-list.png" alt="" />
									<div className="title">Mais fácil que papel e a caneta</div>
									<div className="subtitle">No nosso app você pode registrar facilmente cada serviço concluído. Além disso, é possível ver cada venda e estatísticas mensais e diárias!</div>
								</div>
								<div className="benefit">
									<img src="calendar (1) 1 (1).svg" alt="" />
									<div className="title">Fique por dentro da sua agenda</div>
									<div className="subtitle">Contamos com uma agenda integrada para você marcar seus serviços e com facilidade registrar a venda.</div>
								</div>
								<div className="benefit">
									<img src="calendar (1) 1.svg" alt="" />
									<div className="title">Anote os custos do seu negócio</div>
									<div className="subtitle">Lidar com contas para pagar é uma tarefa complicada. No nosso app você pode já registrar quanto e quando vai pagar seus boletos.</div>
								</div>
								<div className="benefit">
									<img src="calendar (1) 2.svg" alt="" />
									<div className="title">Saiba quanto entrou e saiu da carteira</div>
									<div className="subtitle">É possível ver quanto faturou em dinheiro, pix e cartão de crédito. Isso ajuda muito caso você use a conta pessoal como a conta de recebimentos do seu negócio.</div>
								</div>
								<div className="benefit">
									<img src="calendar (1) 3.svg" alt="" />
									<div className="title">Balanço geral e melhores clientes</div>
									<div className="subtitle">Além de todos os outros benefícios, você poderá ver quais clientes são mais recorrentes e qual é o seu balanço diário/mensal.</div>
								</div>
								<div className="benefit">
									<img src="calendar (1) 3 (1).svg" alt="" />
									<div className="title">Melhore a conexão com seus clientes</div>
									<div className="subtitle">Além de cadastrar os seus clientes, você poderá enviar mensagens automáticas para eles, aumentando a chance de retê-lo.</div>
								</div>
							</div>

							<div className="testimonies">
								<div className="heading">
									Conheça algumas pessoas que já estão desfrutando da nossa solução!
								</div>

								<div className="card">
									<img src="/WhatsApp Image 2024-07-05 at 10.01.10.jpeg" alt="" />
									<div className="texts">
										<div className="title">Ficou mais fácil organizar minhas finanças</div>
										<div className="desc">O aplicativo ajudou muito a organizar os meus recebimentos e entender quais são os lucros e despesas de forma muito clara e objetiva. Além de conseguir abranger vários objetivos em um só APP como organizar agendamentos que antes usava o Google agenda e também organizar os recebimentos que antes usava o Excel. Assim se torna muito mais prático e organizado as minhas finanças.</div>
										<div className="person">-  Janaina Christello, Psicóloga</div>
									</div>
								</div>
							</div>

							<div className="tutorial">
								<div className="callout">
									<div className="title">
										Gestão financeira e vendas <span>na palma da sua mão</span>
									</div>
									<div className="description">
										Veja nossa demonstração, onde mostramos o passo a passo para adicionar serviço, registrar vendas e custos, agendar serviços, adicionar clientes. Além de ver relatórios que te ajudam a entender seus lucros, melhores clientes e gráficos de vendas.
									</div>
									<span>Controle seu negócio a qualquer hora e lugar!</span>

									<div className="buttons">
										<div className="top">
											<a href="https://play.google.com/store/apps/details?id=com.beasier&pcampaignid=web_share" className="unfocused">
												<img src="/Vector.svg" alt="" />
												ANDROID
											</a>

											<div className="or">
												ou
											</div>

											<a href="https://www.app.gestaoboa.com.br" className="unfocused">
												<img src="/mage_playstore.svg" alt="" style={{ marginTop: "-6px" }} />
												IOS
											</a>
										</div>
										<a href="https://www.app.gestaoboa.com.br" className="focused">
											Desktop
										</a>
									</div>
								</div>

								<div className="player" id="demonstration">
									<ReactPlayer
										className="buying"
										url="/demonstracao.mp4"
										width="fit-content"
										height="85vh"
										controls={true}
										loop={true}
										playing={true}
										muted
									/>
								</div>
							</div>
					</Solutions>

					<Team id="team">
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

					<Contact id="contact">
						<div className="info">
						<div className="title">Entre em contato conosco!</div>
						<div className="links">
							<a href="https://www.instagram.com/gestaoboa/">
							<img src="/instagram-1@2x.png" alt="" />
							@gestaoboa
							</a>
							<a href="https://wa.me/5553999461551?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Gestao+Boa%21">
							<img src="/whatsapp-1@2x.png" alt="" />
							(53) 99946-1550
							</a>
							<a href="BEasier.IG@gmail.com">
							<img src="/envelope-1@2x.png" alt="" />
							BEasier.IG@gmail.com
							</a>
						</div>
						</div>

						<div className="space"></div>

						<div className="form">
						<Form ref={formRef} onSubmit={handleSubmit}>
							<div className="input-wrapper double">
							<div className="label">Nome completo</div>
							<CustomInput width="100%" name="name" placeholder="Nome" />
							</div>
							<div className="input-wrapper">
							<div className="label">Email</div>
							<CustomInput
								width="100%"
								name="email"
								placeholder="seumelhoremail@mail.com"
							/>
							</div>
							<div className="input-wrapper">
							<div className="label">Telefone</div>
							<CustomInput
								width="100%"
								name="phone"
								placeholder="(00) 00000-0000"
							/>
							</div>
							<div className="textarea">
							<div className="label">Mensagem</div>
							<CustomTextarea
								width="100%"
								name="message"
								placeholder="Olá, tudo bem?"
							/>
							</div>
						</Form>
						<div className="button">
							<Button
							width={"100%"}
							text="Enviar"
							method={() => formRef.current?.submitForm()}
							type="focused"
							/>
						</div>
						</div>
					</Contact>

					<Footer />
				</Grid>
			</Container>
		</ScrollSpy>
  	);
};

export default Home;
