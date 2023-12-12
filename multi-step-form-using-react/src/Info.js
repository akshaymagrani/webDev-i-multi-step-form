function Info(props) {
    console.log(props);
    return (
        <section className="personalInfo card1">
            <div className="card card-bg pd-3">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>

                <legend htmlFor="name">Name</legend>
                <input type="text" className="pd-2 w-auto" id="name" name="Name" placeholder="e.g. Stephen King" autoComplete="given-name"/>
                <br /><br />
                <legend htmlFor="email">Email Address</legend>
                <input type="email" className="pd-2 w-auto" id="email" name="Email" placeholder="e.g. stephenking@lorem.com" autoComplete="email"/>
                <br /><br />
                <legend htmlFor="phone-no">Phone Number</legend>
                <input type="number" className="pd-2 w-auto" id="phone-no" name="Phone-No" placeholder="e.g. +1 234 567 890" required/>
                <br /><br />
            </div>
            <div className="btn-position">
                <input type="button" className="pd-2" id="next1" name="Next-1" value="Next Step" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default Info;