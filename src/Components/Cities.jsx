import React from 'react';
import { Icon } from 'react-icons-kit';
import {androidPerson} from 'react-icons-kit/ionicons/androidPerson';
import {androidStar} from 'react-icons-kit/ionicons/androidStar';
import {socialTwitter} from 'react-icons-kit/ionicons/socialTwitter'
import  Lisbon from '../img/lisbon-3.jpg';
import  Berlin from '../img/berlin.jpg';
import  London from '../img/london.jpg';
import  SanFran from '../img/san-francisco.jpg';


export default class Cities extends React.Component{



  render(){
    return(

      <section>
        <div className="px-auto text-center">
          <h1 className="P-underline p-4">We Are In These Cities</h1>
        </div>
        {/* Card - DIVOne */}
        <div className="w-3/4 mx-auto md:flex md:w-full">
        {/* Card One */}
          <div className="m-2">
            <div className="w-full">
              <img className="rounded object-cover object-center"
                src={Lisbon} alt="Lisbon" />
            </div>
            <div>
              <h1 className="p-2 font-semibold text-2xl  md:text-xl lg:text-2xl">{ this.props.Cities[0] }</h1>
            </div>

            <div className="p-2">
              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidPerson} />
                <p className="mb-0 text-black">1600+ happy eaters</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidStar} />
                <p className="mb-0 text-black">60+ top chefs</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={socialTwitter} />
                <a className="text-orange-600 hover:text-black"
                  href="#home" alt="linking">@omnifood_lx</a>
              </div>
            </div>
          </div>
{/* CARD TWO */}
          <div className="m-2">
            <div className="w-full">
              <img className="rounded object-cover object-center"
                src={Berlin} alt="Lisbon" />
            </div>
            <div>
              <h1 className="p-2 font-semibold text-2xl md:text-xl lg:text-2xl">{ this.props.Cities[1] }</h1>
            </div>

            <div className="p-2">
              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidPerson} />
                <p className="mb-0 text-black">1600+ happy eaters</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidStar} />
                <p className="mb-0 text-black">60+ top chefs</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={socialTwitter} />
                <a className="text-orange-600 hover:text-black"
                  href="#home" alt="linking">@omnifood_lx</a>
              </div>
            </div>
          </div>
          {/* CARD THREE */}
          <div className="m-2">
            <div className="w-full">
              <img className="rounded object-cover object-center"
                src={London} alt="Lisbon" />
            </div>
            <div>
              <h1 className="p-2 font-semibold text-2xl md:text-xl lg:text-2xl">{ this.props.Cities[2] }</h1>
            </div>

            <div className="p-2">
              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidPerson} />
                <p className="mb-0 text-black">1600+ happy eaters</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidStar} />
                <p className="mb-0 text-black">60+ top chefs</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={socialTwitter} />
                <a className="text-orange-600 hover:text-black"
                  href="#home" alt="linking">@omnifood_lx</a>
              </div>
            </div>
          </div>
          {/* Card Four */}
          <div className="m-2">
            <div className="w-full">
              <img className="rounded object-cover object-center"
                src={SanFran} alt="Lisbon" />
            </div>
            <div>
              <h1 className="p-2 font-semibold text-2xl md:text-xl lg:text-2xl">{ this.props.Cities[3] }</h1>
            </div>

            <div className="p-2">
              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidPerson} />
                <p className="mb-0 text-black">1600+ happy eaters</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={androidStar} />
                <p className="mb-0 text-black">60+ top chefs</p>
              </div>

              <div style={{ color: '#e67e22' }} className="flex">
                <Icon size={20} icon={socialTwitter} />
                <a className="text-orange-600 hover:text-black"
                  href="#home" alt="linking">@omnifood_lx</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}