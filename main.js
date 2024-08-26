const style1 = { color: '#ffffff', backgroundColor: '#23272F', padding:'15px',fontFamily: "Roboto"}
const style2 = { color: '#ffffff', backgroundColor: '#343A46', padding:'15px', borderRadius: '5px',fontFamily: "Roboto"}


function App() {
    return (
        <div style={style1}>
            <h1>Quick Start</h1>
            <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style={style2}>
                <h2>You will learn</h2>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)