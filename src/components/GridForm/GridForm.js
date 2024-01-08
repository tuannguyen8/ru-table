import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './GridForm.scss';
import ProductTable from '../ProductTable/ProductTable';

/* Each GridForm component have 2 ProductTable component */
const GridForm = (props) => {
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
				<Row className="rows top-border">
					{/* Left column with a width of 6 columns */}
					{/* <Col xs={6}  className="columns"> */}
					<Col xs={12} lg={6} className="columns">
						<Row itemID="" className="rows">
							<Col
								xs={1}
								className={`columns grid-cols left-border bottom-border ${
									props.prop1 === '1'
										? 'grid-first-background'
										: 'grid-third-background'
								} `}
							>
								{props.prop1}
							</Col>
							<Col xs={11} className="columns product-cols">
								{/* First ProductTable component */}
								<ProductTable
									itemID={props.prop1}
									dataSet={props.dataSet}
									handleDiodeBoxClick={props.handleDiodeBoxClick}
									handleMaskBoxClick={props.handleMaskBoxClick}
								></ProductTable>
							</Col>
						</Row>
					</Col>

					{/* Right column with a width of 6 columns */}
					{/* <Col xs={6} className="columns"> */}
					<Col xs={12} lg={6} className="columns">
						<Row itemID="" className="rows">
							<Col xs={11} className="columns">
								{/* Second ProductTable component */}
								<ProductTable
									itemID={props.prop2}
									dataSet={props.dataSet}
									handleDiodeBoxClick={props.handleDiodeBoxClick}
									handleMaskBoxClick={props.handleMaskBoxClick}
								></ProductTable>
							</Col>
							<Col
								xs={1}
								className={`columns right-border bottom-border grid-cols ${
									props.prop2 === '2'
										? 'grid-second-background'
										: 'grid-fourth-background'
								} `}
							>
								{props.prop2}
							</Col>
						</Row>
					</Col>
				</Row>
			) : (
				<Row className="rows top-border">
					{/* Left column with a width of 6 columns */}
					{/* <Col xs={6}  className="columns"> */}
					<Col xs={12} lg={6} className="columns">
						<Row itemID="" className="rows">
							<Col
								xs={1}
								className={`columns grid-cols full-border left-border bottom-border ${
									props.prop1 === '1'
										? 'grid-first-background'
										: 'grid-third-background'
								} `}
							>
								{props.prop1}
							</Col>
							<Col xs={11} className="columns product-cols">
								{/* First ProductTable component */}
								<ProductTable
									itemID={props.prop1}
									dataSet={props.dataSet}
									handleDiodeBoxClick={props.handleDiodeBoxClick}
									handleMaskBoxClick={props.handleMaskBoxClick}
								></ProductTable>
							</Col>
						</Row>
					</Col>

					{/* Right column with a width of 6 columns */}
					{/* <Col xs={6} className="columns"> */}
					<Col xs={12} lg={6} className="columns">
						<Row itemID="" className="rows">
							<Col
								xs={1}
								className={`columns left-border right-border bottom-border grid-cols ${
									props.prop2 === '2'
										? 'grid-second-background'
										: 'grid-fourth-background'
								} `}
							>
								{props.prop2}
							</Col>
							<Col xs={11} className="columns">
								{/* Second ProductTable component */}
								<ProductTable
									itemID={props.prop2}
									dataSet={props.dataSet}
									handleDiodeBoxClick={props.handleDiodeBoxClick}
									handleMaskBoxClick={props.handleMaskBoxClick}
								></ProductTable>
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</>
	);
};

export default GridForm;
