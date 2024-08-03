import "./main.css"
import Counter from "./Counter"
import Button from "./Button"
function MainBody() {
    return (
        <main>
            <Counter />
            <div className="btn-cont">
                <Button text="Decrement" />
                <Button />
            </div>
        </main>)
}

export default MainBody