function ConditionalRendering() {
    let content;
    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }

    return (
        <div>
            // 1 way to do conditional rendering
            {content}

            // 2nd way to do conditional rendering
            {isLoggedIn ? (
                <h1> Welcome to the admin panel</h1>
            ) : (
                <h1> Welcome to the login form </h1>
            )
            }

            // 3rd way to do conditional rendering - when we no need to use else
            {isLoggedIn && <h1>Welcome to the admin panel</h1>}
        </div>

    )
}