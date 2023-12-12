function Total(props) {
    return (
        <section className="card4">
            <div className="card-bg pd-3 card">
                <h1>Finishing up</h1>
                <p className="p-color">Double-check everything looks OK before confirming.</p>

                {/* Dynamically add subscription and add-on selections here */}
                <div id="totalCost">
                <div>
                    <div>
                    <h3>Arcade (<span id="Mo-Ye">Monthly</span>)<span id="choice"></span></h3>
                    <a href="#plan">Change</a>
                    </div>
                    <p>$<span className="finish-rate">9</span>/<span className="m-y">mo</span></p>
                </div>
                <hr />
                <div>
                    <p>Online service</p>
                    <p>+$<span className="finish-rate">1</span>/<span className="m-y">mo</span></p>
                </div>
                <div>
                    <p>Larger storage</p>
                    <p>+$<span className="finish-rate">2</span>/<span className="m-y">mo</span></p>
                </div>
                </div>
                <div className="pd-3 d-flex justify-spacebetween">
                <p className="p-color">Total (per<span></span>)</p>
                <p>+$<span id="total"></span>/<span className="m-y">mo</span></p>
                </div>
            </div>
            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back4" value="Go Back" onClick={() => props.makeVisible(props.componentNameBack)}/>
                <input type="button" className="pd-2" name="Confirm" id="next4" value="Confirm" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default Total;