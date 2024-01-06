import React from 'react';
import './ProductTable.scss';
import LeftSidePart from '../LeftSidePart/LeftSidePart';
import RightSidePart from '../RightSidePart/RightSidePart';
import { v4 as uuidv4 } from 'uuid';

const ProductTable = (props) => {
	const renderRows = () => {
		let rows = [];
		switch (props.itemID) {
			case '1':
				for (let i = 0; i < 20; i++) {
					let item = props.dataSet[i];
					if (item) {
						let productBackgroundColor = item.background;
						rows.push(
							<LeftSidePart
								key={uuidv4()}
								productBackgroundColor={productBackgroundColor}
								i={i}
								item={item}
								dataSet={props.dataSet}
								handleDiodeBoxClick={props.handleDiodeBoxClick}
								handleMaskBoxClick={props.handleMaskBoxClick}
							></LeftSidePart>
						);
					}
				}

				break;
			case '2':
				for (let i = 40; i < 60; i++) {
					let item = props.dataSet[i];
					if (item) {
						let productBackgroundColor = item.background;
						rows.push(
							<RightSidePart
								key={uuidv4()}
								productBackgroundColor={productBackgroundColor}
								i={i}
								item={item}
								dataSet={props.dataSet}
								handleDiodeBoxClick={props.handleDiodeBoxClick}
								handleMaskBoxClick={props.handleMaskBoxClick}
							></RightSidePart>
						);
					}
				}

				break;
			case '3':
				for (let i = 20; i < 40; i++) {
					let item = props.dataSet[i];
					if (item) {
						let productBackgroundColor = item.background;
						rows.push(
							<LeftSidePart
								key={uuidv4()}
								productBackgroundColor={productBackgroundColor}
								i={i}
								item={item}
								dataSet={props.dataSet}
								handleDiodeBoxClick={props.handleDiodeBoxClick}
								handleMaskBoxClick={props.handleMaskBoxClick}
							></LeftSidePart>
						);
					}
				}

				break;
			case '4':
				for (let i = 60; i < 80; i++) {
					let item = props.dataSet[i];
					if (item) {
						let productBackgroundColor = item.background;
						rows.push(
							<RightSidePart
								key={uuidv4()}
								productBackgroundColor={productBackgroundColor}
								i={i}
								item={item}
								dataSet={props.dataSet}
								handleDiodeBoxClick={props.handleDiodeBoxClick}
								handleMaskBoxClick={props.handleMaskBoxClick}
							></RightSidePart>
						);
					}
				}
				break;
			default:
		}
		return rows;
	};

	return <>{renderRows()}</>;
};

export default ProductTable;
