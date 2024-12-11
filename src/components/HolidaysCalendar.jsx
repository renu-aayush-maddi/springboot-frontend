
// import React, { Component } from 'react';

// class HolidaysCalendar extends Component {
//     render() {
//         const calendarStyle = {
//             border: "0",
//             width: "100%",
//             height: "800px" // Increase height to 800px
//         };

//         return (
//             <div className="festival-calendar">
//                 {/* Integrated Google Calendar with Indian Festivals */}
//                 <iframe 
//                     src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
//                     style={calendarStyle}
//                     frameborder="0"
//                     scrolling="no"
//                     title="Indian Festival Calendar"
//                 ></iframe>
//             </div>
//         );
//     }
// }

// export default HolidaysCalendar;


import React, { Component } from 'react';
import { Spinner } from 'reactstrap'; // Using reactstrap for the spinner
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

class HolidaysCalendar extends Component {
  state = {
    loading: true, // Set loading state to true initially
  };

  handleIframeLoad = () => {
    this.setState({ loading: false }); // Set loading to false once the iframe is loaded
  };

  render() {
    const calendarStyle = {
      border: "0",
      width: "100%",
      height: "800px", // Increase height to 800px
    };

    const spinnerStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999, // Ensures the spinner is above everything
    };

    return (
      <div className="festival-calendar" style={{ position: "relative", height: "100vh" }}>
        {this.state.loading && (
          <div style={spinnerStyle}>
            <Spinner style={{ width: '3rem', height: '3rem' }} color="primary" />
          </div>
        )}
        
        {/* Integrated Google Calendar with Indian Festivals */}
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
          style={calendarStyle}
          frameBorder="0"
          scrolling="no"
          title="Indian Festival Calendar"
          onLoad={this.handleIframeLoad} // Set the onLoad event to hide the spinner
        ></iframe>
      </div>
    );
  }
}

export default HolidaysCalendar;




