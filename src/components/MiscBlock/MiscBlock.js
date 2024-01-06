import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MiscBlock.scss';

const MiscBlock = () => {
	return (
		<Row className="misc-block top-border">
			<Col className="fake-cols"></Col>
			<Col xs={11} className="columns top-border">
				<Row>
					<Col></Col>
					<Col xs={9} className=" misc-center">
						<div>MISC Block</div>
					</Col>
					<Col></Col>
				</Row>
			</Col>
			<Col className="fake-cols"></Col>
		</Row>
	);
};

export default MiscBlock;
