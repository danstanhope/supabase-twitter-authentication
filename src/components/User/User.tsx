import './User.css';

const User = (props: any) => {
    let { user } = props;
    
    user = user.identities && user.identities.length > 0 ? user.identities[1].identity_data : {};

    return (
        (
            <>
                <div className="flex items-center space-x-4 lg:space-x-6">
                    <img className="w-8 h-8 rounded-full lg:w-10 lg:h-10" src={user.avatar_url} alt="" />
                    <div className="font-medium text-lg leading-6 space-y-1">
                        <h3>
                            <span className="font-bold">Welcome</span>, @{user.full_name}
                            </h3>
                    </div>
                </div>
            </>
        )
    )
}

export default User;