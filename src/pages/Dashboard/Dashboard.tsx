import './Dashboard.css';
import User from '../../components/User/User';
import Logout from '../../components/Logout/Logout';
import { connect } from "react-redux";

const Dashboard = (props: any) => {
    const { authUser, ...rest } = props;

    return (
        <>
            <div className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full border-b border-gray-200 border-solid	">
                        <ul role="list" className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                            <li className="flex justify-start lg:w-0 lg:flex-1">
                                <User user={authUser} />
                            </li>
                            <li className=" md:flex justify-end md:flex-1 lg:w-0">
                                <Logout />
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center">
                        <p className="mx-auto justify-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Protected part of your app.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        authUser: state.auth.authUser
    }
};

export default connect(mapStateToProps)(Dashboard);
