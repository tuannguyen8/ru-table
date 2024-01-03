import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './GridForm.scss';
import ProductTable from '../ProductTable/ProductTable';

const GridForm = (props) => {
	return (
		// <Row className="rows grid-form">
		// 	<Col xs={1} className="rows col-parent">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text">
		// 				1
		// 			</Col>
		// 			<Col xs={6} className="columns header-text"></Col>
		// 		</Row>
		// 	</Col>
		// 	<Col xs={1} className="rows col-parent">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text"></Col>
		// 			<Col xs={6} className="columns header-text"></Col>
		// 		</Row>
		// 	</Col>

		// 	<Col className="rows product-cols gx-5">
		// 		<Row className='rows product-rows'>
		//       <Col xs={5} className='columns products'>Core i1</Col>
		//       <Col xs={5} className='columns products'>Core i2</Col>
		//     </Row>
		// 	</Col>

		// 	<Col xs={1} className="rows col-parent">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text"></Col>
		// 			<Col xs={6} className="columns header-text"></Col>
		// 		</Row>
		// 	</Col>
		// 	<Col xs={1} className="rows col-parent">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text"></Col>
		// 			<Col xs={6} className="columns header-text">
		// 				2
		// 			</Col>
		// 		</Row>
		// 	</Col>
		// </Row>
		<Row className="rows">
			<Col className="columns">
				<Row itemID= "1111" className="rows">
					<Col xs={1} className="columns grid-cols">{props.prop1}</Col>
					<Col xs={11} className="columns">
            <ProductTable itemID={props.prop1} ></ProductTable>
          </Col>
				</Row>
			</Col>
			<Col className="columns">
				<Row itemID="2222" className="rows">
					<Col xs={11}  className="columns">
            <ProductTable itemID={props.prop2} ></ProductTable>
          </Col>
					<Col xs={1} className="columns grid-cols">{props.prop2}</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default GridForm;
