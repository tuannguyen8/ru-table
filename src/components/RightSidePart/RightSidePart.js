import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './RightSidePart.scss';

const RightSidePart = (props) => {
	const [screenSize, setScreenSize] = useState(window.innerWidth);

	useEffect(() => {
		// Update screen size when the window is resized
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{screenSize >= 992 ? (
				<Row
					key={uuidv4()}
					className="rows product-rows bottom-border responsive-lg-screen"
				>
					{/* Offset column*/}
					<Col xs={1} className="columns product-columns"></Col>

					{/* Column for the product name with a background color */}
					{/* <Col
					xs={8}
					style={{ backgroundColor: props.productBackgroundColor }}
					className="columns product-columns products left-border right-border"
				> */}
					<Col
						lg={8}
						xs={9}
						style={{ backgroundColor: props.productBackgroundColor }}
						className="columns product-columns products left-border right-border"
					>
						{props.item.product}
					</Col>

					{/* Column for the "ru" box */}
					<Col xs={1} className="columns product-columns ru-box right-border">
						{props.i}
					</Col>

					{/* Column for the unmask box */}
					<Col
						value={props.item.product}
						onClick={() => props.handleMaskBoxClick(props.item.product)}
						xs={1}
						className={`columns product-columns unmask-box right-border ${
							props.item.unmask ? 'yellow-background' : ''
						}`}
					></Col>

					{/* Column for the diode box */}
					<Col
						data-key={props.item.id}
						onClick={() => props.handleDiodeBoxClick(props.item.id)}
						xs={1}
						className={`columns product-columns diode-box right-border ${
							props.item.diode ? 'blue-background' : ''
						}`}
					></Col>
				</Row>
			) : (
				<Row
					key={uuidv4()}
					className="rows product-rows bottom-border responsive-xs-screen"
				>
					{/* Column for the diode box */}
					<Col
						data-key={props.item.id}
						onClick={() => props.handleDiodeBoxClick(props.item.id)}
						xs={1}
						className={`columns product-columns diode-box right-border ${
							props.item.diode ? 'blue-background' : ''
						}`}
					></Col>

					{/* Column for the unmask box */}
					<Col
						value={props.item.product}
						onClick={() => props.handleMaskBoxClick(props.item.product)}
						xs={1}
						className={`columns product-columns unmask-box right-border ${
							props.item.unmask ? 'yellow-background' : ''
						}`}
					></Col>

					{/* Column for the "ru" box */}
					<Col xs={1} className="columns product-columns ru-box right-border ">
						{props.i}
					</Col>

					{/* Column for the product name with a background color */}
					{/* <Col
					xs={8}
					style={{ backgroundColor: props.productBackgroundColor }}
					className="columns product-columns products right-border"
				> */}
					<Col
						xs={9}
						lg={8}
						style={{ backgroundColor: props.productBackgroundColor }}
						className="columns product-columns products right-border"
					>
						{props.item.product}
					</Col>
				</Row>
			)}
		</>
	);
};

export default RightSidePart;
