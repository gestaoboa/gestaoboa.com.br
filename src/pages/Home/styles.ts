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
	padding-top: 40px;
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
		font-size: 92px;
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

	.images {
		grid-column: span 5;
		position: relative;
		height: 766px;
	}

	.images .cellphone {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 100;
	}

	.images .elipse {
		position: absolute;
		bottom: 70px;
		right: 0px;
	}

	@media (max-width: 1700px){
		.content .title {
			font-size: 72px;
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

		.content .buttons {
			justify-content: center;
		}

		.images {
			display: none;
		}
	}

	@media (max-width: 800px){
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		padding-left: 41px;
		padding-right: 41px;

		.content .title {
			font-size: 36px;
		}

		.content .subtitle {
			font-size: 16px;
		}

		.content .buttons {
			flex-direction: column;
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
		bottom: -45px;
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
`

export const Contact = styled.div`
	display: grid;
	padding: 170px;
	padding-left: 100px;
	padding-right: 100px;
	padding-bottom: 230px;
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
		gap: 12px;
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

	.form form .input, .form form .textarea {
		gap: 7px;
		color: #fff;
	}

	.input input {
		height: 52px;
	}

	.input input, .textarea textarea {
		border-radius: 10px;
		padding-left: 10px;
		border: none;
	}

	.label { font-weight: bold; }

	.double, .textarea {
		grid-column: span 2;
	}

	textarea {
		font-family: "Mulish";
	}

	.form .button {
		width: 50%;
		display: flex;
		justify-content: flex-end;
	}
`