import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const Banner = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	justify-content: space-between;
	align-items: center;
	grid-column: span 12;
	padding-top: 150px;
	padding-left: 100px;
	padding-right: 100px;

	.content {
		display: flex;
		flex-direction: column;
		grid-column: span 7;
		gap: 14px;
	}

	.content .title {
		font-weight: bold;
		font-size: 36px;
		text-align: start;
	}

	.content .subtitle {
		font-weight: lighter;
		font-size: 32px;
		text-align: start;
	}

	.content .buttons {
		display: flex;
		gap: 35px;
		align-items: center;
		margin-top: 55px;
	}

	.content .buttons .button {
		width: 308px;
	}

	.images {
		grid-column: span 5;
		position: relative;
		height: 766px;
	}

	.images .cellphone {
		position: absolute;
		right: 170px;
		z-index: 100;
		width: 350px;
	}

	.images .elipse {
		position: absolute;
		bottom: 70px;
		right: 0px;
	}

	@media (max-width: 1700px){
		.content .title {
			font-size: 36px;
		}

		.images {
			width: 700px;
		}
	}

	@media (max-width: 1550px){
		.content {
			grid-column: span 12;
			gap: 39px;
		}
		.content .title {
			font-size: 32px;
			text-align: center;
		}
		.content .buttons {
			justify-content: center;
		}

		.images {
			width: 100%;
			height: 600px;
			align-self: center;
			justify-content: center;
			display: flex;
			grid-column: span 12 !important;
			margin-bottom: 20px;
			margin-top: 20px;
		}

		.images .cellphone {
			height: 600px;
			width: unset;
			right: 0px;
			left: 0px;
			top: 0px;
			bottom: 0px;
			margin: 0 auto;
		}

		.images .elipse {
			height: 600px;
			right: 0px;
			left: 0px;
			top: 0px;
			bottom: 0px;
			margin: 0 auto;
		}
	}

	@media (max-width: 800px){
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		padding: 41px;

		// .images {
		// 	height: 600px;
		// 	width: 80%;
		// 	align-self: center;
		// 	justify-content: center;
		// }
		// .images .cellphone {
		// 	height: 550px;
		// 	margin-right: -70px;
		// }
		// images .elipse {
		// 	height: 420px;
		// }
		 .content .title {
		 	font-size: 24px;
		 	text-align: center;
		 }

		// .content .subtitle {
		// 	font-size: 18px;
		// 	text-align: center;
		// }

		// .content .buttons {
		// 	flex-direction: column;
		// 	gap: 10px;
		// }
	}
	@media (max-width: 600px){
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		padding: 41px;
		
		.images {
			display: flex !important;
			height: fit-content;
			width: 100%;
			align-self: center;
			justify-content: center;
			align-items: center;
			padding-top: 20px;
		}
		.images .cellphone {
			height: unset;
			width: 300px;
			position: unset !important;
			// margin-right: 0px;
		}
		.images .elipse {
			display: none;
		}
		.content .title {
			font-size: 24px;
			text-align: center;
		}

		.content .subtitle {
			font-size: 18px;
			text-align: center;
		}

		.content .buttons {
			flex-direction: column;
			gap: 10px;
		}
	}
`;

export const Awards = styled.div`
	display: flex;
	grid-column: span 12;
	justify-content: center;
	padding-top: 59px;
	padding-bottom: 59px;
	background-color: #03045E;

	.item {
		display: flex;
		align-items: center;
		gap: 20px;
		color: #fff;
	}

	.item .number {
		font-weight: bold;
		font-size: 64px;
	}

	.item .text {
		font-size: 24px;
		max-width: 313px;
	}

	@media (max-width: 800px){
		.item .number {
			font-size: 36px;
		}

		.item .text {
			font-size: 18px;
		}
	}
