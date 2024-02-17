import React from 'react';
import { useParams } from 'react-router-dom';
import ColorDetail from './ColorDetail';

function FilterColorDetails({ colors }) {
    const { color } = useParams();

    if (color) {
        const currentColor = colors.find(
            colorObj => colorObj.color.toLowerCase === color.toLowerCase()
        );
        return <ColorDetail color={currentColor} />
    }

    return null;
}

export default FilterColorDetails;