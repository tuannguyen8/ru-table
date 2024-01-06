import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './GridForm.scss';
import ProductTable from '../ProductTable/ProductTable';

const GridForm = (props) => {
	return (
		<Row className="rows">
			<Col xs={6} className="columns">
				<Row itemID="" className="rows">
					<Col xs={1} className="columns grid-cols">
						{props.prop1}
					</Col>
					<Col xs={11} className="columns product-cols">
						<ProductTable
							itemID={props.prop1}
							dataSet={props.dataSet}
							handleDiodeBoxClick={props.handleDiodeBoxClick}
							handleMaskBoxClick={props.handleMaskBoxClick}
						></ProductTable>
					</Col>
				</Row>
			</Col>
			<Col xs={6} className="columns">
				<Row itemID="" className="rows">
					<Col xs={11} className="columns">
						<ProductTable
							itemID={props.prop2}
							dataSet={props.dataSet}
							handleDiodeBoxClick={props.handleDiodeBoxClick}
							handleMaskBoxClick={props.handleMaskBoxClick}
						></ProductTable>
					</Col>
					<Col xs={1} className="columns grid-cols">
						{props.prop2}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default GridForm;