`

export const Solutions = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-column: span 12;
	padding: 206px;
	padding-top: 192px;
	padding-left: 100px;
	padding-right: 100px;
	grid-column-gap: 24px;
	grid-row-gap: 207px;
	position: relative;

	.text {
		display: flex;
		flex-direction: column;
		gap: 33px;
		grid-column: span 5;
		position: relative;
	}

	.text img {
		position: absolute;
		top: -10px;
		left: -20px;
	}

	.text .title {
		font-size: 72px;
		font-weight: bold;
	}

	.text .subtitle {
		font-size: 24px;
		font-weight: lighter;
	}

	.benefits {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 20px;
		grid-column: span 2;
	}

	.benefits img {
		width: 100px;
	}

	.benefits .title {
		font-weight: bold;
		font-size: 28px;
	}

	.benefits .subtitle {
		font-weight: lighter;
		font-size: 16px;
	}

	.buying {
		display: flex;
		grid-column: span 6;
		position: absolute;
		bottom: 20px;
		left: 100px;
	}

	.block {
		grid-column: span 6;
	}

	.works {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		grid-column: span 6;
		gap: 30px;
	}

	.works .title {
		font-weight: bold;
		font-size: 72px;
	}

	.works .rectangle {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		padding: 24px;
		font-weight: bold;
	}

	.blue {
		background-color: #03045E;
	}

	.yellow {
		background-color: #FDC500;
	}

	@media (max-width: 800px){
		display: flex;
		flex-direction: column;
		padding: 41px;
		padding-bottom: 25px;
		grid-row-gap: 30px;

		.block {
			display: none;
		}

		.text .title {
			font-size: 36px;
		}

		.text img {
			top: -20px;
			left: -25px;
		}

		// .buying {
		// 	bottom: 10px;
		// 	align-self: center;
		// }

		.works .title {
			font-size: 36px;
		}
	}
`

export const Team = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: span 12;
	padding: 89px;
	padding-bottom: 193px;
	padding-left: 100px;
	padding-right: 100px;
	background-color: #03045e;
	color: #fff;
	gap: 134px;
	justify-content: center;


	.title {
		display: flex;
		justify-content: center;
		font-weight: bold;
		font-size: 72px;
	}

	.items {
		display: flex;
		justify-content: center;
		text-align: center;
		gap: 93px;
	}

	.items .member {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.items .member img {
		border-radius: 500px;
	}

	.items .member .name {
		font-size: 26px;
		font-weight: bold;
	}

	.items .member .subtitle {
		font-size: 24px;
		font-weight: lighter;
		font-style: italic;
	}

	@media (max-width: 800px){
		padding: 41px;
		gap: 60px;

		.title {
			font-size: 36px;
		}

		.items, .items .member {
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.items .member img {
			width: 200px;
		}
	}
`

export const Contact = styled.div`
	display: grid;
	padding: 100px;
	padding-left: 100px;
	padding-right: 100px;
	padding-bottom: 100px;
	grid-column: span 12;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	position: relative;

	.info, .form {
		display: flex;
		flex-direction: column;
		grid-column: span 5;
	}

	.space {
		grid-column: span 2;
	}

	.info {
		display: flex;
		gap: 81px;
		flex-direction: column;
	}

	.info .title {
		font-weight: bold;
		font-size: 72px;
	}

	.info .links {
		display: flex;
		flex-direction: column;
		font-weight: bold;
		font-size: 26px;
		gap: 26px;
	}

	.info .links a {
		display: flex;
		align-items: center;
		gap: 18px;
		color: #000;
		width: fit-content;
	}

	.profits {
		position: absolute;
		left: 100px;
		bottom: -5px;
	}

	.profits img {
		width: 500px;
	}

	.form, .form form .input, .form form .textarea {
		display: flex;
		flex-direction: column;
	}

	.form {
		grid-column: span 5;
		align-items: end;
		gap: 30px;
	}

	.form form {
		display: grid;
		width: 703px;
		grid-template-columns: 1fr 1fr;
		gap: 26px;
		background-color: #03045e;
		border-radius: 10px;
		padding: 40px;
	}

	.input-wrapper, .textarea {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	
	.label { 
		color	: #fff;
		font-weight: bold; 
	}

	.double, .textarea {
		grid-column: span 2;
	}

	textarea {
		font-family: "Mulish";
	}

	.form .button {
		width: 169px;
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 800px){
		display: flex;
		flex-direction: column;
		padding: 41px;
		gap: 30px;

		.space, .profits {
			display: none;
		}

		.info {
			gap: 30px;
		}

		.info .title {
			font-size: 36px;
		}

		.info .links {
			font-size: 18px;
		}

		.info .links img {
			width: 27px;
		}

		.form {
			justify-content: center;
			align-items: center;
		}

		.form form {
			display: flex;
			flex-direction: column;
			width: 80%;
			padding: 10%;
		}

		.form .button {
			width: 100%;
		}
	}
`