import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview =({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div style={{fontSize: 'medium'}}>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h4
                style={{color: '#ee6e73'}}
            >Please confirm your entries</h4>
                {reviewFields}
            <button
                style={{marginTop: '20px'}}
                className="yellow darken-3 btn-flat left white-text"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                style={{marginTop: '20px'}}
                className="teal btn-flat right white-text"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));