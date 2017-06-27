import React , {Component} from 'react';
import party from '../assets/party.png'

class AgeStats extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let other_day = new Date(date).getTime();
        let difference = Math.abs(today - other_day);
        /*console.log(today);
        console.log(other_day);
        console.log(difference);*/
        let days = Math.floor(difference / (1000 * 3600 * 24 ));
        let years = Math.floor(days / 365);
        days -= years*365;
        let months = Math.floor(days / 31);
        days -= months*31; 
        return `Congratulation you are ${years} years,  ${months} months ,  ${days} days in this world!  `
    }


    render() {
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Be Happy!  {this.timeSince(this.props.date)}</h4>
                <img src={party} alt="party" className = "party center img-responsive"/>
            </div>
        )
    }
}

export default AgeStats;

