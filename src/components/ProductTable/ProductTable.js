import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './ProductTable.scss';

const ProductTable = (props) => {
	const renderRows = () => {
		const rows = [];
		switch (props.itemID) {
			case '1':
				for (let i = 0; i < 20; i++) {
					let item = props.dataSet[i];
					if (item) {
						const productBackgroundColor = item.background;
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col
									data-key={item.id}
									onClick={() => props.handleDiodeBoxClick(item.id)}
									xs={1}
									className={`columns product-columns diode-box right-border bottom-border ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
								<Col
									value={item.product}
									onClick={() => props.handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box right-border bottom-border ${
										item.unmask ? 'yellow-background' : ''
									}`}
								></Col>
								<Col
									xs={1}
									className="columns product-columns ru-box right-border bottom-border"
								>
									{i}
								</Col>
								<Col
									xs={8}
									style={{ backgroundColor: productBackgroundColor }}
									className="columns product-columns products right-border bottom-border"
								>
									{item.product}
								</Col>
							</Row>
						);
					}
				}
				break;
			case '2':
				for (let i = 40; i < 60; i++) {
					const item = props.dataSet[i];
					if (item) {
						const productBackgroundColor = item.background;
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col xs={1} className="columns product-columns"></Col>
								<Col
									xs={8}
									style={{ backgroundColor: productBackgroundColor }}
									className="columns product-columns products left-border right-border bottom-border"
								>
									{item.product}
								</Col>
								<Col
									xs={1}
									className="columns product-columns ru-box right-border bottom-border"
								>
									{i}
								</Col>
								<Col
									value={item.product}
									onClick={() => props.handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box right-border bottom-border ${
										item.unmask ? 'yellow-background' : ''
									}`}
								></Col>
								<Col
									data-key={item.id}
									onClick={() => props.handleDiodeBoxClick(item.id)}
									xs={1}
									className={`columns product-columns diode-box right-border bottom-border ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
							</Row>
						);
					}
				}
				break;
			case '3':
				for (let i = 20; i < 40; i++) {
					let item = props.dataSet[i];
					if (item) {
						const productBackgroundColor = item.background;
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col
									data-key={item.id}
									onClick={() => props.handleDiodeBoxClick(item.id)}
									xs={1}
									className={`columns product-columns diode-box right-border top-border ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
								<Col
									value={item.product}
									onClick={() => props.handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box right-border top-border ${
										item.unmask ? 'yellow-background' : ''
									}`}
								></Col>
								<Col
									xs={1}
									className="columns product-columns ru-box right-border top-border"
								>
									{i}
								</Col>
								<Col
									xs={8}
									style={{ backgroundColor: productBackgroundColor }}
									className="columns product-columns products right-border top-border"
								>
									{item.product}
								</Col>
							</Row>
						);
					}
					
				}

				break;
			case '4':
				for (let i = 60; i < 80; i++) {
					const item = props.dataSet[i];
					if (item) {
						const productBackgroundColor = item.background;
						rows.push(
							<Row key={uuidv4()} className="rows product-rows">
								<Col xs={1} className="columns product-columns"></Col>
								<Col
									xs={8}
									style={{ backgroundColor: productBackgroundColor }}
									className="columns product-columns products left-border right-border top-border"
								>
									{item.product}
								</Col>
								<Col
									xs={1}
									className="columns product-columns ru-box right-border top-border"
								>
									{i}
								</Col>
								<Col
									value={item.product}
									onClick={() => props.handleMaskBoxClick(item.product)}
									xs={1}
									className={`columns product-columns unmask-box right-border top-border ${
										item.unmask ? 'yellow-background' : ''
									}`}
								></Col>
								<Col
									data-key={item.id}
									onClick={() => props.handleDiodeBoxClick(item.id)}
									xs={1}
									className={`columns product-columns diode-box right-border top-border ${
										item.diode ? 'blue-background' : ''
									}`}
								></Col>
							</Row>
						);
					}
				}
				break;
			default:
		}
		return rows;
	};

	return <>{renderRows()}</>;
};

export default ProductTable;
