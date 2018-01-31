import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div class="fixed-action-btn">
                <Link className="btn-floating btn-large red"
                      to='/surveys/new'>
                    <i class="large material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;