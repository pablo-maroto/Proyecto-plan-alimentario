import './ExploreContainer.css';
import '../pages/Tab1.tsx'


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div className="container">
    <strong>{name}</strong>
    
  </div>  
  )  
};

export default ExploreContainer;
