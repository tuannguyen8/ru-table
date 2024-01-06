import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './LeftSidePart.scss';

const LeftSidePart = (props) => {
	return (
		<>
			<Row key={uuidv4()} className="rows product-rows">
				<Col
					data-key={props.item.id}
					onClick={() => props.handleDiodeBoxClick(props.item.id)}
					xs={1}
					className={`columns product-columns diode-box right-border bottom-border ${
						props.item.diode ? 'blue-background' : ''
					}`}
				></Col>
				<Col
					value={props.item.product}
					onClick={() => props.handleMaskBoxClick(props.item.product)}
					xs={1}
					className={`columns product-columns unmask-box right-border bottom-border ${
						props.item.unmask ? 'yellow-background' : ''
					}`}
				></Col>
				<Col
					xs={1}
					className="columns product-columns ru-box right-border bottom-border"
				>
					{props.i}
				</Col>
				<Col
					xs={8}
					style={{ backgroundColor: props.productBackgroundColor }}
					className="columns product-columns products right-border bottom-border"
				>
					{props.item.product}
				</Col>
			</Row>
		</>
	);
};

export default LeftSidePart;
