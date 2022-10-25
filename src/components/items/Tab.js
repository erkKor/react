import React, { useEffect, useState } from 'react'

const Tab = ({children, active = 0}) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, element =>{
            if(!React.isValidElement(element)) return;

            const {props: {tab, children}} = element;
            data.push({tab, children});
        })

        setTabsData(data);
    }, [children])
    return (
        <div>
            <ul className="tab-menu">
                {
                    tabsData.map(({tab}, idx) => (
                        <li className="tab-item">
                            <button className={`tab-link ${idx === active ? "active" : ""}`} 
                            href="#"
                            onClick={()=> setActiveTab(idx)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div className="tab-content">
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>
        </div>
      )
}

  

const TabContent = ({children}) => {
  return{children} 
}

Tab.TabContent = TabContent;

export default Tab