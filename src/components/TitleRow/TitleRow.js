import React from 'react';
import { Row} from 'react-bootstrap';
import './TitleRow.scss';


const TitleRow = () => {
	return (
		<Row className="rows title-row">
			<div className="ru-title">
				<span>TAP IN DB-VIEW</span>
			</div>
		</Row>
	);
};

export default TitleRow;
