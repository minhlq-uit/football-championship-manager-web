import { useLocation, useRouteMatch } from "react-router-dom";

import MyLeague from './MyLeague'
import MyTeam from './MyTeam'
function Account (){
    const location = useLocation()
    return (
        <div class="container">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="well well-sm">
                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <img src="/account.png" height='100' />
                            </div>
                            <div class="col-sm-6 col-md-8">
                                <h4>My Account</h4>
                                <small><cite title="San Francisco, USA">Thủ Đức,Việt Nam<i class="glyphicon glyphicon-map-marker">
                                </i></cite></small>
                                <p>
                                    <i class="glyphicon glyphicon-envelope"></i>myaccount123@gamil.com
                                    <br />
                                    <i class="glyphicon glyphicon-gift"></i>June 01, 2001</p>
        

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="/account/myleague">Quản Lý giải đấu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/account/myteam">Quản lý đội</a>
                </li>
            </ul>
            <MyLeague/>
        </div>
    )

}
export default Account;