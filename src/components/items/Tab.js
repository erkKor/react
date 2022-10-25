import React, { useState } from 'react'

const NewTab = () => {
    const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
            setToggleState(index);
        }
 
  return (
    <div className="container-tab">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Description
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Additional
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
            Shopping & Returns
        </button>
        <button
        id="review"
          className={toggleState === 4 ? "tabs active-tabs review" : "tabs review"}
          onClick={() => toggleTab(4)}
        >
          Reviews
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
            Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. 
            Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. 
            Discovery incommode earnestly no he commanded if. Put still any about manor heard.
            <br/>
            <br/>
            * Village did removed enjoyed explain nor ham saw calling talking.
            <br/>
            * Securing as informed declared or margaret.
            <br/>
            * Joy horrible moreover man feelings own shy. 
            <br/>
            <br/>
            On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. 
            Always get adieus nature day course for common. My little garret repair to desire he esteem. 
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Cont 4
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewTab