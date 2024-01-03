import React from 'react';
import TitleRow from '../TitleRow/TitleRow';
import HeaderRow from '../HeaderRow/HeaderRow';
import Midhalf from '../Midhalf/Midhalf';
import GridForm from '../GridForm/GridForm';
import './MainContainer.scss'
import { Container, Row, Col } from 'react-bootstrap';

const MainContainer = () => {
	return (
		<Container>
			<Row className="rows">
				<Col xs={11} className="columns left-side">
					<TitleRow></TitleRow>
					<HeaderRow></HeaderRow>
					{/* <Row className="rows">3</Row> */}
					<GridForm prop1="1" prop2="2"></GridForm>
					
					<Midhalf></Midhalf>
					{/* <Row className="rows">5</Row> */}
					<GridForm prop1="3" prop2="4"></GridForm>
					
					<Row className="rows">MISC Block</Row>
				</Col>
				<Col xs={1} className="columns right-side">
					I/Os
				</Col>
			</Row>
		</Container>
	);
};

export default MainContainer;
