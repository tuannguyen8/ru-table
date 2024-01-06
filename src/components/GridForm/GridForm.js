import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './GridForm.scss';
import ProductTable from '../ProductTable/ProductTable';

const GridForm = ({
	prop1,
	prop2,
	dataSet,
	handleDiodeBoxClick,
	handleMaskBoxClick,
}) => {
	return (
		<Row className="rows">
			<Col xs={6} className="columns">
				<Row itemID="" className="rows">
					<Col xs={1} className="columns grid-cols">
						{prop1}
					</Col>
					<Col xs={11} className="columns product-cols">
						<ProductTable
							itemID={prop1}
							dataSet={dataSet}
							handleDiodeBoxClick={handleDiodeBoxClick}
							handleMaskBoxClick={handleMaskBoxClick}
						></ProductTable>
					</Col>
				</Row>
			</Col>
			<Col xs={6} className="columns">
				<Row itemID="" className="rows">
					<Col xs={11} className="columns">
						<ProductTable
							itemID={prop2}
							dataSet={dataSet}
							handleDiodeBoxClick={handleDiodeBoxClick}
							handleMaskBoxClick={handleMaskBoxClick}
						></ProductTable>
					</Col>
					<Col xs={1} className="columns grid-cols">
						{prop2}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default GridForm;
