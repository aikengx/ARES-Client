import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// // import {Navbar, Button, Nav, NavDropdown} from 'react-bootstrap';
// import { faStar, faPhone, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
// // import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SIP from 'sip.js'
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') })
const sipServer = process.env.SIP_SERVER;
const sipExten = process.env.SIP_EXTEN;
const sipSecret = process.env.SIP_SECRET;
const wssPort = process.env.WS_PORT;

export default class Phone extends Component {


  componentDidMount(){
    createSimple()
  }


  state = {

    sounds: {

      '0': '../../sounds/dtmf/0.wav',
      '1': '../../sounds/dtmf/1.wav',
      '2': '../../sounds/dtmf/2.wav',
      '3': '../../sounds/dtmf/3.wav',
      '4': '../../sounds/dtmf/4.wav',
      '5': '../../sounds/dtmf/5.wav',
      '6': '../../sounds/dtmf/6.wav',
      '7': '../../sounds/dtmf/7.wav',
      '8': '../../sounds/dtmf/8.wav',
      '9': '../../sounds/dtmf/9.wav',
      '#': '../../sounds/dtmf/pound.wav',
      '*': '../../sounds/dtmf/star.wav',
      'ring': '../../sounds/ring.wav'

    },
    number: ""
      
  }


  playSound = (num) => {
    console.log(num)
    let audio = document.createElement('audio');
    // console.log(this.state.sounds[num])
    audio.src = this.state.sounds[num];
    audio.play();
    this.setState({
      number: this.state.number + num
    })
  }


  dialedNumber = (e) => {
    //console.log(e.target.value)
    let num = e.target.value.split('').pop()
    console.log('last num',num)
    this.playSound(num)
    this.setState({
      number: e.target.value
    })
  }


  render() {

    return(

      <div className="">
      
      {/* <div className="container"> */}
        <div className="row">
        <div className="col-md-6 col-md-offset-6 phone">
        <div className="row1">
        <div className="col-md-12">
        <input type="tel" name="name" id="telNumber" className="form-control" value={this.state.number} onChange={this.dialedNumber}/>
        <div className="num-pad">
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('1')}>
        <div className="txt">1</div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('2')}>
        <div className="txt">2<span className="small"><p>ABC</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('3')}>
        <div className="txt">3<span className="small"><p>DEF</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('4')}>
        <div className="txt">4<span className="small"><p>GHI</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('5')}>
        <div className="txt">5<span className="small"><p>JKL</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('6')}>
        <div className="txt">6<span className="small"><p>MNO</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('7')}>
        <div className="txt">7<span className="small"><p>PQRS</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('8')}>
        <div className="txt">8<span className="small"><p>TUV</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('9')}>
        <div className="txt">9<span className="small"><p>WXYZ</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('*')}>
        <div className="txt">*</div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('0')}>
        <div className="txt">0<span className="small"><p>+</p></span></div>
        </div>
        </div>
        <div className="span4">
        <div className="num" onClick={()=>this.playSound('#')}>
        <div className="txt">#</div>
        </div>
        </div>
        </div>
        <div className="clearfix">
        </div>
        <button id="callButton" className="btn btn-success btn-block flatbtn" onClick={this.createSimple}>CALL</button>
        <button id="hangupButton" className="btn btn-danger btn-block flatbtn" hidden></button>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <div>
        {/* <div className="spanicons">
        <span><FontAwesomeIcon icon={faStar}/></span><span className="small">
        <p>Favorites</p>
        </span>
        </div>
        <div className="spanicons">
        <span><FontAwesomeIcon icon={faPhone}/></span><span className="small">
        <p>Calls</p>
        </span>
        </div>
        <div className="spanicons">
        <span><FontAwesomeIcon icon={faUser}/></span><span className="small">
        <p>Contacts</p>
        </span>
        </div>
        <div className="spanicons active">
        <span><FontAwesomeIcon icon={faEnvelope}/></span><span className="small">
        <p>Voicemail</p>
        </span>
        </div> */}
        </div>
        </div>
        </div>
        <audio id="localAudio"></audio>
        <video  id="remoteVideo"></video>
        <video  id="localVideo" muted="muted"></video>
        {/* <audio id="remoteAudio"></audio> */}
        <div className="clearfix">
        </div>
        </div> 
        </div>

        {/* </div> */}

      </div>

    );

  }

}


function createSimple() {

  var audio = document.createElement('audio');
  var localVideoElement = document.getElementById('localVideo');
  var remoteVideoElement = document.getElementById('remoteVideo');
  var button = document.getElementById('callButton');
  var button2 = document.getElementById('hangupButton');

  var configuration = {

    media: {
      local: {
        video: document.getElementById('localVideo'),
        audio: document.getElementById('localAudio')      
      },
      remote: {
        video: document.getElementById('remoteVideo'),
        // This is necessary to do an audio/video call as opposed to just a video call
        audio: document.getElementById('remoteVideo')
      }
    },
    ua: {
      traceSip: false,
      uri: '102@134.209.126.100',
      wsServers: 'wss://134.209.126.100:8089/ws',
      authorizationUser: '102',
      password: '37qIIV18F09m7u8H140s',
      displayName: "WebRTC"
    }

  };

  function playSound(sound) {
    if (sound == 'ring') {
      audio.src = '../../sounds/ring.mp3';
    } else if (sound == 'ringback') {
      audio.src = '../../sounds/ringback.wav';
    }
    audio.play();
  }


  var simple = new SIP.Web.Simple(configuration);
  // .className = 'btn btn-success btn-block flatbtn'
  // Adjust the style of the demo based on what is happening
  simple.on('ended', function() {
      remoteVideoElement.style.visibility = 'hidden';
      localVideoElement.style.visibility = 'hidden';
      button.hidden = false;
      button2.hidden = true;
      button.firstChild.nodeValue = 'CALL';
      audio.pause();
      // button2.style.visibility = 'hidden'
  });

  simple.on('connected', function() {
      console.log(simple.state);
      remoteVideoElement.style.visibility = 'hidden';
      localVideoElement.style.visibility = 'hidden';
      button.hidden = true;
      //button.style.visibility = 'hidden';
      button2.hidden = false;
      button2.innerText = 'HANG UP';
      audio.pause();
    });

  simple.on('ringing', function() {
      //alert("Incoming Call!");
      playSound('ring')
      button.firstChild.nodeValue = 'ANSWER';
      // simple.answer();
      console.log(simple.state)
      //button2.style.visibility = 'visible'
      button2.hidden = false;
      button2.innerText = 'REJECT'; 
  });

  simple.on('connecting', function() {
    playSound('ringback')
  });


  button.addEventListener('click', function() {
      // No current call up
      let num = document.getElementById('telNumber').value
      console.log(num)
      if (simple.state === SIP.Web.Simple.C.STATUS_NULL || simple.state === SIP.Web.Simple.C.STATUS_COMPLETED) {
        simple.call(`${num}@134.209.126.10`);
      } else if (simple.state === 1) {
        simple.answer();
        audio.pause();
      } else {
        simple.hangup();
      }
          
  });


  button2.addEventListener('click', function() {
    // No current call up
    if (simple.state === 1) {
      //button2.firstChild.nodeValue = 'REJECT';
      simple.reject();
    } else if (simple.state === 3) {
      simple.hangup();
    }
        
});
  
  
  
  return simple;

}