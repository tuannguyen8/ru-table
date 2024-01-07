import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './MiscBlock.scss';

const MiscBlock = () => {
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
				<Row className="misc-block">
					<Col className="fake-cols"></Col>
					<Col xs={11} className="columns">
						<Row>
							<Col></Col>
							<Col
								xs={9}
								className="bottom-border right-border left-border misc-center"
							>
								<div>MISC Block</div>
							</Col>
							<Col></Col>
						</Row>
					</Col>
					<Col className="fake-cols"></Col>
				</Row>
			) : (
				<Row>
					<Col xs={1}></Col>

					<Col xs={11}>
						<Row>
							<Col xs={3}></Col>
							<Col
								xs={9}
								className="bottom-border right-border left-border misc-center-css"
							>
								<div>MISC Block</div>
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</>
	);
};

export default MiscBlock;
