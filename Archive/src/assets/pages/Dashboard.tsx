import '/Users/preethamyerragudi/AptLock/src/assets/css/Dashboard.css';
import getLocation from './User';

function formatNumber(number: number){
    return number.toLocaleString();
  }


function Dashboard(){
  const currentDate = new Date();
  var month = "";
  var day = currentDate.getDay();
  var year = currentDate.getFullYear();
  var numMonthlyAdditions = Math.round(Math.random() * 100000000);
  var numClosedDeals = Math.round(Math.random() * numMonthlyAdditions);
  var numFinalStage = numMonthlyAdditions-numClosedDeals;
  var numActiveEnquiries = Math.round(Math.random() * 4)+1 * numMonthlyAdditions;
  switch(currentDate.getMonth()+1){
    case(1):
      month = "January";
      break;
    case(2):
      month = "Febuary";
      break;
    case(3):
      month = "March";
      break;
    case(4):
      month = "April";
      break;
    case(5):
      month = "May";
      break;
    case(6):
      month = "June";
      break;
    case(7):
      month = "July";
      break;
    case(8):
      month = "August";
      break;
    case(9):
      month = "September";
      break;
    case(10):
      month = "October";
      break;
    case(11):
      month = "November";
      break;
    case(12):
      month = "December";
      break;
  }

  return (
    <div className="dashboard">
            <div className="dashboard-stats">
              <div className="dashboard-item">
                <h2>Active Enquiries (All/ Area)</h2>
                <div className="dashboard-section">
                  <div className="dashboard-stat">
                    Rs. {formatNumber(numActiveEnquiries)}
                      <div className ="dashboard-stat-description">
                        Ongoing
                      </div>
                    </div>
                </div>
              </div>
              <div className="dashboard-item">
                <h2>Deals Added This Month</h2>
                <div className="dashboard-section">
                  <div className="dashboard-stat">
                    Rs. {formatNumber(numMonthlyAdditions)}
                      <div className='dashboard-stat-description'>
                        In {month}
                      </div>
                    </div>
                </div>
              </div>
              <div className="dashboard-item">
                <h2>Closed Deals</h2>
                <div className="dashboard-section">
                  <div className="dashboard-stat">
                    Rs. {formatNumber(numClosedDeals)}
                      <div className='dashboard-stat-description'>
                        In {month}
                      </div>
                    </div>
                </div>
              </div>
              <div className="dashboard-item">
                <h2>In the Final Stage</h2>
                <div className="dashboard-section">
                  <div className="dashboard-stat">
                    Rs. {formatNumber(numFinalStage)}
                      <div className='dashboard-stat-description'>
                        In {month}
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div id='wrapper'>
                
                <div className='enquiries-list'>
                <h2 className='enquiry-intro'>New Enquiries in {getLocation()}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Enquirer Name
                                </th>
                                <th>
                                    Contact
                                </th>
                                <th>
                                    Contacted Thru
                                </th>
                                <th>
                                    Status/Stage
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                            <tr>
                                <td>21, Jan 2024</td>
                                <td>Venkata Oruganti</td>
                                <td>9849027373</td>
                                <td>Website</td>
                                <td>Verification</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="task-list">
                <h2>Task List - {month} {day}, {year}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Follow up with client A</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Prepare proposal for project X</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>Meeting with team Y</td>
                        <td>In Progress</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            
  );
}

export default Dashboard;