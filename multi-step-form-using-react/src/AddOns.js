function AddOns(props) {
    console.log(props);
    return (
        <section className=" card3">
            <div className="card-bg card pd-3">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <label className="container addOn">
                <div>
                    <input type="checkbox" name="multiplayer-checbox" />
                    <span className="checkmark"></span>
                    <div>
                    <h2>Online service</h2>
                    <p className="p-color">Access to multiplayer games</p>
                    </div>
                </div>
                <p>+$<span className="addOn-rates">1</span>/<span className="m-y">mo</span></p>
                </label>

                <label className="container addOn">
                    <div>
                    <input type="checkbox" name="extra-space-checkbox" />
                    <span className="checkmark"></span>
                    <div>
                        <h2>Larger storage</h2>
                        <p className="p-color">Extra 1TB of cloud save</p>
                    </div>
                    </div>
                    <p>+$<span className="addOn-rates">2</span>/<span className="m-y">mo</span></p>
                </label>

                <label className="container addOn">
                    <div>
                    <input type="checkbox" name="theme-checkbox" />
                    <span className="checkmark"></span>
                    <div>
                        <h2>Customizable Profile</h2>
                        <p className="p-color">Custom theme on your profile</p>
                    </div>
                    </div>
                    <p>+$<span className="addOn-rates">2</span>/<span className="m-y">mo</span></p>
                </label>
            </div>

            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back3" value="Go Back" onClick={() => props.makeVisible(props.componentNameBack)}/>
                <input type="button" className="pd-2" name="Next-3" id="next3" value="Next Step" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default AddOns;