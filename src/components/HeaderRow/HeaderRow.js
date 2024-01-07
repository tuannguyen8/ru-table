import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './HeaderRow.scss';

const HeaderRow = () => {
	return (
		<Row className="header-row left-border right-border">
			<Col className=" header-cols right-border">
				<div className="letter-style">Grid</div>
			</Col>
			<Col xs={11} className="columns">
				<Row>
					<Col>
						<Row>
							<Col className="letter-style header-cols">
								<div className="letter-style">Diode</div>
							</Col>
							<Col className="letter-style header-cols left-border right-border">
								<div className="letter-style">Unmask</div>
							</Col>
							<Col className="letter-style header-cols">
								<div className="letter-style">RU#</div>
							</Col>
						</Row>
					</Col>
					<Col xs={9} className="left-border right-border uuid-text">
						<p>Seat UUID</p>
					</Col>
					<Col>
						<Row>
							<Col className="letter-style header-cols">
								<div className="letter-style">RU#</div>
							</Col>
							<Col className="letter-style header-cols left-border right-border">
								<div className="letter-style">Unmask</div>
							</Col>
							<Col className="letter-style header-cols">
								<div className="letter-style">Diode</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col className="header-cols left-border">
				<div className="letter-style">Grid</div>
			</Col>
		</Row>
	);
};

export default HeaderRow;
