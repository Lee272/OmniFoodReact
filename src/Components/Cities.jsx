import React from 'react';
import { Icon } from 'react-icons-kit';
import {androidPerson} from 'react-icons-kit/ionicons/androidPerson';
import {androidStar} from 'react-icons-kit/ionicons/androidStar';
import {socialTwitter} from 'react-icons-kit/ionicons/socialTwitter'
import  Lisbon from '../img/lisbon-3.jpg';



export default class Cities extends React.Component{



  render(){
    return(

      <section>
{/* Card - One */}
        <div className="Card-Template w-25">
          <div className="Card-Image bg-gray-100 rounded-lg overflow-hidden border">

            <div className="relative bg-red-300">
              <img src={Lisbon} alt="City-Lisbon" className="absolute h-full w-full" />
            </div>

            <div className="p-6">
              <h4 className="font-semibold text-lg">Lisbon</h4>
              <div className="Card-Details text-gray-600 text-xs uppercase font-semibold tracking-wide">
                <div style={{ color: '#e67e22' }} className="">
                  <Icon size={20} icon={androidPerson} />
                  <span className="ml-2">1600+ happy eaters</span>
                </div>
                <div style={{ color: '#e67e22' }} className="">
                  <Icon size={20} icon={androidStar} />
                  <span className="ml-2">60+ top chefs</span>
                </div>
                <div style={{ color: '#e67e22' }} className="">
                  <Icon size={20} icon={socialTwitter} />
                  <span className="ml-2"><a href="#home" alt="linking">@omnifood_lx</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* Card - Two */}

{/* Card - Three */}

{/* Card - Four */}
      </section>
    )
  }
}