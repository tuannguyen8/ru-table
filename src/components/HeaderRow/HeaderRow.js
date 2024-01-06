import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './HeaderRow.scss';

const HeaderRow = () => {
	return (
		// <Row className="rows header-row bottom-border">
		// 	<Col xs={1} className="rows col-parent left-border right-border">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text right-border">Grid</Col>
		// 			<Col xs ={6} className="columns header-text">Diode</Col>
		// 		</Row>
		// 	</Col>
		// 	<Col xs={1} className="rows col-parent right-border">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text right-border">Unmask</Col>
		// 			<Col xs={6} className="columns header-text">RU#</Col>
		// 		</Row>
		// 	</Col>

		// 	<Col className="rows uuid-text">
		//         <p>
		//             Seat UUID
		//         </p>
		//     </Col>

		// 	<Col xs={1} className="rows col-parent left-border right-border">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text right-border">RU#</Col>
		// 			<Col xs ={6} className="columns header-text">Unmask</Col>
		// 		</Row>
		// 	</Col>
		// 	<Col xs={1} className="rows col-parent right-border">
		// 		<Row className="rows row-parent">
		// 			<Col xs={6} className="columns header-text right-border">Diode</Col>
		// 			<Col xs={6} className="columns header-text">Grid</Col>
		// 		</Row>
		// 	</Col>
		// </Row>
		<Row className="header-row top-border left-border right-border bottom-border">
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
			<Col className="letter-style left-border">Grid</Col>
		</Row>
	);
};

export default HeaderRow;
