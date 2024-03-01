import React from "react";
import './header.css';
import { NavLink } from "react-router-dom";
import Menu from './menu'
import { connect } from 'react-redux';
import { changestate } from '../../actions/menu-action';
class header extends React.Component {

    OpenMenu = () => {
        this.props.dispatch(changestate());
        console.log("shfk");
        console.log(this.props.stateMenu)
    }

    render() {
        return (
            <>


                <div className="container">

                    <i class="fa-solid fa-bars" onClick={this.OpenMenu}></i>
                    <div className="Logo-header"></div>
                    <div className="between-items">
                        {this.props.isOpen ? <Menu /> : null}

                        <NavLink
                            to="/home"
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : "pending"
                            }
                        >
                            tất cả
                        </NavLink>
                        <NavLink
                            to="/tainha"
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : "pending"
                            }
                        >
                            tại nhà
                        </NavLink>
                        <NavLink
                            to="/taivien"
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : "pending"
                            }
                        >
                            tại viện
                        </NavLink>
                        <NavLink
                            to="/songkhoe"
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : "pending"
                            }
                        >
                            sống khỏe
                        </NavLink>
                    </div>
                    <div className="righr-items">
                        <div className="schedule">
                            <div className="schedule-icon"> </div>
                            <span>Lịch Hẹn</span>
                        </div>

                        <div className="support">
                            <div className="support-icon"> </div>
                            <span>Hỗ Trợ</span>
                        </div>
                    </div>

                </div>



            </>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.reducerMenu.stateMenu
    }
}

export default connect(mapStateToProps)(header);