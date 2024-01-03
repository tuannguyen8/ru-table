import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './HeaderRow.scss';

const HeaderRow = () => {
	return (
		<Row className="rows header-row">
			<Col xs={1} className="rows col-parent">
				<Row className="rows row-parent">
					<Col xs={6} className="columns header-text">Grid</Col>
					<Col xs ={6} className="columns header-text">Diode</Col>
				</Row>
			</Col>
			<Col xs={1} className="rows col-parent">
				<Row className="rows row-parent">
					<Col xs={6} className="columns header-text">Unmask</Col>
					<Col xs={6} className="columns header-text">RU#</Col>
				</Row>
			</Col>

			<Col className="rows uuid-text">
		        <p>
		            Seat UUID
		        </p>
		    </Col>

			<Col xs={1} className="rows col-parent">
				<Row className="rows row-parent">
					<Col xs={6} className="columns header-text">RU#</Col>
					<Col xs ={6} className="columns header-text">Unmask</Col>
				</Row>
			</Col>
			<Col xs={1} className="rows col-parent">
				<Row className="rows row-parent">
					<Col xs={6} className="columns header-text">Diode</Col>
					<Col xs={6} className="columns header-text">Grid</Col>
				</Row>
			</Col>
        </Row>
	);
};

export default HeaderRow;
