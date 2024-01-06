import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MiscBlock.scss';

const MiscBlock = () => {
	return (
		<Row className="misc-block">
			<Col className="fake-cols"></Col>
			<Col xs={11} className="columns">
				<Row >
					<Col></Col>
					<Col xs={9} className="bottom-border right-border left-border misc-center">
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
