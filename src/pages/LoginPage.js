import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

var LoginPage = React.createClass({
        getInitialState: function(){
            return {
                username: ' '
            }
        },
        render: function() {
            return (
                <DocumentTitle title={`Login`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h3>Login</h3>
                                <hr />
                            </div>
                        </div>
                        <LoginForm redirectTo="/profile" />
                    </div>
                </DocumentTitle>
            );
        }

});
module.exports = LoginPage;
//export default class LoginPage extends React.Component {
//    render() {
//        return (
//            <DocumentTitle title={`Login`}>
//                <div className="container">
//                    <div className="row">
//                        <div className="col-xs-12">
//                            <h3>Login</h3>
//                            <hr />
//                        </div>
//                    </div>
//                    <LoginForm redirectTo="/profile" />
//                </div>
//            </DocumentTitle>
//        );
//    }
//}