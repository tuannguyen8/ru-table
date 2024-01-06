import React from 'react';
import { Row} from 'react-bootstrap';
import './TitleRow.scss';


const TitleRow = () => {
	return (
		<Row className="rows title-row full-border">
			<div className="ru-title">
				<p>TAP-IN DB VIEW</p>
			</div>
		</Row>
	);
};

export default TitleRow;
