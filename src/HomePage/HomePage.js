import React from 'react';

function HomePage() {
  return (
    <div className="container center" role="main">

        <div className="page-area" role="region" aria-labelledby="sectionHeading">

            <div className="text-box">
                <h1 id="sectionHeading">Effective Budget Tracking</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Budget Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Financial Success</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </div>
            <div id="pie-chart"></div>

        </div>

    </div>
  );
}

export default HomePage;
