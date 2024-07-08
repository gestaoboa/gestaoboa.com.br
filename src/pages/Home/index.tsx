import emailjs from "@emailjs/browser";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import ScrollSpy from "react-ui-scrollspy";
import * as yup from "yup";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextArea";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UnformErrors } from "../../interfaces/interfaces";
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
	const [width, setWidth] = useState(window.innerWidth);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);
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
								<h1>Gestão inteligente para o seu negócio</h1>
							</div>
							<div className="subtitle">
								<p>Com o app Gestão Boa para serviços, a gestão é simplificada. Registre os seus serviços, agende vendas e cadastre seus clientes, tudo isso na palma da sua mão!</p>
							</div>
							<div className="buttons">
								<a
									className="button"
									href="https://app.gestaoboa.com.br"
									style={{ textDecoration: "none" }}
								>
									<Button
										width="100%"
										text="COMEÇAR"
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
						<div className="text">
							<img src="/text-decoration.png" alt="" />
							<div className="title">Como a Gestão Boa pode te ajudar?</div>
							<div className="subtitle">Veja nassa variedade de benefícios</div>
						</div>

						<div className="benefits">
							<img src="/checklist-1@2x.png" alt="" />
							<div className="title">Vendas de serviços</div>
							<div className="subtitle">
								Através da plataforma você pode fazer o registro dos seus
								serviços, e de cada venda, assim você terá mais controle de
								quantas horas você trabalha por dia, e de quanto você ganha.
							</div>
						</div>

						<div className="benefits">
							<img src="/store-1@2x.png" alt="" />
							<div className="title">Gestão financeira</div>
							<div className="subtitle">
								Adicione seus custos, vendas, e o dinheiro do seu bolso que tu
								coloca no negócio. Dessa forma você terá controle do que é
								dinheiro da empresa, e o que é seu dinheiro pessoal, além de
								poder acaompanhar seus resultados de faturamento, e lucro
								mensalmente.
							</div>
						</div>

						<div className="benefits">
							<img src="/monitoring-1@2x.png" alt="" />
							<div className="title">Clientes e agendamentos</div>
							<div className="subtitle">
								Registre seus clientes com nome, email e telefone, e trazemos
								diversas soluções para vocês automatizar seu relacionamento, e
								ter mais conexões. Além disso possibilitamos que você agenda
								seus encontros com clientes.
							</div>
						</div>

						<div className="block"></div>
						{width > 810 && (
							<ReactPlayer
								className="buying"
								url="/demonstracao.mp4"
								width="30vw"
								height="85vh"
								controls={true}
								loop={true}
								playing={true}
								muted
							/>
						)}

						<div className="works">
							<div className="title">Como funciona?</div>
							<div className="rectangle blue">
								Resgistre seus serviços e atuais clientes
							</div>
							<div className="rectangle blue">
								Se organize utilizando nossa agenda
							</div>
							<div className="rectangle blue">
								Faça gestão financeira adicionando cada venda e custo
							</div>
							<div className="rectangle blue">
								Descubra seu lucro mensal, e os melhores clientes
							</div>
							<div className="rectangle yellow">Cresça o seu negócio</div>
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
								<div className="subtitle">CEO</div>
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
								<a href="gestao@outlook.com">
									<img src="/envelope-1@2x.png" alt="" />
									gestao@outlook.com
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
