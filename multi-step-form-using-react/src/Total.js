function Total(props) {
    let mORy = 'mo';
    mORy = props.formData.monthly_OR_yearly === false ? 'mo' : 'yr'
    return (
        <section className="card4">
            <form className="card-bg py-7 px-4 card" name="multi-step-form">
                <h1>Finishing up</h1>
                <p className="p-color">Double-check everything looks OK before confirming.</p>

                {/* Dynamically add subscription and add-on selections here */}
                <div id="totalCost">
                <div>
                    <div>
                    <h3>{props.formData.plan} (<span id="Mo-Ye">Monthly</span>)<span id="choice"></span></h3>
                    <a href="#plan">Change</a>
                    </div>
                    <p>$
                        {props.formData.plan === "Arcade" && <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.arcade}/${mORy}`: `${props.formData.yearlyRates.arcade}/${mORy}`}</span>}
                        {props.formData.plan === "Advanced" && <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.advanced}/${mORy}`: `${props.formData.yearlyRates.advanced}/${mORy}`}</span>}
                        {props.formData.plan === "Pro" && <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.pro}/${mORy}`: `${props.formData.yearlyRates.pro}/${mORy}`}</span>}
                    </p>
                </div>
                <hr />
                {props.formData.onlineService && 
                <div>
                    <p>Online service</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.onlineService}/${mORy}`: `${props.formData.yearlyRates.onlineService}/${mORy}`}</span>
                    </p>    
                </div>}
                {props.formData.extraSpace &&
                <div>
                    <p>Larger storage</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.extraSpace}/${mORy}`: `${props.formData.yearlyRates.extraSpace}/${mORy}`}</span>
                    </p>
                </div>}
                {props.formData.theme &&
                <div>
                    <p>Customizable Profile</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.theme}/${mORy}`: `${props.formData.yearlyRates.theme}/${mORy}`}</span>
                    </p>
                </div>}
                </div>
                <div className="pd-3 d-flex justify-spacebetween">
                <p className="p-color">Total (per<span></span>)</p>
                <p>+$<span id="total"></span>/<span className="m-y">mo</span></p>
                </div>
            </form>
            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back4" value="Go Back" onClick={() => props.makeVisible(props.componentNameBack)}/>
                <input type="button" className="pd-2" name="Confirm" id="next4" value="Confirm" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default Total;