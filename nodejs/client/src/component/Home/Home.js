import React from "react";
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <>
                <div className="first-view">
                    <div className="backgroundcolor"> </div>
                    <div className="cover-image"><div className="image-home"></div></div>
                    <div className="search">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="search" />
                    </div>

                    <div className="services">
                        <div className="serv">
                            Khám Chuyên Khoa
                        </div>
                        <div className="serv">Khám Tổng Quát</div>
                        <div className="serv">Khám Từ Xa</div>
                        <div className="serv">Xét Nghiệm Y Học</div>
                        <div className="serv">Sức Khỏe Tinh Thần</div>
                        <div className="serv">Gói Phẫu Thuật</div>
                        <div className="serv">Bài Test Sức Khỏe</div>
                        <div className="serv">Y Tế Gần Bạn</div>
                    </div>
                </div>



            </>
        )
    }
}
export default Home;