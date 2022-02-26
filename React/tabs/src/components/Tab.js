import React, {useState} from 'react'

const Tab = (props) => {

    //destructure props
    const {tabs, currentTabIndex, setCurrentTabIndex} = props;
    console.log(tabs)

    //on select function to click a tab
    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    //conditional formatting
    const tabStyle = (index) => {
        if(index === currentTabIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
        }

    //map through tabs and display their title
    return (
        <div style={{
            margin: "auto", 
            width: "85%", 
            textAlign: "left",
        }}>
            {
                tabs.map( (tab,index) => (
                    <div 
                    key={index}
                    className={tabStyle(index)}
                    onClick={(e) => setSelectedTab(index)}
                    >
                        {tab.label}
                    </div>
                ))
            }
        <div className="results">
            {tabs[currentTabIndex].content}
        </div>
        </div>
    )

}

export default Tab;