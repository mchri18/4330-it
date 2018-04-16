import React from 'react';
import AccountNavbar from '../../components/AccountNavbar/AccountNavbar';
import { meQuery } from '../../components/TeamPageLayout/graphql/team';
import { graphql } from 'react-apollo';
import './Manager.css';
import Draggable from 'react-draggable';
import CardStack from './CardStack.js';
import Card from './Card.js';
import people from './people';

var BarChart = require("react-chartjs").Bar;

const ProfilePicture = ({ imgSrc, borderColor }) => (
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

const Account = ({ data: { me, loading } }) => {
  if (loading) {
    return null;
  }

  const chartData = {
    labels: ["Average waiting time before job is started (minutes)", "Average queue length", "Percentage of time the queue is empty", "Number of the jobs addressed on the day they were requested", "The number of hours out of an 8-hour day each technician is idle", "Average technician hours per job"],
    datasets: [
      {
        label: "Last Month's Average",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [98, 11, 10, 7, 3, 7.75]
      },
      {
        label: "This Week's Average",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [121, 10, 12, 5, 2, 7]
      }
    ]
  };

  const chartOptions = {
    responsive: true,

    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke: true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth: 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing: 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing: 1,

  };

  return (
    <div className="Account-page">
      <AccountNavbar />
      <div id="TechTracker">
        <h1>Technician Tracker</h1>
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
      <div id="QueueDisplay">
        <h1>Queue Display </h1>
        <div id="Customers">
          <h2>Customers</h2>
        </div>
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[50, 50]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
            <div className="handle"></div>
            <div>Nancy Stevens</div>
          </div>
        </Draggable>

        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[50, 50]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
            <div className="handle"></div>
            <div>Thomas Kip</div>
          </div>
        </Draggable>

        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[50, 50]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
            <div className="handle"></div>
            <div>Mike Richards</div>
          </div>
        </Draggable>
      </div>
      <div id="Reports">
        <h1> Reports </h1>
        <div id="MonthlyReports">
          <h2>Monthly Reports/Weekly Reports</h2>
        </div>
        <div id="BarChart">
          <BarChart
            data={chartData} options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default graphql(meQuery, { options: { fetchPolicy: 'network-only' } })(
  Account,
);