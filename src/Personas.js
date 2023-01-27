import './App.css';
var personaNumber = 1;


function updateParameters() {
  if (personaNumber == 1) {
    return {
        personaName: '#1: Jemma Gen Z Activist',
        personaLink: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FcR5CTyoeUKtwFANO0ZsJzc%2FPortfolio%253A-Persona-1%3Fnode-id%3D0%253A1%26t%3Dwid2q3KdWB4hWkab-1'
    };
    } else if (personaNumber == 2) {
        return {
            personaName: '#2: Sally Super Campaigner',
            personaLink: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FaAa8e3fDDn7ItJWfVJvKP0%2FPortfolio-Persona-2%3Fnode-id%3D0%253A1%26t%3DIVWBPr2OzNMaDThi-1'
        };
    } else if (personaNumber == 3) {
        return {
            personaName: '#3: Parker Policy Worker',
            personaLink: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMp2LmXqTRmjGdtE5dDu0XG%2FPortfolio%253A-Persona-3%3Fnode-id%3D0%253A1%26t%3Ds0zSmhvL1BfO2Ubn-1'
        };
    }
    else {
        return {
            personaName: 'Error: Please reload the page and try again.',
            personaLink: ''
        };
  };
};


function reloadPage() {
    personaNumber = personaNumber + 1;
    if (personaNumber > 3) {
        personaNumber = 1;
    }
    var parameters = updateParameters();
    document.querySelector('.persona-header').innerHTML = parameters['personaName'];
    document.querySelector('.figma-embed-persona').src = parameters['personaLink'];
}

const Personas = () => {
    return (
        <div className="persona">
            <p className="persona-header">#1: Jemma Gen Z Activist</p>

            <div className="persona-embed-container">
            <iframe className='figma-embed-persona' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FcR5CTyoeUKtwFANO0ZsJzc%2FPortfolio%253A-Persona-1%3Fnode-id%3D0%253A1%26t%3Dwid2q3KdWB4hWkab-1' allowFullScreen></iframe>
          </div>

        <div className="next-persona-container">
        <button onClick={() => reloadPage()} className="next-persona">{`SEE NEXT PERSONA →`}</button>
        </div>
        
        </div>
    );
};  

export default Personas;