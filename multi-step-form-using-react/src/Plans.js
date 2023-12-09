function Plans() {
    return (
        <section className="card2" id="plan">
            <div className="card-bg  pd-3 card">
                <h1>Select your plan</h1>
                <p className="p-color">You have the option of monthly or yearly billing.</p>
                <div className="gr-plan">
                <label className="plan" htmlFor="plan-1">
                    <input type="radio" name="Plan" id="plan-1" />
                    <img src="./assets/images/icon-arcade.svg" alt="arcade-icon" />
                    <div>
                    <h2>Arcade</h2>
                    <p className="p-color">$<span className="monthlyCost">9</span>/<span className="m-y">mo</span></p>
                    <p className="gr-offer">2 months free</p>
                    </div>
                </label>
                <label className="plan" htmlFor="plan-2">
                    <input type="radio" name="Plan" id="plan-2" />
                    <img src="./assets/images/icon-advanced.svg" alt="advance-icon"/>
                    <div>
                    <h2>Advanced</h2>
                    <p className="p-color">$<span className="monthlyCost">12</span>/<span className="m-y">mo</span></p>
                    <p className="gr-offer">2 months free</p>
                    </div>
                </label>
                <label className="plan" htmlFor="plan-3">
                    <input type="radio" name="Plan" id="plan-3" />
                    <img src="./assets/images/icon-pro.svg" alt="pro-icon"/>
                    <div>
                    <h2>Pro</h2>
                    <p className="p-color">$<span className="monthlyCost">15</span>/<span className="m-y">mo</span></p>
                    <p className="gr-offer">2 months free</p>
                    </div>
                </label>
                </div>
                <div className="M-or-Y">
                    <p>Monthly</p>
                    {/* Rounded switch */}
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" name="monthlyYearly" className="M-or-Y1" />
                        <span className="slider round"></span>
                    </label>
                    <p>Yearly</p>
                </div>
            </div>
            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back2" value="Go Back" />
                <input type="button" className="pd-2" name="Next-2" id="next2" value="Next Step" />
            </div>
        </section>
    )
}

export default Plans;