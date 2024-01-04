import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './GridForm.scss';
import ProductTable from '../ProductTable/ProductTable';

const GridForm = ({ prop1, prop2, rawData, handleDiodeBoxClick, handleMaskBoxClick }) => {
	return (
		<Row className="rows">
			<Col className="columns">
				<Row itemID= "1111" className="rows">
					<Col xs={1} className="columns grid-cols">{prop1}</Col>
					<Col xs={11} className="columns">
            <ProductTable itemID={prop1} rawData={rawData} handleDiodeBoxClick={handleDiodeBoxClick} handleMaskBoxClick={handleMaskBoxClick} ></ProductTable>
          </Col>
				</Row>
			</Col>
			<Col className="columns">
				<Row itemID="2222" className="rows">
					<Col xs={11}  className="columns">
            <ProductTable itemID={prop2} rawData={rawData} handleDiodeBoxClick={handleDiodeBoxClick} handleMaskBoxClick={handleMaskBoxClick} ></ProductTable>
          </Col>
					<Col xs={1} className="columns grid-cols">{prop2}</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default GridForm;
