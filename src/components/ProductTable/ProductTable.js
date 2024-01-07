import React from 'react';
import './ProductTable.scss';
import LeftSidePart from '../LeftSidePart/LeftSidePart';
import RightSidePart from '../RightSidePart/RightSidePart';
import { v4 as uuidv4 } from 'uuid';

const ProductTable = (props) => {
	const renderRows = () => {
		let rows = [];

		// Switch statement based on the itemID prop
		switch (props.itemID) {
			case '1':
				// Iterate over the first 20 elements in the dataSet
				for (let i = 0; i < 20; i++) {

					// Retrieve the current item from the dataSet
					let item = props.dataSet[i];

					// Check if the item exists
					if (item) {

						// Extract the background color from the item
						let productBackgroundColor = item.background;

						// Create a LeftSidePart component
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
			// Iterate over elements with indices from 40 to 59 in the dataSet
				for (let i = 40; i < 60; i++) {

					// Retrieve the current item from the dataSet
					let item = props.dataSet[i];

					// Check if the item exists
					if (item) {

						// Extract the background color from the item
						let productBackgroundColor = item.background;

						// Create a RightSidePart component for each item
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
				// Iterate over elements with indices from 20 to 40 in the dataSet
				for (let i = 20; i < 40; i++) {

					// Retrieve the current item from the dataSet
					let item = props.dataSet[i];

					// Check if the item exists
					if (item) {

						// Extract the background color from the item
						let productBackgroundColor = item.background;

						// Create a LeftSidePart component
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
				// Iterate over elements with indices from 60 to 80 in the dataSet
				for (let i = 60; i < 80; i++) {

					// Retrieve the current item from the dataSet
					let item = props.dataSet[i];

					// Check if the item exists
					if (item) {

						// Extract the background color from the item
						let productBackgroundColor = item.background;

						// Create a RightSidePart component for each item
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
