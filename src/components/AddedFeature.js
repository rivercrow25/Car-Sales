import React from 'react';
import { connect } from 'react-redux'
import { deleteFeatures } from '../actions/actions'

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.deleteFeatures(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { deleteFeatures })(AddedFeature);
