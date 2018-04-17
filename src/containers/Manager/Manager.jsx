import React from 'react';
import ManNavBar from '../../components/ManagerComponents/ManNavBar/ManNavBar';
import Reports from '../../components/ManagerComponents/Reports/Reports';
import QueueDisplay from '../../components/ManagerComponents/QueueDisplay/QueueDisplay';
import TechTracker from '../../components/ManagerComponents/TechTracker/TechTracker';
import './Managerpage.css';
import ManFooter from '../../components/ManagerComponents/ManFooter/ManFooter';
import { meQuery } from '../../components/TeamPageLayout/graphql/team';
import { graphql } from 'react-apollo';

const Account = ({ data: { me, loading } }) => {
    if (loading) {
        return null;
    }

return (
    <div id="manager">
        <header >
            <ManNavBar />
        </header>
        <div className="Main-page">
            <div id="techtracker">
                <TechTracker />
            </div>
            <div id="queueqisplay">
                <QueueDisplay/>
            </div>
            <div id="reports">
                <Reports/>
            </div>
        </div>
        <ManFooter />
    </div>
);


export default graphql(meQuery, { options: { fetchPolicy: 'network-only' } })(
    Account,
);
