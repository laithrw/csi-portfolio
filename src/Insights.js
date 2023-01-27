import './App.css';
var insightNumber = 1;


function updateParameters() {
  if (insightNumber == 1) {
    return {
        insightName: 'Insight Statement #1',
        insightStatement: 'Digital platforms were often glitchy, which made it harder to campaign.'
    };
    } else if (insightNumber == 2) {
        return {
            insightName: 'Insight Statement #2',
            insightStatement: 'We spoke to people working on national campaigns in which technology played a major role, but many of the local activists said that they prioritized in-person outreach.'
        };
    } else if (insightNumber == 3) {
        return {
            insightName: 'Insight Statement #3',
            insightStatement: 'Local campaigns have had trouble funding a technological approach to outreach and mobilization due to a high cost of entry, leading to less efficient canvassing and a lack of analytics. The campaigns that used digital tools were typically national and had much bigger budgets.'
        };
    }
    else {
        return {
            insightName: 'Error: Please reload the page and try again.',
            insightStatement: ''
        };
  };
};


function reloadPage() {
    insightNumber = insightNumber + 1;
    if (insightNumber > 3) {
        insightNumber = 1;
    }
    var parameters = updateParameters();
    document.querySelector('.insight-header').innerHTML = parameters['insightName'];
    document.querySelector('.insight-statement').innerHTML = parameters['insightStatement'];
}

const Insights = () => {
    return (
        <div className="insights-container">
            <p className="insight-header">Insight Statement #1</p>
            <p className="insight-statement">Digital platforms were often glitchy, which made it harder to campaign.</p>
            <button onClick={() => reloadPage()} className="next-insight">{`SEE NEXT INSIGHT →`}</button>
        </div>
    );
};  

export default Insights;