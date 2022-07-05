import { Component } from "react";
import AccountCircle from "../../res/account_circle.svg";
import avatar1 from "../../images/avatar1.png"
import avatar2 from "../../images/avatar2.jpg"
import Status from "../../res/status-icon";
import Chats from "../../res/chat";
import MoreMenu from "../../res/more_vert";
import search from "../../res/search.svg";
import "./style.css";

export default class Header extends Component {
    render() {
        return <header >
            <div className="header">
                <i className="avatar">
                    <img src={AccountCircle} height="40" alt="avatar" />
                </i>
                <ul className="action-buttons-list">
                    <li className="action-item">
                        <Status />
                    </li>
                    <li className="action-item">
                        <Chats />
                    </li>
                    <li className="action-item">
                        <MoreMenu />
                    </li>
                </ul>
            </div>
            <div className="search">
                <input className="search-space" placeholder="search or start new chat" > 
                    <img src={search} height="20" alt="search"/>
                </input>
            </div>
            <div className="chats-list">
                <div className="single-chat">
                   <div className="text">
                    <img src={avatar2} height="40" alt="avatar" />
                    <div>                        
                    <p className="person-name">person 1 </p>
                    <p className="person-text">Good morning</p>
                    </div>
                    </div>
                    <div>
                    <p>8:10 a.m</p>
                    <p>nber icon</p>
                    </div>
                </div>
                <div className="single-chat">
                   <div className="text">
                    <img src={avatar1} height="40" alt="avatar" />
                    <div>                        
                    <p>person 2</p>
                    <p>Your work</p>
                    </div>
                    </div>
                    <div>
                    <p>9:10 a.m</p>
                    <p>nber icon</p>
                    </div>
                </div>

            </div>
        </header>
    }
}