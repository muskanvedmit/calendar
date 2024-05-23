import React, {useState } from 'react';
export default function MyTabComponent({ children }) {
  console.log(children, "Children");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div>
        <div className="tab-buttons">
          {React.Children.map(children, (child, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={index}
                className={isActive ? "btn btn-active" : "btn"}
                onClick={() => handleTabClick(index)}
                disabled={isActive}
              >
                {child.props.title}
              </button>
            );
          })}
        </div>
        <div className="tab-content">
          {React.Children.map(children, (child, index) => {
            console.log(child, "Child");
            if (index === activeTab) {
              return (
                <div key={index} className="view">
                  {child.props.children}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* <div className="tab-bar">
        {data.map((item, index) => (
          <button
            key={index}
            className={activeTab === index ? "btn btn-active" : "btn"}
            onClick={() => handleTabClick(index)}
            disabled={activeTab === index}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="view">
        {data[activeTab] && data[activeTab].content}
      </div> */}
    </>
  );
}
