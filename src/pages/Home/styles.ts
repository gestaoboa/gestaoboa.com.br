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
		gap: 57px;
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
		width: 850px;
	}

	.content .subtitle span {
		font-weight: bold;
		color: #03045E;
	}

	.content .buttons {
		display: flex;
		width: 850px;
		gap: 35px;
		align-items: center;
		justify-content: center;
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

	@media (max-width: 800px){
		display: flex;
		flex-direction: column;
		padding: 30px 10px;
		gap: 50px;

		.content .title {
			font-size: 32px;
			text-align: center;
			width: 100%;
		}

		.content .subtitle {
			font-size: 20px;
			font-weight: normal;
			text-align: center;
			width: 100%;
		}
		.content .title {
			font-size: 32px;
			text-align: center;
		}
		.content .buttons {
			flex-direction: column;
			gap: 10px;
			width: 100%;
		}

		.images {
			width: 100%;
		}

		.images .cellphone, .images .elipse {
			right: 0px;
			left: 0px;
			top: 0px;
			bottom: 0px;
			margin: 0 auto;
		}

		.images .elipse {
			width: 90%;
		}
	}


	@media (max-width: 600px){	
		.images {
			display: flex !important;
			height: fit-content;
			width: 100%;
			height: fit-content;
			align-self: center;
			justify-content: center;
			align-items: center;
			// padding-top: 20px;
		}

		.images .cellphone {
			height: unset;
			width: 90%;
			position: unset !important;
		}

		.images .elipse {
			display: none;
		}

		.content {
			width: calc(100% - 20px);
		}

		.content .title {
			font-size: 32px;
		}

		.content .subtitle {
			font-size: 20px;
		}

		.content .buttons .button {
			width: 100%;
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

	@media (max-width: 600px){
		.item .number {
			font-size: 32px;
		}

		.item .text {
			font-size: 18px;
		}
	}
`

export const Solutions = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: span 12;
	position: relative;

	.solutionBanner {
		width: 100%;
		display: flex;
		height: 500px;
		background-image: url(/entrepreneur.png);
		background-position: center;
		background-size: cover;
		position: relative;
		justify-content: center;
		align-items: end;
	}

	.solutionBanner .vignette {
		display: flex;
		width: 100%;
		position: absolute;
		height: 500px;
		background: linear-gradient(rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.8));
	}

	.solutionBanner .title {
		font-size: 72px;
		font-weight: bold;
		margin-bottom: 100px;
		color: #fff;
		z-index: 100;
	}

	.benefits {
		padding: 100px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 100px;
		align-items: center;
		width: calc(100% - 200px);
	}

	.benefits .benefit {
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: center;
		height: 517px;
	}

	.benefits .benefit img {
		width: 295px;
		height: 295px;
	}

	.benefits .benefit .title {
		width: 295px;
		font-weight: bold;
		font-size: 32px;
	}

	.benefits .benefit .subtitle {
		width: 295px;
		font-weight: lighter;
		font-size: 18px;
	}

	.tutorial {
		display: grid;
		padding: 200px;
		align-items: center;
		justify-content: center;
		width: calc(100% - 400px);
		grid-template-columns: 3fr 1fr;
		grid-column-gap: 50px;
	}

	.tutorial .callout {
		display: flex;
		flex-direction: column;
		gap: 50px;
		justify-content: center;
	}

	.tutorial .callout .title {
		font-size: 48px;
	}

	.tutorial .callout .description {
		font-size: 24px;
	}

	.tutorial .callout span {
		font-weight: bold;
	}

	.tutorial .callout .buttons {
		display: flex;
		flex-direction: column;
		justify-content: center;	
		align-items: center;
		gap: 44px;
	}

	.tutorial .callout .buttons .top {
		display: flex;
		gap: 72px;
		align-items: center;
	}

	.tutorial .callout .buttons a {
		width: 276px;
		height: 50px;
		text-align: center;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		font-weight: bold;
		gap: 10px;
	}

	a.unfocused {
		border: 1px solid #03045E;
		color: #03045E;
	}

	a.focused {
		background-color: #03045E;
		color: #fff;
	}

	.player { 
		display: flex;
		justify-content: center;
	}

	.testimonies {
		display: flex;
		flex-direction: column;
		padding: 100px;
		width: calc(100% - 200px);
		gap: 60px;
		align-items: center;
	}

	.testimonies .heading {
		font-size: 48px;
		width: 80%;
		text-align: center;
		font-weight: bold;
		margin-bottom: 100px;
	}

	.testimonies .card {
		display: flex;
		width: 80%;
		border-radius: 20px;
		box-shadow: 20px 10px 20px rgba(0,0,0,0.1);
		background-color: #fff;
	}

	.testimonies .card img {
		width: 500px;
		border-radius: 20px 0px 0px 20px;
	}

	.testimonies .card .texts {
		width: calc(100% - 80px);
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 100px;
	}

	.testimonies .card .texts .title {
		font-size: 48px;
		font-weight: bold;
	}

	.testimonies .card .texts .desc {
		font-size: 18px;
	}

	.testimonies .card .texts .person {
		display: flex;
		font-style: italic;
	}

	
	@media (max-width: 600px){
		gap: 60px;

		.solutionBanner {
			height: 350px;
			background-image: url(/unsplash_-sRVfY0f2d8.png);
		}

		.solutionBanner .vignette {
			height: 350px;
			background: linear-gradient(rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.8));
			background-position: left;
		}

		.solutionBanner .title {
			font-size: 32px;
			margin-bottom: 60px;
			justify-content: center;
			text-align: center;
		}

		.benefits {
			padding: 10px;
			display: flex;
			width: calc(100% - 20px);
			flex-direction: column;
			padding-top: 30px;
			gap: 50px;
		}

		.benefits .benefit {
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: center;
			height: fit-content;
		}

		.benefits .benefit img {
			width: 250px;
			height: 250px;
		}

		.benefits .benefit .title {
			width: calc(100% - 20px);
			font-size: 26px;
		}

		.benefits .benefit .subtitle {
			width: calc(100% - 20px);
			font-weight: normal;
			font-size: 16px;
		}

		.testimonies {
			padding: 10px;
			width: calc(100% - 20px);
			gap: 60px;	
		}

		.testimonies .heading {
			font-size: 32px;
			width: calc(100% - 20px);
			margin-bottom: 0px;
		}

		.testimonies .card {
			width: calc(100% - 20px);
			flex-direction: column;
		}

		.testimonies .card img {
			width: 100%;
			border-radius: 20px 20px 0px 0px;
		}

		.testimonies .card .texts .title {
			font-size: 26px;
			font-weight: bold;
		}

		.testimonies .card .texts {
			width: calc(100% - 60px);
			padding: 30px;
			gap: 30px;
		}

		.testimonies .card .texts .desc {
			font-size: 18px;
		}

		.tutorial {
			display: flex;
			flex-direction: column;
			padding: 10px;
			width: calc(100% - 20px);
			margin-bottom: 50px;
		}

		.tutorial .callout {
			width: calc(100% - 20px);
			margin-bottom: 50px;
		}

		.tutorial .callout .title {
			font-size: 32px;
		}

		.tutorial .callout .description {
			font-size: 20px;
		}

		.tutorial .callout .buttons {
			display: flex;
			flex-direction: column;
			justify-content: center;	
			align-items: center;
			gap: 30px;
		}

		.tutorial .callout .buttons .or {
			display: none;
		}

		.tutorial .callout .buttons .top {
			display: flex;
			flex-direction: column;
			gap: 30px;
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