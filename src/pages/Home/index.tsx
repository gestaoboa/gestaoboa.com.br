import { FormHandles, SubmitHandler } from "@unform/core";
import { FunctionComponent, useRef } from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Awards, Banner, Contact, Container, Grid, Solutions, Team } from "./styles";
import * as yup from "yup"
import { Form } from "@unform/web";
import { UnformErrors } from "../../interfaces/interfaces";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextArea";
import emailjs from "@emailjs/browser"
import ScrollSpy from "react-ui-scrollspy";

const Home: FunctionComponent = () => {
	const formRef = useRef<FormHandles>(null);

    const handleSubmit : SubmitHandler<FormData> = async (data) => {
        formRef.current
            ?.setErrors({});
        try {
            const schemaLogin = yup
                .object()
                .shape({
                    name: yup
                        .string()
                        .required("Informe o seu nome"),
                    email: yup
                        .string()
                        .email("Email inválido")
                        .required("Informe o seu email"),
                    phone: yup
                        .string()
                        .required("Informe o seu número de celular"),
					message: yup
                        .string(),
                })
                .required();

            await schemaLogin.validate(data, {abortEarly: false});

			console.log("Passou tudo")

            const emailBody = {
                from_name: formRef.current?.getFieldValue("name"),
                email: formRef.current?.getFieldValue("email"),
                phone: formRef.current?.getFieldValue("phone"),
                message: formRef.current?.getFieldValue("message"),
            }
            
            emailjs.send(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID, 
                import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
                emailBody, 
                import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
            ).then((res) => {
                if(res && res.status == 200) {
                    // setSuccess("success");
                    formRef.current?.clearField("name")
                    formRef.current?.clearField("email")
                    formRef.current?.clearField("phone")
                    formRef.current?.clearField("message")
                }
                // else setSuccess("error")
            })
        } catch (err) {
            const validationErrors: UnformErrors = {};
            if (err instanceof yup.ValidationError) {
                err
                    .inner
                    .forEach((error) => {
                        if (error.path) 
                            validationErrors[error.path] = error.message;
                        }
                    );
                formRef.current
                    ?.setErrors(validationErrors);
				console.log("validationErrors ",validationErrors)
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
								Gestão financeira simplificada para o seu negócio
							</div>
							<div className="subtitle">
								Para alavancar o seu empreendimento, com tecnologia e simplicidade. Vem ser Beasier!
							</div>
							<div className="buttons">
								<a className="button" href="https://beasier.vercel.app" style={{ textDecoration: "none" }}>
									<Button width="100%" text="COMEÇAR" method={() => {}} type={"focused"} />								
								</a>
								OU
								<a className="button" href="https://play.google.com/store/apps/details?id=com.beasier&pcampaignid=web_share" style={{ textDecoration: "none" }}>
									<Button width="100%" text="INSTALE O APP" method={() => {}} type={"unfocused"} />
								</a>
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

					<Solutions id="solution">
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
								<a href="https://www.instagram.com/beasieroficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
									<img src="/instagram-1@2x.png" alt="" />
									@BEasierOficial
								</a>
								<a href="https://wa.me/5553999461551?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+BEasier%21">
									<img src="/whatsapp-1@2x.png" alt="" />
									(53) 99946-1551
								</a>
								<a href="BEasier.IG@gmail.com">
									<img src="/envelope-1@2x.png" alt="" />
									BEasier.IG@gmail.com
								</a>
							</div>
						</div>

						<div className="profits">
							<img src="/profits-1@2x.png" alt="" />
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
									<CustomInput width="100%" name="email" placeholder="seumelhoremail@mail.com" />
								</div>
								<div className="input-wrapper">
									<div className="label">Telefone</div>
									<CustomInput width="100%" name="phone" placeholder="(00) 00000-0000" />
								</div>
								<div className="textarea">
									<div className="label">Mensagem</div>
									<CustomTextarea width="100%" name="message" placeholder="Olá, tudo bem?" />
								</div>
							</Form>
							<div className="button">
								<Button width={"100%"} text="Enviar" method={() => formRef.current?.submitForm()} type="focused" />
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
