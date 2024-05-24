export default function UserInput ({handleAccounting}) {
    
    function handleChange ({target},position) {
        handleAccounting(target.value, position);
    }

    function Inputs (firstbox, lastbox, position) {
        return (
            <>
                <span className="input-group">
                    <label>
                        {firstbox}
                        <input for={firstbox} type="number" required defaultValue="0" onChange={(event) => handleChange(event, 2*position)} />
                    </label>
                    <label>
                        {lastbox}
                        <input for={lastbox} type="number" required defaultValue="0" onChange={(event) => handleChange(event, 2*position+1)} />
                    </label>
                </span>
            </>
        );
    }

    return (
        <ul id="user-input">
            {Inputs("INITIAL INVESTMENT", "ANNUAL INVESTMENT", 0)}
            {Inputs("EXPECTED RETURNS", "DURATION", 1)}
        </ul>
    );
}