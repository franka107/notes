import { QuartzComponentConstructor } from "../types"
import style from "../styles/customLinksHeader.scss"

export default (() => {
  function CustomLinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Parrot/Color/parrot_color.svg"></img>
            <a href="/notes/english/michigan-lessons">Michigan English</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Card%20index/Color/card_index_color.svg"></img>
            <a href="https://camargomau.com/">Blog (WIP)</a>
          </span>
          {/* <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Books/Color/books_color.svg"></img>
            <a href="/Sciujo/MAC/MAC">MAC</a>
          </span> */}
          {/* <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/Color/brain_color.svg"></img>
            <a href="/Sciujo/Sciujo">Learn</a>
          </span>
          
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Triangular%20ruler/Color/triangular_ruler_color.svg"></img>
            <a href="/Sciujo/Mathematics">Maths</a>
          </span> */}
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Laptop/Color/laptop_color.svg"></img>
            <a href="/Sciujo/Computing">Computation (WIP)</a>
          </span>
        </div>
        <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  CustomLinksHeader.css = style
  return CustomLinksHeader
}) satisfies QuartzComponentConstructor
