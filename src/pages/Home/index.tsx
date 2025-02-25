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

import { Helmet } from "react-helmet-async";
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
						formRef.current?.clearField("name");
						formRef.current?.clearField("email");
						formRef.current?.clearField("phone");
						formRef.current?.clearField("message");
					}
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

	const scrollTeam = (direction: 'left' | 'right') => {
		const container = document.querySelector('.items');
		if (container) {
			const scrollAmount = container.clientWidth;
			if (direction === 'left') {
				container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
			} else {
				container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
			}
		}
	};

	return (
		<ScrollSpy>
			<Container>
				<Helmet>
					<title>Gestão Boa</title>
					<meta name="description" content="Com o app Gestão Boa para serviços, a gestão é simplificada. Registre os seus serviços, agende vendas e cadastre seus clientes, tudo isso na palma da sua mão!" />
					<link rel="canonical" href="/" />
				</Helmet>
				<Grid>
					<Header />

					<Banner id="start">
						<div className="content">
							<div className="title">
								Agendamento inteligente, crescimento financeiro
							</div>
							<div className="subtitle">
								Simplifique suas marcações e organize comissões com facilidade. Gerencie tudo em um único app e veja sua receita decolar!
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
										method={() => { }}
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
								Como a Gestão Boa pode turbinar o seu negócio?
							</div>
						</div>

						<div className="benefits">
							<div className="benefit">
								<img src="/check-list.png" alt="" />
								<div className="info">
									<div className="title">Agenda Simplificada</div>
									<div className="subtitle">Mantenha seus compromissos sempre à mão.</div>
								</div>
							</div>
							<div className="benefit">
								<img src="calendar (1) 1 (1).svg" alt="" />
								<div className="info">
									<div className="title">Organização Otimizada</div>
									<div className="subtitle">Tudo em um só lugar para facilitar a gestão.</div>
								</div>
							</div>
							<div className="benefit">
								<img src="calendar (1) 1.svg" alt="" />
								<div className="info">
									<div className="title">Controle de Custos</div>
									<div className="subtitle">Lidar com contas para pagar é uma tarefa complicada. No nosso app você pode já registrar quanto e quando vai pagar seus boletos.</div>
								</div>
							</div>
							<div className="benefit">
								<img src="calendar (1) 2.svg" alt="" />
								<div className="info">
								<div className="title">Gestão Financeira</div>
								<div className="subtitle">Acompanhe entradas e saídas por método de pagamento.</div>
								</div>
							</div>
							<div className="benefit">
								<img src="calendar (1) 3.svg" alt="" />
								<div className="info">
									<div className="title">Análises Detalhadas</div>
									<div className="subtitle">Visualize resultados e tome decisões baseadas em dados.</div>
								</div>
							</div>
							<div className="benefit">
								<img src="calendar (1) 3 (1).svg" alt="" />
								<div className="info">
									<div className="title">Fidelização do Cliente</div>
									<div className="subtitle">Automatize mensagens e crie relacionamentos duradouros.</div>
								</div>
							</div>
						</div>

						<div className="testimonies">
							<div className="heading">
								Empreendedores de sucesso já contam com nossa solução: organize, cresça e fidelize seus clientes!
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

						<div className="tutorial" id="demonstration">
							<div className="callout">
								<div className="title">
									Gestão financeira e vendas <span>na palma da sua mão</span>
								</div>
								<div className="description">
								Veja nossa demonstração, onde mostramos o passo a passo para adicionar serviço, registrar vendas e custos, agendar serviços, adicionar clientes. Além de ver relatórios que te ajudam a entender seus lucros, melhores clientes e gráficos de vendas.
								</div>

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

							<div className="player">
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
						<div className="title">Nossa Equipe Extraordinária</div>
						<div className="subtitle">
							Conheça os profissionais apaixonados que fazem a Gestão Boa acontecer todos os dias,
							transformando a maneira como os negócios são gerenciados.
						</div>
						<div className="scroll-container">
							<button className="scroll-button left" onClick={() => scrollTeam('left')}>
								←
							</button>
							<div className="items">
								<div className="member">
									<img src="/silvio.png" alt="Silvio Quintana" />
									<div className="name">Silvio Quintana</div>
									<div className="subtitle">CEO/COO</div>
									<div className="role-description">
										Líder visionário que coordena nossas estratégias e crescimento
									</div>
								</div>
								<div className="member">
									<img src="/karine.png" alt="Karine Quintana" />
									<div className="name">Karine Quintana</div>
									<div className="subtitle">CMO/CFO</div>
									<div className="role-description">
										Responsável por nossas estratégias de marketing e finanças
									</div>
								</div>
								<div className="member">
									<img src="/victor.png" alt="Victor Amaral" />
									<div className="name">Victor Amaral</div>
									<div className="subtitle">CTO</div>
									<div className="role-description">
										Lidera nossa inovação tecnológica e desenvolvimento de produtos
									</div>
								</div>
								<div className="member">
									<img src="/bruno.png" alt="Bruno Nascimento" />
									<div className="name">Bruno Nascimento</div>
									<div className="subtitle">Desenvolvedor back-end</div>
									<div className="role-description">
										Especialista em desenvolvimento de APIs e infraestrutura
									</div>
								</div>
								<div className="member">
									<img src="/jonathan.png" alt="Jonathan Lima" />
									<div className="name">Jonathan Lima</div>
									<div className="subtitle">Tech Lead</div>
									<div className="role-description">
										Coordena nossa equipe técnica e arquitetura de software
									</div>
								</div>
								<div className="member">
									<img src="/Bruno W.jpg" alt="Bruno Wellar" />
									<div className="name">Bruno Wellar</div>
									<div className="subtitle">Desenvolvedor mobile</div>
									<div className="role-description">
										Especialista em desenvolvimento de aplicativos móveis
									</div>
								</div>
								<div className="member">
									<img src="/eduardo.jpg" alt="Eduardo Gonçalves" />
									<div className="name">Eduardo Gonçalves</div>
									<div className="subtitle">Desenvolvedor mobile</div>
									<div className="role-description">
										Desenvolvedor de interfaces e experiência mobile
									</div>
								</div>
								<div className="member">
									<img src="/Py.jpg" alt="Gustavo Py" />
									<div className="name">Gustavo Py</div>
									<div className="subtitle">Desenvolvedor Backend</div>
									<div className="role-description">
										Especialista em desenvolvimento de serviços backend
									</div>
								</div>
								<div className="member">
									<img src="/gustavo.png" alt="Gustavo Souza" />
									<div className="name">Gustavo Souza</div>
									<div className="subtitle">Desenvolvedor backend</div>
									<div className="role-description">
										Desenvolvedor de APIs e serviços backend
									</div>
								</div>
							</div>
							<button className="scroll-button right" onClick={() => scrollTeam('right')}>
								→
							</button>
						</div>
					</Team>

					<Contact id="contact">
						<div className="info">
							<div className="title">Entre em contato e acelere seu crescimento!</div>
							<div className="links">
								<a href="https://www.instagram.com/gestaoboa/">
									<img src="/instagram-1@2x.png" alt="" />
									@gestaoboa
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
