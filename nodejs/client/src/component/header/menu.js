import React from "react";
import './menu.css';
import { changestate } from '../../actions/menu-action';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class menu extends React.Component {

    changstateonclick = () => {

        this.props.openmenu();



    }
    render() {



        return (
            <>

                <nav className={
                    this.props.stateMenu ? "menuboard" : "menuboard.active"
                }>
                    <ul onClick={this.changstateonclick}>
                        <i className="fa-solid fa-x"></i>
                        <li className="items">
                            <li>
                                <Link to="#">
                                    <i class="fa-solid fa-house"></i>
                                    <span>Trang chủ</span>
                                </Link>
                            </li>
                            <li>

                                <Link to="#">
                                    <i class="fa-solid fa-book"></i>
                                    <span>Cẩm nang</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" >
                                    <i class="fa-regular fa-address-card" style={{ paddingRight: '20px' }}></i>
                                    <span>Tuyển dụng</span>
                                </Link>
                            </li>
                        </li>


                    </ul>
                </nav>

            </>
        )
    }


}
const mapStateToProps = (State) => {
    return {
        stateMenu: State.reducerMenu.stateMenu
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openmenu: () => dispatch(changestate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);