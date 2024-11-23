import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

function MainContent() {
    return(
        <h1>Hello World!</h1>
    )
    
}
root.render(
    <MainContent />
)