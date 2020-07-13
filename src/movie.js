import React from "react";
import PropType from "prop-types";

function Movise(id, year, title, summary,poster) {
return <h4>{title}</h4>
}

Movise.prototype = {
    id:PropType.number.isRequired,
    year:PropType.number.isRequired,
    title:PropType.string.isRequired,
    summary:PropType.string.isRequired,
    poster:PropType.string.isRequired,
}