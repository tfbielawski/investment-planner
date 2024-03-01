import React from "react";

function UserInput({onChangeInput, userInput}) {
          
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Intial Investment</label>
                    <input 
                        onChange={(event)=>onChangeInput("initialInvestment", event.target.value)}
                        type="number" 
                        required
                        //maps value entered to the initialInvestment kv pair in state obj
                        value={userInput.initialInvestment}
                     />
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input
                        onChange={(event)=>onChangeInput("annualInvestment", event.target.value)} 
                        type="number" 
                        required
                        value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input 
                        onChange={(event)=>onChangeInput("expectedReturn", event.target.value)} 
                        type="number" 
                        required
                        value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label >Investment Duration</label>
                    <input 
                        onChange={(event)=>onChangeInput("duration", event.target.value)} 
                        type="number" 
                        required
                        value={userInput.duration}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput;