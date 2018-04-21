import React from 'react';
import './TechTracker.css';
import CardStack from '../../ManagerComponents/CardStack.js';
import Card from '../../ManagerComponents/Card.js';
import people from './people';

const TechTracker = (props) => (
    <div id="TechTracker">
        <h1>Technician Profile</h1>
    <div id = "cards">
        <CardStack
            height={500}
            width={window.innerWidth}
            background="#FFFFFF"
            hoverOffset={25}>

            {people.map((person, i) =>
                <Card
                    key={i}
                    background={person.background}>
                    <TeamMemberCard {...person} />
                </Card>
            )}

        </CardStack>
    </div>
    </div>
);

const ProfilePicture = ({ imgSrc, borderColor }) => (
    //eslint-disable-next-line
    <img
        style={{
            width: '90px',
            height: '90px',
            borderRadius: '100%',
            border: `3px solid ${borderColor}`,
        }}
        src={imgSrc}
    />
);

const DetailsRow = ({ icon, title, summary }) => {
    const renderSummary = () => {
        if (summary)	return (
            <p style={{ fontWeight: 300, lineHeight: 1.45 }}>
                {summary}
            </p>
        );
        return null;
    };

    return (
        <div style={styles.detailsRow.row}>
			<span
                className={`icon ${icon}`}
                style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
            />
            <div style={{ width: '90%' }}>
                <h2 style={styles.detailsRow.title}>
                    {title}
                </h2>
                {renderSummary()}
            </div>
        </div>
    );
};

const TeamMemberCard = (props) => (
    <div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
        <header style={styles.cardHeader} className='card-header-details'>
            <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
            <div>
                <h1 style={styles.headerName}>{props.name}</h1>
                <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
            </div>
        </header>

        <div style={{color: '#fff'}}>
            <DetailsRow
                icon='ion-ios-telephone-outline'
                title={props.mobileNo}
            />

            <DetailsRow
                icon='ion-ios-location-outline'
                title={props.location}
            />

            <DetailsRow
                icon='icon ion-ios-paper-outline'
                title='Main Role'
                summary={props.role}
            />
        </div>
    </div>
);

const styles = {
    cardHeader: {
        display: 'flex',
        height: '125px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        color: '#fff',
        textAlign: 'right',
    },
    headerName: {
        margin: 5,
        fontWeight: 500,
        fontSize: '25px',
        textAlign: 'right'
    },
    headerTitle: {
        margin: '4px 0 0',
        fontWeight: 300,
        fontSize: '17px',
        opacity: 0.8,
        textAlign: 'right'
    },
    detailsRow: {
        row: {
            width: '100%',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            margin: '25px 0',
        },
        icon: {
            display: 'block',
            width: '25px',
            height: '30px',
            margin: '0 20px 0 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            fontSize: '22px',
        },
        title: {
            fontWeight: 500,
            fontSize: '20px',
            margin: 0,
            fontStyle: 'italic',
            textAlign: 'center',
        },
    },
};



export default TechTracker;
